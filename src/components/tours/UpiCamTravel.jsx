import CardCamTravel from "./CardCamTravel";

const UpiCamTravel = () => {
  return (
    <div className="xl:container mx-auto px-12 mt-5 sm:mt-8 lg:mt-[70px]">
        <h1 className="text-3xl font-bold mb-8 text-[#0F5DB3]">Destination Upi Cam Travel Tp Mpw</h1>
      <div
        className="
            lg:mx-0
            md:px-4
            lg:px-0
            flex 
            flex-wrap
            justify-center
            md:justify-between
            gap-y-5
        "
      >
        <CardCamTravel/>
        <CardCamTravel/>
        <CardCamTravel/>
        <CardCamTravel/>
      </div>
    </div>
  );
};

export default UpiCamTravel;
