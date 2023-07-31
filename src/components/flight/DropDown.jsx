import Select from "react-dropdown-select";

const DropDown = () => {
  const options = [
    {
      value: 1,
      label: "1 Adult",
    },
    {
      value: 2,
      label: "2 Adult",
    },
  ];
  return (
    <div>
      <Select
        style={{ width: "243px", paddingLeft: "13px", borderColor: "#80899633"}}
        className="mt-2 pl-10 border-2 h-12 rounded"
        options={options}
        placeholder="Delhi and NCR, India"
      />
    </div>
  );
};

export default DropDown;
