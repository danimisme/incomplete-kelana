"use client";
import Input from "@/components/Elements/input/Input";
import Label from "@/components/Elements/input/Label";
import useGetData from "@/services/useGetData";
import { useEffect, useState } from "react";
import useUpload from "@/services/useUpload";
import useUpdate from "@/services/useUpdate";

export default function DetailBannerPage({ params }) {
  const { getData } = useGetData();
  const [banner, setBanner] = useState({});
  const [bannerImageUrl, setBannerImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { upload } = useUpload();
  const { update } = useUpdate();
  useEffect(() => {
    getData(`banner/${params.id}`).then((res) => setBanner(res?.data?.data));
  }, []);

  const handleFileChange = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    try {
      const res = await upload("upload-image", formData);
      setBannerImageUrl(res.data.url);
      setIsLoading(false);
      return res.data.url;
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateBanner = async (e) => {
    e.preventDefault();
    const bannerData = {
      name: e.target.name.value,
      imageUrl: bannerImageUrl || banner?.imageUrl,
    };
    try {
      await update(`update-banner/${params.id}`, bannerData);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-5 container-lg">
      <div className="row py-3">
        <h1>Detail Banner</h1>
        <div className="col-lg-6 col-10">
          <img
            src={bannerImageUrl || banner?.imageUrl}
            alt={banner?.title}
            className="img-fluid"
          />
        </div>
        <div className="col-lg-6 col-10">
          <form onSubmit={handleUpdateBanner}>
            <div className="mb-3">
              <Label htmlFor="name" className="form-label">
                Banner Name
              </Label>
              <Input
                type="text"
                className="form-control"
                id="name"
                defaultValue={banner?.name}
              />
            </div>
            <div className="mb-3">
              <Label htmlFor="image" className="form-label">
                Image File
              </Label>
              <Input type="file" onChange={handleFileChange} id="image" />
            </div>
            <button className="btn btn-success" disabled={isLoading}>
              {isLoading ? "Loading..." : "Edit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
