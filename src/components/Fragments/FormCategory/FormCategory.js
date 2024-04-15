"use client";

import { useState } from "react";
import styles from "./FormCategory.module.css";
import Label from "@/components/Elements/input/Label";
import Input from "@/components/Elements/input/Input";
import { toggleFormCategory } from "@/redux/slices/FormCategorySlice";
import { useDispatch, useSelector } from "react-redux";
import useUpload from "@/services/useUpload";

export default function FormCategory() {
  const dispatch = useDispatch();
  const isFormCategoryOpen = useSelector(
    (state) => state.formCategory.isFormCategoryOpen
  );
  const [imageUrl, setImageUrl] = useState(null);
  const [massage, setMassage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { upload } = useUpload();
  const handleCloseForm = () => {
    dispatch(toggleFormCategory());
    setMassage(null);
    setIsLoading(false);
    setImageUrl(null);
  };

  const handleFileChange = async (e) => {
    setIsLoading(true);
    const file = e.target.files[0];
    if (!file.type.startsWith("image/")) {
      setMassage(
        "File harus berupa gambar dengan format JPEG, PNG, GIF, BMP, atau TIFF."
      );
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await upload("upload-image", formData);
      setImageUrl(res.data.url);
      setIsLoading(false);
      setMassage(null);
      return res.data.url;
    } catch (error) {
      setMassage(
        "Failed to upload image, Maybe the image is too big, try another image."
      );
      console.log(error);
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!imageUrl || !e.target.name.value) {
      setMassage("Please fill in all required fields");
      return;
    }

    setIsLoading(true);
    const categoryData = {
      name: e.target.name.value,
      imageUrl: imageUrl,
    };
    try {
      const res = await upload("create-category", categoryData);
      if (res.status === 200) {
        window.location.reload();
      }
    } catch (error) {
      setMassage("Failed to create category");
      console.log(error);
    }
  };

  return (
    <div
      className={`${styles.form_container} ${
        isFormCategoryOpen ? styles.show : styles.hide
      }`}
    >
      <form className={styles.form} onSubmit={handleCreate}>
        <i
          className={`${styles.close_btn} bi bi-x-circle fs-3`}
          onClick={() => handleCloseForm()}
        ></i>
        <h1>Create Category</h1>
        <div className="mb-3">
          <img
            src={imageUrl || "/images/pngtree-image-upload.jpg"}
            alt="upload-img"
            className={styles.image}
          />
        </div>
        <div className="mb-3">
          <Label htmlFor="image">Image File</Label>
          <Input
            type="file"
            name="image"
            id="image"
            onChange={handleFileChange}
          />
        </div>
        <div className="mb-3">
          <Label htmlFor="name">Name</Label>
          <Input type="text" name="name" id="name" />
        </div>
        {massage && <p className="text-danger">{massage}</p>}
        <button className="btn btn-outline-success" disabled={isLoading}>
          Create
        </button>
      </form>
    </div>
  );
}
