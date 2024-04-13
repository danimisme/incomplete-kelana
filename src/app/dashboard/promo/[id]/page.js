"use client";
import Input from "@/components/Elements/input/Input";
import Label from "@/components/Elements/input/Label";
import useGetData from "@/services/useGetData";
import Link from "next/link";
import { useEffect, useState } from "react";
import useUpload from "@/services/useUpload";
import useUpdate from "@/services/useUpdate";
export default function DetailPromoPage({ params }) {
  const { getData } = useGetData();
  const [promo, setPromo] = useState({});
  const [file, setFile] = useState(null);
  const [imagePromoUrl, setImagePromoUrl] = useState(null);
  const { upload } = useUpload();
  const { update } = useUpdate();
  useEffect(() => {
    getData(`promo/${params.id}`).then((res) => setPromo(res?.data?.data));
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    try {
      const res = await upload("upload-image", formData);
      setImagePromoUrl(res.data.url);
      console.log(res);
      return res.data.url;
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdatePromo = async (e) => {
    e.preventDefault();
    const promoData = {
      title: e.target.title.value,
      description: e.target.description.value,
      imageUrl: imagePromoUrl || promo?.imageUrl,
      terms_condition: e.target.terms_condition.value,
      promo_code: e.target.promo_code.value,
      promo_discount_price: Number(e.target.promo_discount_price.value),
      minimum_claim_price: Number(e.target.minimum_claim_price.value),
    };
    try {
      const res = await update(`update-promo/${params.id}`, promoData);
      if (res.status === 200) {
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-5 container-lg">
      <form onSubmit={handleUpdatePromo}>
        <div className="row py-5">
          <h1 className="text-center mb-3">Edit Promo</h1>
          <div className="col-lg-6 col-10 mx-auto">
            <img
              src={imagePromoUrl || promo.imageUrl}
              alt={promo.title}
              className="img-fluid"
            />
            <div className="my-3">
              <Label className="form-label" htmlFor="imageUrl">
                Image File
              </Label>
              <Input
                type="file"
                className="form-control"
                id="imageUrl"
                onChange={handleFileChange}
              />
              <button
                className="btn btn-primary mt-2"
                type="button"
                onClick={handleUpload}
              >
                Upload Image
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-10 mx-auto">
            <div className="mb-3">
              <Label htmlFor="title" className="form-label">
                Title
              </Label>
              <Input
                className="form-control"
                id="title"
                defaultValue={promo.title}
              />
            </div>
            <div className="mb-3">
              <Label htmlFor="description" className="form-label">
                Description
              </Label>
              <textarea
                className="form-control"
                id="description"
                rows="3"
                defaultValue={promo.description}
              ></textarea>
            </div>
            <div className="mb-3">
              <Label htmlFor="promo_code" className="form-label">
                Promo Code
              </Label>
              <Input
                className="form-control"
                id="promo_code"
                defaultValue={promo.promo_code}
              />
            </div>
            <div className="mb-3">
              <Label htmlFor="minimum_claim_price" className="form-label">
                Minimum Claim Price
              </Label>
              <Input
                type="number"
                className="form-control"
                id="minimum_claim_price"
                defaultValue={promo.minimum_claim_price}
              />
            </div>
            <div className="mb-3">
              <Label htmlFor="terms_condition" className="form-label">
                Terms & Conditions
              </Label>
              <Input
                id="terms_condition"
                defaultValue={promo.terms_condition}
              />
            </div>
            <div className="mb-3">
              <Label htmlFor="promo_discount_price" className="form-label">
                Promo Discount Price
              </Label>
              <Input
                type="number"
                className="form-control"
                id="promo_discount_price"
                defaultValue={promo.promo_discount_price}
              />
            </div>
            <button type="submit" className="btn btn-success">
              Edit Promo
            </button>
            <Link href="/dashboard/promo">
              <button className="btn btn-secondary mx-2" type="button">
                Back
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
