import { FaCheck } from "react-icons/fa6";

const HotelDetailsAmenities = () => {
  const amenities = [
    {
      isAvailable: false,
      title: "Small pets allowed (under 5 kg)",
    },
    {
      isAvailable: false,
      title: "Towels and bed linen",
    },
    {
      isAvailable: false,
      title: "Car park",
    },
    {
      isAvailable: false,
      title: "Large pets allowed (over 5 kg)",
    },
    {
      isAvailable: false,
      title: "Check-in hour",
    },
    {
      isAvailable: true,
      title: "Garage",
    },
    {
      isAvailable: false,
      title: "Wi-fi",
    },
    {
      isAvailable: false,
      title: "Check-out hour",
    },

    {
      isAvailable: false,
      title: "Medical service",
    },
    {
      isAvailable: false,
      title: "Secure parking",
    },
    {
      isAvailable: false,
      title: "Lift access",
    },

    {
      isAvailable: false,
      title: "24-hour security",
    },
  ];

  return (
    <div className="w-full">
      <h1 className="tour-detail-header grad-text-olc">Amenities</h1>
      <div className="grid mt-5 grid-cols-2 gap-[10px] w-full  ">
        {amenities?.map((item) => (
          <div className="flex items-center gap-3" key={Math.random()}>
            <span
              className={`${
                item?.isAvailable
                  ? "bg-gradient-to-r from-[#0F5CB3] to-[#1596C1]"
                  : "bg-[#E6E8EC]"
              } "border p-1  rounded-full`}
            >
              <FaCheck className="text-white" size={14} />
            </span>
            <p className="text-[#7F8FA4]">{item?.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelDetailsAmenities;
