import Label from "@/components/Elements/input/Label";
import styles from "./FormBanner.module.css";
import Input from "@/components/Elements/input/Input";
import { toggleFormBanner } from "@/redux/slices/FormBannerSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
export default function FormBanner() {
  const dispatch = useDispatch();
  const [imageUrl, setImageUrl] = useState("/images/pngtree-image-upload.jpg");
  const isFormBannerOpen = useSelector(
    (state) => state.formBanner.isFormBannerOpen
  );
  const handleCloseForm = () => {
    dispatch(toggleFormBanner());
  };
  return (
    <div
      className={`${styles.form_container} ${
        isFormBannerOpen ? styles.show : styles.hide
      }`}
    >
      <form className={styles.form}>
        <i
          className={`${styles.close_btn} bi bi-x-circle fs-3`}
          onClick={() => handleCloseForm()}
        ></i>
        <h1>Create Banner</h1>
        <div className="mb-3">
          <img src={imageUrl} alt="upload-img" className={styles.image} />
        </div>
        <div className="mb-3">
          <Label htmlFor="image">Image File</Label>
          <Input type="file" name="image" id="image" />
        </div>
        <div className="mb-3">
          <Label htmlFor="name">Name</Label>
          <Input type="text" name="name" id="name" />
        </div>

        <button className="btn btn-outline-success">Submit</button>
      </form>
    </div>
  );
}
