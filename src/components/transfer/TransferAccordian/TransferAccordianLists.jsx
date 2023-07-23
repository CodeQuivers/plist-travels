import TransferAccordian from './TransferAccordian';

const TransferAccordianLists = () => {
    const accordionLeftItems = [
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
      const accordionCenterItems = [
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
          title: "Hyderabad car hire",
          content: [
            "Greater Noida car hire",
            "Noida car hire",
            "Faridabad car hire",
            "Gurugram car hire",
          ],
        },
      ];
      const accordionRightItems = [
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
          title: "Hyderabad car hire",
          content: [
            "Greater Noida car hire",
            "Noida car hire",
            "Faridabad car hire",
            "Gurugram car hire",
          ],
        },
      ];
    return (
        <>
      <div className="my-10 max-md:px-5">
        <h1 className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0F5AB2] to-[#1491C0]">
          Search cheap car hire by destination
        </h1>
      </div>

      {/* accordion */}
      <div className="max-md:px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        <TransferAccordian accordionItems={accordionLeftItems} />
        <TransferAccordian accordionItems={accordionCenterItems} />
        <TransferAccordian accordionItems={accordionRightItems} />
      </div>
    </>
    );
};

export default TransferAccordianLists;