import Label from "../Elements/input/Label";
import Input from "../Elements/input/Input";

export default function LoginForm() {
  return (
    <div>
      <h1>Login</h1>
      <p>Enter your credentials</p>
      <form>
        <div className="form-floating mb-3">
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
          />
          <Label htmlFor="email"> Your Email </Label>
        </div>
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
    </div>
  );
}
