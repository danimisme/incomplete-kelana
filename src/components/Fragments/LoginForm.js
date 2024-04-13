"use client";
import Label from "../Elements/input/Label";
import Input from "../Elements/input/Input";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import CheckBox from "../Elements/CheckBox";
import useAuth from "@/services/useAuth";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/slices/UserLoggedSlice";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { auth } = useAuth();
  const { userLog } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const userData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    try {
      const res = await auth("login", userData);
      if (res.status === 200) {
        getUserLogged();
        setTimeout(() => {
          router.push("/dashboard/user");
          setMessage(null);
          setIsLoading(false);
        }, 1000);
      }
    } catch (error) {
      setMessage("Failed to login");
      setTimeout(() => {
        setMessage(null);
        setIsLoading(false);
      }, 2000);
      console.log(error);
    }
  };

  const getUserLogged = () => {
    if (localStorage.getItem("token")) {
      userLog("user", (res) => dispatch(setUser(res)));
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
        {message && <div className="alert alert-danger">{message}</div>}
        <button className="btn btn-primary" disabled={isLoading}>
          {isLoading ? "Loading..." : "Login"}
        </button>
      </form>
      <p className="mt-3">
        Don&apos;t have an account? <Link href="/register">Register</Link>
      </p>
    </div>
  );
}
