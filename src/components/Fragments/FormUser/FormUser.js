import Input from "@/components/Elements/input/Input";
import styles from "./FormUser.module.css";
import Label from "@/components/Elements/input/Label";
import { toggleFormUser } from "@/redux/slices/FormUserSlice";
import { useDispatch, useSelector } from "react-redux";

export default function EditUserForm({ user }) {
  const dispatch = useDispatch();
  const isFormUserOpen = useSelector((state) => state.formUser.isFormUserOpen);
  return (
    <div
      className={` ${styles.form_container} ${
        isFormUserOpen ? styles.show : styles.hide
      }`}
    >
      <form className={styles.form}>
        <h2>Edit User</h2>
        <i
          className={`${styles.close_btn} bi bi-x-circle fs-3`}
          onClick={() => dispatch(toggleFormUser())}
        ></i>
        <div className="mb-3 d-flex align-items-center gap-3">
          <img
            src={user?.profilePictureUrl}
            alt="Profile Picture"
            className={styles.image}
          />
          <div>
            <Input
              type="file"
              name="profilePictureUrl"
              id="profilePictureUrl"
            />
            <button className="btn btn-success mt-3">Upload</button>
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
        <button className="btn btn-success">Submit</button>
      </form>
    </div>
  );
}
