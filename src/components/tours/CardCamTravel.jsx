import UpiCamTravel1Img from "../../assets/image/tours/upiCamTravel/upiCamTravel1.png"

const CardCamTravel = () => {
  return (
    <div className="h-full w-[266px] border border-[#169FC3] rounded-2xl flex flex-col tour-bg text-white">
      <img
        src={UpiCamTravel1Img}
        className="w-[266px] h-[280px] rounded-t-2xl"
        alt=""
      />
      <h1 className="ms-4 mt-5 text-[18px] font-medium mb-2.5">
        {"Cycle Tour of Old...."}
      </h1>
      <p className="ms-4 mb-8 font-normal text-sm ">{"Karineside"}</p>
    </div>
  );
};

export default CardCamTravel;
