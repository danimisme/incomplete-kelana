"use client";
import { useState, useEffect } from "react";
import useGetData from "@/services/useGetData";
import Label from "@/components/Elements/input/Label";
import Input from "@/components/Elements/input/Input";
import Link from "next/link";
import styles from "./DetailActivityPage.module.css";
import useUpload from "@/services/useUpload";

export default function DetailActivityPage({ params }) {
  const [activity, setActivity] = useState({});
  const { getData } = useGetData();
  const [imageUrls, setImageUrls] = useState([]);
  const [file, setFile] = useState(null);
  const { upload } = useUpload();
  const [massageImage, setMassageImage] = useState(null);
  const [isLoadingImage, setIsLoadingImage] = useState(false);
  useEffect(() => {
    getData(`activity/${params.id}`).then((res) => {
      setActivity(res.data.data);
      setImageUrls(res.data.data.imageUrls);
    });
  }, []);

  const handleRemoveImage = (index) => {
    const newImageUrls = [...imageUrls];
    newImageUrls.splice(index, 1);
    setImageUrls(newImageUrls);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    if (!file.type.startsWith("image/")) {
      setMassageImage(
        "File harus berupa gambar dengan format JPEG, PNG, GIF, BMP, atau TIFF"
      );
    }
  };

  const handleUpload = async () => {
    setIsLoadingImage(true);
    if (!file) {
      setMassageImage("Please select an image file");
      return;
    }
    const formData = new FormData();
    formData.append("image", file);
    try {
      const res = await upload("upload-image", formData);
      setImageUrls([...imageUrls, res.data.url]);
      setIsLoadingImage(false);
      setMassageImage(null);
      return res.data.url;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-lg mt-5">
      <div className="row py-5">
        <h1>Detail Activity</h1>
        <div className="col-lg-6 col-10 mx-auto">
          <div className="mb-3">
            <Label htmlFor="title">Title</Label>
            <Input id="title" defaultValue={activity?.title} />
          </div>
          <div className="mb-3">
            <Label htmlFor="description">Description</Label>
            <textarea
              className="form-control"
              id="description"
              rows="3"
              defaultValue={activity?.description}
            ></textarea>
          </div>
          <div className="mb-3">
            <Label htmlFor="price">Price</Label>
            <Input type="number" id="price" defaultValue={activity?.price} />
          </div>
          <div className="mb-3">
            <Label htmlFor="price_discount">Price Discount</Label>
            <Input
              type="number"
              id="price_discount"
              defaultValue={activity?.price_discount}
            />
          </div>
          <div className="mb-3">
            <Label htmlFor="rating">Rating</Label>
            <Input type="number" id="rating" defaultValue={activity?.rating} />
          </div>
          <div className="mb-3">
            <Label htmlFor="total_reviews ">Total Review</Label>
            <Input
              type="number"
              id="total_reviews"
              defaultValue={activity?.total_reviews}
            />
          </div>
          <div className="mb-3">
            <Label htmlFor="Facilities">Facilities</Label>
            <Input id="Facilities" defaultValue={activity?.facilities} />
          </div>
        </div>
        <div className="col-lg-6 col-10 mx-auto">
          <div className="row mb-3">
            {imageUrls.map((imageUrl, index) => (
              <div className={`col-5 ${styles.image_container}`} key={index}>
                <img
                  src={imageUrl}
                  alt={`Image ${index + 1}`}
                  className={styles.image}
                />
                <div
                  className={styles.icon_remove}
                  onClick={() => handleRemoveImage(index)}
                >
                  <p className="p-0 m-0">Remove</p>
                  <i className={`bi bi-x-square-fill text-danger`}></i>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-3">
            <Label htmlFor="imageUrls">Image Files</Label>
            <Input id="imageUrls" type="file" onChange={handleFileChange} />
          </div>
          <div className="mb-3">
            {massageImage && <p className="text-danger">{massageImage}</p>}
            <button
              className="btn btn-outline-success me-2"
              onClick={handleUpload}
            >
              Add Image
            </button>
          </div>
          <div className="mb-3">
            <Label htmlFor="address">Address</Label>
            <textarea
              id="address"
              rows="3"
              defaultValue={activity?.address}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <Label htmlFor="city">City</Label>
            <Input id="city" defaultValue={activity?.city} />
          </div>
          <div className="mb-3">
            <Label htmlFor="province">Province</Label>
            <Input id="province" defaultValue={activity?.province} />
          </div>
          <div className="mb-3">
            <Label htmlFor="location_maps">Location Maps</Label>
            <textarea
              id="location_maps"
              rows="3"
              className="form-control"
              defaultValue={activity?.location_maps}
            />
          </div>
          <div className="mb-3">
            <button className="btn btn-success me-2">Edit Activity</button>
            <Link href={`/dashboard/activity`}>
              <button className="btn btn-secondary">Cancel</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
