"use client";
import useGetData from "@/services/useGetData";
import { useEffect, useState } from "react";
export default function ActivityPage() {
  const { getData } = useGetData();
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    getData("activities").then((res) => setActivities(res.data.data));
  }, []);
  return (
    <div className="mt-5 container-lg">
      <div className="row py-5">
        <div className="col-lg-10 col-10 mx-auto">
          <h1>Activity Data</h1>
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
                    <button className="btn btn-outline-success me-2 my-2">
                      Edit
                    </button>
                    <button className="btn btn-outline-danger">Delete</button>
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
