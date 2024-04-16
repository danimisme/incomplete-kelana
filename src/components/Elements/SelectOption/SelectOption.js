export default function SelectOption({ selectItems, id }) {
  return (
    <select className="form-select" id={id}>
      <option value="Select">Select</option>
      {selectItems.map((item) => {
        return (
          <option value={item.id} key={item.id}>
            {item.name}
          </option>
        );
      })}
    </select>
  );
}
