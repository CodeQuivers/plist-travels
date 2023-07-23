import Accordion from "./searchAccordion/Accordion";

const HotelFaq = () => {
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

  const accordionRightItems = [
    {
      title: "Can I change my plan later?",
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
    <div>
      {" "}
      <div className="my-10 max-md:px-5">
        <h1 className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0F5AB2] to-[#1491C0]">
          Frequently asked questions
        </h1>
      </div>
      {/* accordion */}
      <div className="max-md:px-5 pb-20 grid grid-cols-1 md:grid-cols-2  gap-7">
        <Accordion accordionItems={accordionLeftItems} />
        <Accordion accordionItems={accordionRightItems} />
      </div>
    </div>
  );
};

export default HotelFaq;
