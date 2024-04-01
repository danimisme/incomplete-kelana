export default function CheckBox({ value, children, id, ...props }) {
  return (
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        value={value}
        id={id}
        {...props}
      />
      <label class="form-check-label" for={id}>
        {children}
      </label>
    </div>
  );
}
