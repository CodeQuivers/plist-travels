import Select from "react-dropdown-select";

const DropDown = ({options, placeholder, setOnChange}) => {
  return (
    <div>
      <Select
        style={{ width: "243px", paddingLeft: "13px", borderColor: "#80899633"}}
        className="mt-2 pl-10 border-2 h-12 rounded"
        options={options}
        placeholder={placeholder}
        onChange={(val)=>setOnChange(val[0].value)}
      />
    </div>
  );
};

export default DropDown;
