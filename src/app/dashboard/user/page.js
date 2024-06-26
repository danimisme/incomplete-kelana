"use client";
import { useEffect, useState } from "react";
import useAuth from "@/services/useAuth";
import EditUserForm from "@/components/Fragments/FormUser/FormUser";
import { useDispatch } from "react-redux";
import { toggleFormUser } from "@/redux/slices/FormUserSlice";
export default function UserPage() {
  const { userLog } = useAuth();
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    userLog("all-user", setUsers);
  }, []);

  const handleEdit = (user) => {
    setUser(user);
    dispatch(toggleFormUser());
  };

  return (
    <div className="mt-5 container-lg ">
      <div className="row py-3">
        <div className="col-lg-10 col-10 mx-auto">
          <h1>User Page</h1>
          <table className="table table-striped table-bordered ">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Picture</th>
                <th scope="col">Name</th>
                <th scope="col" className="d-none d-md-table-cell">
                  Email
                </th>
                <th scope="col" className="d-none d-md-table-cell">
                  Phone Number
                </th>
                <th scope="col" colSpan={2} className="text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <img
                      src={user.profilePictureUrl}
                      width={35}
                      height={35}
                      className="rounded-circle"
                    />
                  </td>
                  <td>{user.name}</td>
                  <td className="d-none d-md-table-cell">{user.email}</td>
                  <td className="d-none d-md-table-cell">{user.phoneNumber}</td>
                  <td>
                    <button className="btn btn-dark">Edit role</button>
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
