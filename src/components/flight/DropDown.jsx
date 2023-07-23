import Select from "react-dropdown-select";

const DropDown = () => {
  const options = [
    {
      value: 1,
      label: "Leanne Graham",
    },
    {
      value: 2,
      label: "Ervin Howell",
    },
  ];
  return (
    <div>
      <Select
        style={{ width: "243px" }}
        className="mt-2 pl-10  border-2 border-gray-300 h-12 rounded"
        options={options}
        placeholder="Delhi and NCR, India"
      />
    </div>
  );
};

export default DropDown;
