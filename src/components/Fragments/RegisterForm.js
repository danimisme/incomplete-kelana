"use client";

import Input from "../Elements/input/Input";
import Label from "../Elements/input/Label";
import { useState } from "react";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <h1>Register</h1>
      <p>input your data </p>
      <form>
        <div className="form-floating mb-3">
          <Input type="email" name="email" id="email" placeholder="Email" />
          <Label htmlFor="email">Email </Label>
        </div>
        <div className="form-floating mb-3">
          <Input name="name" id="name" placeholder="Full Name" />
          <Label htmlFor="email"> Full Name </Label>
        </div>
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
      </form>
    </div>
  );
}
