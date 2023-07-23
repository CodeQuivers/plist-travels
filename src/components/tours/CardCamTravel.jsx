const CardCamTravel = () => {
  return (
    <div className="h-full w-[266px] border border-[#169FC3] rounded-2xl flex flex-col tour-bg text-white">
      <img
        src={
          "https://s3-alpha-sig.figma.com/img/f484/a03e/1128633f07aac677bd50cbd3c6951704?Expires=1690761600&Signature=hHtI3HckJbyBux5EaBUyH8wdK6mGIsqFaqWJgmUUQkKBd9C2gxAKtZcANR7NMYgh1~BMMNltg2RQzV1UuKw2OEbBuQoXGRZzl4eKKlYAQJMPOfagDolEW~uLeP6qUkviW4VPlmyx4yYU77IBt3HY~zCUx28-1loGodhKEpB2oSHNdr3dNg9TCU-tZCs1UZlYVyeB8FPvgs2A3pTQGK~Hld7c2Mql-jyqB6GafFCPTYPVIfHufhcKMHUsS4fm9nRntO5RPF4gHEc5Juhc0iKi07rLBxlQu~e-Xcr1CPkozg8oU5K1kc8j1DuhRHVc-Vx2P7Lf7Vn7e-jA4jqKScxVJw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        }
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
