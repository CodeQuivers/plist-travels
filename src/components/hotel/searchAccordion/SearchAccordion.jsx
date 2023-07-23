import Accordion from "./Accordion";

const SearchAccordion = () => {
  const accordionItems = [
    {
      title: "New Delhi car hire",
      content: [
        "Greater Noida car hire",
        "Noida car hire",
        "Faridabad car hire",
        "Gurugram car hire",
      ],
    },
    {
      title: "Bengaluru car hire",
      content: [
        "Greater Noida car hire",
        "Noida car hire",
        "Faridabad car hire",
        "Gurugram car hire",
      ],
    },
    {
      title: "Dubai car hire",
      content: [
        "Greater Noida car hire",
        "Noida car hire",
        "Faridabad car hire",
        "Gurugram car hire",
      ],
    },
    {
      title: "Mumbai car hire",
      content: [
        "Greater Noida car hire",
        "Noida car hire",
        "Faridabad car hire",
        "Gurugram car hire",
      ],
    },
    {
      title: "Hyderabad car hire",
      content: [
        "Greater Noida car hire",
        "Noida car hire",
        "Faridabad car hire",
        "Gurugram car hire",
      ],
    },
    {
      title: "Bengaluru car hire",
      content: [
        "Greater Noida car hire",
        "Noida car hire",
        "Faridabad car hire",
        "Gurugram car hire",
      ],
    },
    {
      title: "Bengaluru car hire",
      content: [
        "Greater Noida car hire",
        "Noida car hire",
        "Faridabad car hire",
        "Gurugram car hire",
      ],
    },
    // Add more items as needed
  ];
  return (
    <>
      <div className="my-10">
        <h1 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0F5AB2] to-[#1491C0]">
          Search cheap car hire by destination
        </h1>
      </div>

      {/* accordion */}
      <div>
        <Accordion accordionItems={accordionItems} />
      </div>
    </>
  );
};

export default SearchAccordion;
