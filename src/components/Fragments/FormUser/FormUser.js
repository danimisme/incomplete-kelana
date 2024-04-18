import Input from "@/components/Elements/input/Input";
import styles from "./FormUser.module.css";
import Label from "@/components/Elements/input/Label";
import { toggleFormUser } from "@/redux/slices/FormUserSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import useUpload from "@/services/useUpload";
import useUpdate from "@/services/useUpdate";
import { useRouter } from "next/navigation";

export default function EditUserForm({ user }) {
  const dispatch = useDispatch();
  const isFormUserOpen = useSelector((state) => state.formUser.isFormUserOpen);
  const [file, setFile] = useState(null);
  const [profilePictureUrl, setProfilePictureUrl] = useState(null);
  const { upload } = useUpload();
  const { update } = useUpdate();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [massageImage, setMassageImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    if (!file.type.startsWith("image/")) {
      setIsLoading(true);
      setMassageImage(
        "File harus berupa gambar dengan format JPEG, PNG, GIF, BMP, atau TIFF"
      );
    } else {
      setIsLoading(false);
      setMassageImage(null);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    formData.append("image", file);
    try {
      const res = await upload("upload-image", formData);
      setProfilePictureUrl(res.data.url);
      setIsLoading(false);
      setMassageImage(null);
      return res.data.url;
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    const userData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phoneNumber: e.target.phoneNumber.value,
      profilePictureUrl: profilePictureUrl || user?.profilePictureUrl,
    };
    try {
      await update("update-profile", userData);
      window.location.reload();
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  const handleCloseForm = () => {
    dispatch(toggleFormUser());
    setProfilePictureUrl(null);
    setFile(null);
    user = null;
  };

  return (
    <div
      className={` ${styles.form_container} ${
        isFormUserOpen ? styles.show : styles.hide
      }`}
    >
      <form className={styles.form} onSubmit={handleUpdateUser}>
        <h2>Edit User</h2>
        <i
          className={`${styles.close_btn} bi bi-x-circle fs-3`}
          onClick={() => handleCloseForm()}
        ></i>
        <div className="mb-3 d-flex align-items-center gap-3">
          <img
            src={profilePictureUrl || user?.profilePictureUrl}
            alt="Profile Picture"
            className={styles.image}
          />
          <div>
            <Input
              type="file"
              name="profilePictureUrl"
              id="profilePictureUrl"
              onChange={handleFileChange}
            />
            {massageImage && (
              <p className="text-danger small">{massageImage}</p>
            )}
            <button
              className="btn btn-success"
              onClick={handleUpload}
              disabled={isLoading}
            >
              Upload
            </button>
          </div>
        </div>
        <div className=" mb-3">
          <Label htmlFor="name">Name</Label>
          <Input type="text" name="name" id="name" defaultValue={user?.name} />
        </div>
        <div className=" mb-3">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            defaultValue={user?.email}
          />
        </div>
        <div className=" mb-3">
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <Input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            defaultValue={user?.phoneNumber}
          />
        </div>
        <button className="btn btn-success" type="submit" disabled={isLoading}>
          Submit
        </button>
      </form>
    </div>
  );
}
