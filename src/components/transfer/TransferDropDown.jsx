import Select from 'react-dropdown-select';

const TransferDropDown = () => {
    const options = [
        {
          value: 1,
          label: "Rangpur, Saidpur",
        },
        {
          value: 2,
          label: "Dhaka Biman",
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

export default TransferDropDown;