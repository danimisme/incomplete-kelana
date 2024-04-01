export default function Label({ value, children, ...props }) {
  return <label {...props}>{value || children}</label>;
}
