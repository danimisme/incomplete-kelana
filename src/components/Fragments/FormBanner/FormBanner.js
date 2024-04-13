import Label from "@/components/Elements/input/Label";
import styles from "./FormBanner.module.css";
import Input from "@/components/Elements/input/Input";
import { toggleFormBanner } from "@/redux/slices/FormBannerSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import useUpload from "@/services/useUpload";
export default function FormBanner() {
  const dispatch = useDispatch();
  const [imageUrl, setImageUrl] = useState("/images/pngtree-image-upload.jpg");
  const { upload } = useUpload();
  const [isLoading, setIsLoading] = useState(false);
  const isFormBannerOpen = useSelector(
    (state) => state.formBanner.isFormBannerOpen
  );
  const handleCloseForm = () => {
    dispatch(toggleFormBanner());
  };

  const handleFileChange = async (e) => {
    setIsLoading(true);
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await upload("upload-image", formData);
      setImageUrl(res.data.url);
      return res.data.url;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const banner = {
      name: e.target.name.value,
      imageUrl: imageUrl,
    };
    console.log(banner);
  };

  return (
    <div
      className={`${styles.form_container} ${
        isFormBannerOpen ? styles.show : styles.hide
      }`}
    >
      <form className={styles.form} onSubmit={handleSubmit}>
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

        <button className="btn btn-outline-success" disabled={isLoading}>
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
