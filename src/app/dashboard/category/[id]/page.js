"use client";
import useGetData from "@/services/useGetData";
import { useEffect, useState } from "react";
import Input from "@/components/Elements/input/Input";
import Label from "@/components/Elements/input/Label";
import Link from "next/link";
import useUpload from "@/services/useUpload";
import useUpdate from "@/services/useUpdate";
import styles from "./DetailCategoryPage.module.css";

export default function DetailCategoryPage({ params }) {
  const { getData } = useGetData();
  const [category, setCategory] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { upload } = useUpload();
  const [categoryImageUrl, setCategoryImageUrl] = useState(null);
  const [massage, setMassage] = useState(null);
  const { update } = useUpdate();

  useEffect(() => {
    getData(`category/${params.id}`).then((res) =>
      setCategory(res?.data?.data)
    );
  }, []);
  const handleFileChange = async (e) => {
    e.preventDefault();
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
      setCategoryImageUrl(res.data.url);
      setIsLoading(false);
      setMassage(null);
      return res.data.url;
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateCategory = async (e) => {
    e.preventDefault();
    const categoryData = {
      name: e.target.name.value,
      imageUrl: categoryImageUrl || category?.imageUrl,
    };
    try {
      const res = await update(`update-category/${params.id}`, categoryData);
      if (res.status === 200) {
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-5 container-lg">
      <div className="row py-3 align-items-center">
        <h1 className="mb-3 text-center">Edit Category</h1>
        <div className="col-lg-6 col-10 mx-auto ">
          <img
            src={categoryImageUrl || category?.imageUrl}
            alt={category?.title}
            className={styles.image}
          />
        </div>
        <div className="col-lg-6 col-10">
          <form onSubmit={handleUpdateCategory}>
            <div className="mb-3">
              <Label htmlFor="name" className="form-label">
                Category Name
              </Label>
              <Input
                type="text"
                className="form-control"
                id="name"
                defaultValue={category?.name}
              />
            </div>
            <div className="mb-3">
              <Label htmlFor="image" className="form-label">
                Image File
              </Label>
              <Input type="file" id="image" onChange={handleFileChange} />
            </div>
            {massage && <p className="text-danger">{massage}</p>}
            <button className="btn btn-success" disabled={isLoading}>
              Edit
            </button>
            <Link href="/dashboard/category">
              <button className="btn btn-secondary ms-2">Back</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
