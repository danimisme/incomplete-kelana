"use client";
import useGetData from "@/services/useGetData";
import Link from "next/link";
import { useEffect, useState } from "react";
import useDelete from "@/services/useDelete";
export default function ActivityPage() {
  const { getData } = useGetData();
  const [activities, setActivities] = useState([]);
  const { deleteData } = useDelete();
  const handleDelete = (id) => {
    deleteData(`delete-activity/${id}`).then((res) => {
      if (res.status === 200) {
        window.location.reload();
      }
    });
  };

  useEffect(() => {
    getData("activities").then((res) => setActivities(res.data.data));
  }, []);
  return (
    <div className="mt-5 container-lg">
      <div className="row py-5">
        <div className="col-lg-10 col-10 mx-auto">
          <div className="d-flex mb-3 align-items-center">
            <h1>Activity Data</h1>
            <Link href={`/dashboard/activity/create-activity`}>
              <button className="btn btn-outline-success ms-2">
                <i class="bi bi-plus-circle me-2"></i>
                Create Activity
              </button>
            </Link>
          </div>

          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Category</th>
                <th scope="col" colSpan={2} className="text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{activity.title}</td>
                  <td>
                    {activity.description.length > 50
                      ? activity.description.slice(0, 50) + "..."
                      : activity.description}
                  </td>
                  <td>{activity.category.name}</td>
                  <td>
                    <Link href={`/dashboard/activity/${activity.id}`}>
                      <button className="btn btn-outline-success me-2 my-2">
                        Edit
                      </button>
                    </Link>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => handleDelete(activity.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
