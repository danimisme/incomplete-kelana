"use client";
import useGetData from "@/services/useGetData";
import { useEffect, useState } from "react";
import Input from "@/components/Elements/input/Input";
import Label from "@/components/Elements/input/Label";
import Link from "next/link";

export default function DetailCategoryPage({ params }) {
  const { getData } = useGetData();
  const [category, setCategory] = useState();
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData(`category/${params.id}`).then((res) =>
      setCategory(res?.data?.data)
    );
  }, []);
  console.log(category);
  return (
    <div className="mt-5 container-lg">
      <div className="row py-3">
        <h1 className="mb-3 text-center">Edit Category</h1>
        <div className="col-lg-6 col-10">
          <img
            src={category?.imageUrl}
            alt={category?.title}
            className="img-fluid"
          />
        </div>
        <div className="col-lg-6 col-10">
          <form>
            <div className="mb-3">
              <Label htmlFor="name" className="form-label">
                Category Name
              </Label>
              <Input
                type="text"
                className="form-control"
                id="name"
                defaultValue={category?.name}
              />
            </div>
            <div className="mb-3">
              <Label htmlFor="image" className="form-label">
                Image File
              </Label>
              <Input type="file" id="image" />
            </div>
            <button className="btn btn-success" disabled={isLoading}>
              {isLoading ? "Loading..." : "Edit"}
            </button>
            <Link href="/dashboard/category">
              <button className="btn btn-secondary ms-2">Back</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
