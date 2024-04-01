"use client";
import axios from "axios";
import Link from "next/link";
import CheckBox from "../Elements/CheckBox";
import Input from "../Elements/input/Input";
import Label from "../Elements/input/Label";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [section, setSection] = useState(1);

  const changeSection = () => {
    setSection(section === 1 ? 2 : 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: e.target.email.value,
      name: e.target.name.value,
      password: e.target.password.value,
      passwordRepeat: e.target.passwordRepeat.value,
      role: e.target.role.value,
      profilePictureUrl: e.target.profilePictureUrl.value,
      phoneNumber: e.target.phoneNumber.value,
    };

    handleRegister(userData);
  };

  const handleRegister = async (data) => {
    try {
      await axios.post(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/register`,
        data,
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
          },
        }
      );

      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <p>input your data </p>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div
            className={`col-md-6  ${
              section === 1 ? "register_1" : "register_1_hide"
            }`}
          >
            <div className="form-floating mb-3">
              <Input type="email" name="email" id="email" placeholder="Email" />
              <Label htmlFor="email">Email </Label>
            </div>
            <div className="form-floating mb-3">
              <Input name="name" id="name" placeholder="Full Name" />
              <Label htmlFor="email"> Full Name </Label>
            </div>
            <CheckBox
              id={"showPassword"}
              onClick={() => setShowPassword(!showPassword)}
            >
              Show Password
            </CheckBox>
            <div className="form-floating mb-3">
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
              />
              <Label htmlFor="password">Password</Label>
            </div>
            <div className="form-floating mb-3">
              <Input
                type={showPassword ? "text" : "password"}
                name="passwordRepeat"
                id="passwordRepeat"
                placeholder="Repeat Password"
              />
              <Label htmlFor="passwordRepeat">Repeat Password</Label>
            </div>
          </div>
          <div
            className={`col-md-6 ${
              section === 2 ? "register_2" : "register_2_hide"
            }`}
          >
            <div className="form-floating mb-3">
              <Input
                type="number"
                name="phoneNumber"
                id="phone"
                placeholder="Phone Number"
              />
              <Label htmlFor="phoneNumber">Phone Number</Label>
            </div>
            <div className="form-floating mb-3">
              <Input type="text" name="role" id="role" placeholder="role" />
              <Label htmlFor="role">role</Label>
            </div>
            <div className="form-floating mb-3">
              <Input
                type="text"
                name="profilePictureUrl"
                id="profilePictureUrl"
                placeholder="profilePictureUrl"
              />
              <Label htmlFor="profilePictureUrl">Profil Picture URL</Label>
            </div>
          </div>
        </div>
        <button
          type="button"
          className={`btn-next-form btn me-3 ${
            section === 1 ? "btn-primary" : "btn-secondary"
          }`}
          onClick={() => changeSection()}
        >
          {section === 1 ? "Next" : "Back"}
        </button>
        <button
          type="submit"
          className={`btn btn-primary ${
            section === 2 ? "btn_register" : "btn_register_hide"
          }`}
        >
          Register
        </button>
      </form>
      <p className=" mt-3">
        Already have an account? <Link href="/login">Login</Link>
      </p>
    </div>
  );
}
