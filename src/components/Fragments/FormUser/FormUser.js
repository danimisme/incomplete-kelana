import Input from "@/components/Elements/input/Input";
import styles from "./FormUser.module.css";
import Label from "@/components/Elements/input/Label";
export default function EditUserForm({ user }) {
  return (
    <div className={styles.form_container}>
      <form className={styles.form}>
        <h2>Edit User</h2>
        <div className="mb-3">
          <img src={user?.profilePictureUrl} alt="" />
        </div>
        <div className=" mb-3">
          <Label htmlFor="name">Name</Label>
          <Input type="text" name="name" id="name" placeholder="Your Name" />
        </div>
        <div className=" mb-3">
          <Label htmlFor="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="Email" />
        </div>
        <div className=" mb-3">
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <Input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Your Name"
          />
        </div>
      </form>
    </div>
  );
}
