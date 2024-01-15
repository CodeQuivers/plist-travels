import Select from "react-dropdown-select";

import './dropdown.css';


const DropDown = ({ options, placeholder, setOnChange }) => {
  return (
    <div className="flight-dropdown w-[245px] h-12 flex gap-2 items-center gray-border py-2.5 px-3">
      <Select
        style={{ padding: 0, margin: 0, border:0 }}
        options={options}
        placeholder={placeholder}
        onChange={(val) => setOnChange(val[0].value)}
      />
    </div>
  );
};

export default DropDown;
