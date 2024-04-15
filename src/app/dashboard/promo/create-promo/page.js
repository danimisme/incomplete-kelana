"use client";
import Input from "@/components/Elements/input/Input";
import Label from "@/components/Elements/input/Label";
import styles from "./CreatePromoPage.module.css";
import useUpload from "@/services/useUpload";
import { useState } from "react";

export default function CreatePromoPage() {
  const { upload } = useUpload();
  const [imageUrl, setImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [massage, setMassage] = useState(null);

  const handleFileChange = async (e) => {
    setIsLoading(true);
    e.preventDefault();
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
      console.log(error);
    }
  };

  return (
    <div className="mt-5 container-lg">
      <div className="row py-5">
        <h1 className="text-center mb-3">Create Promo</h1>
        <div className="col-lg-6 col-10">
          <div className="mb-3">
            <Label htmlFor="title">Title</Label>
            <Input id="title" name="title" />
          </div>
          <div className="mb-3">
            <Label htmlFor="description">Description</Label>
            <textarea
              id="description"
              name="description"
              className="form-control"
            ></textarea>
          </div>
          <div className="mb-3">
            <Label htmlFor="terms_condition">Terms & Condition</Label>
            <Input id="terms_condition" name="terms_condition" />
          </div>
          <div className="mb-3">
            <Label htmlFor="promo_code">Promo Code</Label>
            <Input id="promo_code" name="promo_code" />
          </div>
          <div className="mb-3">
            <Label htmlFor="promo_discount_price">Promo Discount Price</Label>
            <Input id="promo_discount_price" name="promo_discount_price" />
          </div>
          <div className="mb-3">
            <Label htmlFor="minimum_claim_price">Minimum Claim Price</Label>
            <Input id="minimum_claim_price" name="minimum_claim_price" />
          </div>
        </div>
        <div className="col-lg-6 col-10">
          <div className="mb-3 text-center">
            <img
              src={imageUrl || "/images/pngtree-image-upload.jpg"}
              alt=""
              className={styles.image}
            />
          </div>
          <div className="my-3">
            <Label htmlFor="imageUrl">Image File</Label>
            <Input
              id="imageUrl"
              name="imageUrl"
              type="file"
              onChange={handleFileChange}
            />
          </div>
          {massage && <p className="text-danger">{massage}</p>}
          <button className="btn btn-primary" disabled={isLoading}>
            Create Promo
          </button>
        </div>
      </div>
    </div>
  );
}
