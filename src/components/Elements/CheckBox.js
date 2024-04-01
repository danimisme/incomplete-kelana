export default function CheckBox({ value, children, id, ...props }) {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        value={value}
        id={id}
        {...props}
      />
      <label className="form-check-label" htmlFor={id}>
        {children}
      </label>
    </div>
  );
}
