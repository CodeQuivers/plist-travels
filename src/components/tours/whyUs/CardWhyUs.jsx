const CardWhyUs = ({ idx, cardInfo }) => {
  const { icon, title, description, linkText, link } = cardInfo || {};
  return (
    <div>
      <div className=" why-us-card h-full w-[250px] p-6 rounded-2xl flex flex-col justify-center items-center whyUsCard">
        <div className={`w-[69px] h-[69px] why-us-card-icon${idx}`}>
        {/* <div className={`w-[69px] h-[69px] why-us-card-icon bg-[url('${icon}')]`}> */}

          {/* <img src={icon}  alt="" /> */}
        </div>
        <h1 className=" text-2xl font-semibold mb-2.5">{title}</h1>
        <p className="text-center mb-5 font-normal text-base ">{description}</p>
        <a className=" text-lg font-medium text-center border-0">{linkText}</a>
      </div>
    </div>
  );
};

export default CardWhyUs;
