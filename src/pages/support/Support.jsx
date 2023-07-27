import "./support.css";
import support from "../../assets/image/support/support.png";
import plane from "../../assets/image/support/plane-takeoff.png";
import agent from "../../assets/image/support/building-2.png";
import host from "../../assets/image/support/club.png";
import SupportAccordion from "./SupportAccordian";
import SupportArticle from "../../components/support/SupportArticle";
import vectorleft from "../../assets/image/support/Vector Left.png";
import vectorright from "../../assets/image/support/Vector Right.png";

const Support = () => {
  const accordionLeftItems = [
    {
      title: "Is there a free trial available?",
      content: [
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up.",
      ],
    },
    {
      title: "Can I change my plan later?",
      content: [
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up.",
      ],
    },
    {
      title: "What is your cancellation policy?",
      content: [
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up.",
      ],
    },
  ];

  return (
    <div className="mt-[76px]">
      {/* Heading */}
      <div>
        <h1 className="support-h1">Support</h1>
      </div>
      <hr className="bg-[#CBE6F6] border-[1px] mt-[20px]" />
      
      <div className="flex flex-col gap-[6px] items-center mt-[70px]">
        <h2 className="support-p">How can we help?</h2>
        <div className="support-input">
          <input
            type="text"
            name=""
            id=""
            className="ml-5"
            placeholder="Search"
          />
        </div>
      </div>

      {/* Box */}
      <div className="flex items-center w-[1170px] h-[582px] mx-auto gap-[26px]">
        <div>
          <img src={support} alt="" />
        </div>

        <div className="flex flex-col items-start ">
          <h1 className="support-faq">Frequently asked questions</h1>
          <div className="flex items-start gap-[20px] py-[30px]">
            <button className="support-btn flex items-center">
              <img src={plane} alt="" />
              <p>Travel</p>
            </button>
            <button className="support-btn flex items-center">
              <img src={agent} alt="" />
              <p>Agent</p>
            </button>
            <button className="support-btn flex items-center">
              <img src={host} alt="" />
              <p>Host</p>
            </button>
          </div>

          <div className="w-full">
            <SupportAccordion accordionItems={accordionLeftItems} />
          </div>

          <div className="flex justify-center items-center gap-3 mx-auto mt-[34px]">
            <div className="border border-gray-700 rounded-full ">
              <img src={vectorleft} alt="" className="m-4" />
            </div>
            <p>1/2</p>
            <div className="bg-blue-500 border rounded-full">
              <img src={vectorright} alt="" className="m-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Artcile */}
      <div>
        <SupportArticle />
      </div>
    </div>
  );
};

export default Support;
