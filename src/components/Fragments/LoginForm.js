"use client";
import Label from "../Elements/input/Label";
import Input from "../Elements/input/Input";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import CheckBox from "../Elements/CheckBox";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    handleLogin(userData);
  };

  const handleLogin = async (data) => {
    try {
      await axios.post(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/login`,
        data,
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
          },
        }
      );

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <p>Enter your credentials</p>
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
          />
          <Label htmlFor="email"> Your Email </Label>
        </div>
        <CheckBox
          id={"showPassword"}
          onClick={() => setShowPassword(!showPassword)}
        >
          Show Password
        </CheckBox>
        <div className="form-floating mb-3">
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Your Password"
          />
          <Label htmlFor="password"> Your Password </Label>
        </div>
        <button className="btn btn-primary">Login</button>
      </form>
      <p className="mt-3">
        Don&apos;t have an account? <Link href="/register">Register</Link>
      </p>
    </div>
  );
}
