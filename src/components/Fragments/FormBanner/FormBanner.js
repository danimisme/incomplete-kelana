import Label from "@/components/Elements/input/Label";
import styles from "./FormBanner.module.css";
import Input from "@/components/Elements/input/Input";
export default function FormBanner() {
  return (
    <div className={styles.form_container}>
      <form className={styles.form}>
        <h1>Create Banner</h1>
        <div className="mb-3">
          <Label htmlFor="name">Name</Label>
          <Input type="text" name="name" id="name" />
        </div>
        <div className="mb-3">
          <Label htmlFor="image">Image File</Label>
          <Input type="file" name="image" id="image" />
        </div>
        <button className="btn btn-outline-success">Submit</button>
      </form>
    </div>
  );
}
