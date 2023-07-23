
import Select from 'react-dropdown-select';

const HotelSearch = () => {
  const options = [
    {
      value: 1,
      label: "1 Room(s) - 1 Guest(s)",
    },
    {
      value: 2,
      label: "1 Room(s) - 2 Guest(s)",
    },
    {
      value: 3,
      label: "2 Room(s) - 4 Guest(s)",
    },
  ];
  return (
    <div className='max-md:px-5'>
      <div className="w-full gap-7 lg:flex max-md:space-y-5 justify-around items-end border-[#1066B5] shadow-2xl shadow-[#1065b517] mt-14 border md:p-12 p-7 rounded-2xl ">
        <div className='w-full'><h5>Destination</h5>
          <div>
            <Select
              style={{
                border: "1px solid red",
                borderRadius: "5px",
                color: "blue",
                fontSize: "16px",
              }}

              className="mt-2 pl-10 w-[243px] border !border-[#808996a9] h-12 rounded"
              options={options}
              placeholder="Total Passengers"
            />
          </div>
        </div>
        <div className='w-full'><h5 className='font-medium'> Check In - Check Out</h5>
          <div>
            <Select
              style={{
                border: "1px solid red",
                borderRadius: "5px",
                color: "blue",
                fontSize: "16px",
              }}

              className="mt-2 pl-10 w-[243px] border !border-[#808996a9] h-12 rounded"
              options={options}
              placeholder="Total Passengers"
            />
          </div>
        </div>
        <div className='w-full'><h5 className='font-medium'>Guests</h5>
          <div>
            <Select
              style={{
                border: "1px solid red",
                borderRadius: "5px",
                color: "black",
                fontSize: "16px",
                paddingLeft: "10px"
              }}

              className="mt-2 pl-10 text-black  w-[243px] border !border-[#808996a9]  h-12 rounded"
              options={options}
              placeholder="1 Room(s) - 1 Guest(s)"
            />
          </div>

        </div>
        <div className='w-full'><button className='defaultColor w-full border py-2.5 text-white text-lg font-medium rounded-lg' type='submit'>
          Search Now</button></div>

      </div>
    </div>
  );
};

export default HotelSearch;