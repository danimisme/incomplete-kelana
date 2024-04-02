import LoginForm from "@/components/Fragments/LoginForm";

export const metadata = {
  title: "Login",
  description: "Login to your account",
};

export default function LoginPage() {
  return (
    <div className="row d-flex vh-100 align-items-center justify-content-center">
      <div className="col-lg-3 col-md-6 col-10 my-5">
        <LoginForm />
      </div>
    </div>
  );
}
