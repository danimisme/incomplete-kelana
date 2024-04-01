export default function Input({ type = "text", ...props }) {
  return <input {...props} type={type} className="form-control" />;
}
