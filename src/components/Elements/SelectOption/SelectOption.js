export default function SelectOption({ selectItems, id, defaultValue }) {
  return (
    <select
      className="form-select"
      id={id}
      defaultValue={defaultValue || "Select"}
    >
      <option value="Select">Select</option>
      {selectItems.map((item) => {
        return (
          <option
            value={item.id}
            key={item.id}
            selected={item.id === defaultValue}
          >
            {item.name}
          </option>
        );
      })}
    </select>
  );
}
