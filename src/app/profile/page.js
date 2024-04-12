"use client";
import useAuth from "@/services/useAuth";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleFormUser } from "@/redux/slices/FormUserSlice";
import EditUserForm from "@/components/Fragments/FormUser/FormUser";
export default function ProfilePage() {
  const { userLog } = useAuth();
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    userLog("user", (res) => {
      setUser(res);
    });
  }, []);
  return (
    <div className="mt-5 container-lg">
      <div className="row py-3">
        <h2>Profile Page</h2>
        <div className="col-lg-4 col-10">
          <img
            src={user?.profilePictureUrl}
            alt={user?.name}
            className="img-fluid rounded mb-3"
          />
        </div>
        <div className="col-lg-8 col-10">
          <h3>{user?.name}</h3>
          <p>
            <span className="fw-bold"> Email : </span>
            {user?.email}
          </p>
          <p>
            <span className="fw-bold"> Phone : </span>
            {user?.phoneNumber}
          </p>
          <p>
            <span className="fw-bold"> Role : </span>
            {user?.role}
          </p>
          <button
            className="btn btn-outline-success"
            onClick={() => dispatch(toggleFormUser())}
          >
            Edit Profile
          </button>
        </div>
      </div>
      <EditUserForm user={user} />
    </div>
  );
}
