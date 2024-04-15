"use client";

import { useState } from "react";
import styles from "./FormCategory.module.css";
import Label from "@/components/Elements/input/Label";
import Input from "@/components/Elements/input/Input";
import { toggleFormCategory } from "@/redux/slices/FormCategorySlice";
import { useDispatch, useSelector } from "react-redux";

export default function FormCategory() {
  const dispatch = useDispatch();
  const isFormCategoryOpen = useSelector(
    (state) => state.formCategory.isFormCategoryOpen
  );
  const [imageUrl, setImageUrl] = useState(null);
  const [massage, setMassage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div
      className={`${styles.form_container} ${
        isFormCategoryOpen ? styles.show : styles.hide
      }`}
    >
      <form className={styles.form}>
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
          <Input type="file" name="image" id="image" />
        </div>
        <div className="mb-3">
          <Label htmlFor="name">Name</Label>
          <Input type="text" name="name" id="name" />
        </div>
        {massage && <p className="text-danger">{massage}</p>}
        <button className="btn btn-outline-success" disabled={isLoading}>
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
