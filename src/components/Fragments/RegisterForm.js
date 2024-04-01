"use client";

import Link from "next/link";
import CheckBox from "../Elements/CheckBox";
import Input from "../Elements/input/Input";
import Label from "../Elements/input/Label";
import { useState } from "react";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [section, setSection] = useState(1);

  const changeSection = () => {
    setSection(section === 1 ? 2 : 1);
  };

  return (
    <div>
      <h1>Register</h1>
      <p>input your data </p>
      <form>
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
                name="phone"
                id="phone"
                placeholder="Phone Number"
              />
              <Label htmlFor="phone">Phone Number</Label>
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
