import React, { useEffect } from "react";
import Label from "@/components/Elements/input/Label";
import Input from "@/components/Elements/input/Input";
import SelectOption from "@/components/Elements/SelectOption/SelectOption";
import Link from "next/link";
import { useState } from "react";
import useUpload from "@/services/useUpload";
import useGetData from "@/services/useGetData";
import styles from "./FormActivity.module.css";

export default function FormActivity({ activity, onSubmit }) {
  const [file, setFile] = useState(null);
  const [isLoadingImage, setIsLoadingImage] = useState(false);
  const { upload } = useUpload();
  const { getData } = useGetData();
  const [categories, setCategories] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [massageImage, setMassageImage] = useState(null);

  useEffect(() => {
    getData("categories").then((res) => {
      setCategories(res.data.data);
    });
  }, []);

  useEffect(() => {
    if (activity) {
      setImageUrls(activity.imageUrls);
    }
  }, [activity]);

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

  const handleUpload = async (e) => {
    e.preventDefault();
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const select = document.getElementById("select-categories");
    const categoryId = select.value;
    if (categoryId === "Select") {
      return;
    }

    const dataActivity = {
      categoryId: categoryId,
      title: e.target.title.value,
      description: e.target.description.value,
      imageUrls: imageUrls,
      price: Number(e.target.price.value),
      price_discount: Number(e.target.price_discount.value),
      rating: Number(e.target.rating.value),
      total_reviews: Number(e.target.total_reviews.value),
      facilities: e.target.facilities.value,
      address: e.target.address.value,
      city: e.target.city.value,
      province: e.target.province.value,
      location_maps: e.target.location_maps.value,
    };
    onSubmit(dataActivity);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row py-5">
        <h1>Detail Activity</h1>
        <div className="col-lg-6 col-10 mx-auto">
          <div className="mb-3">
            <Label htmlFor="title">Title</Label>
            <Input id="title" defaultValue={activity?.title} />
          </div>
          <div className="mb-3">
            <Label htmlFor="category">Category</Label>
            <SelectOption
              selectItems={categories}
              id="select-categories"
              defaultValue={activity?.categoryId}
            />
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
            <Input id="facilities" defaultValue={activity?.facilities} />
          </div>
        </div>
        <div className="col-lg-6 col-10 mx-auto">
          <div className="row mb-3">
            {imageUrls?.map((imageUrl, index) => (
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
              type="button"
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
            <button className="btn btn-success me-2">
              {activity ? "Update Activity" : "Create Activity"}
            </button>
            <Link href={`/dashboard/activity`}>
              <button className="btn btn-secondary">Cancel</button>
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}
