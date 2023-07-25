import React from "react";

const BookingPaymentInfo = ({ total, other }) => {
  let content = null;
  if (other) {
    content = other.map((obj) => (
      <div className="flex justify-between">
        <p className="text-sm text7F8FA4">{obj.label}</p>
        <p className="text-base text334150">${obj.value}</p>
      </div>
    ));
  }
  return (
    <div className="w-11/12 flex flex-col gap-5">
      <h1 className="pop-font grad-text-olc text-base text-medium">Amount</h1>
      {content}
      <div className="flex justify-between">
        <p className="text-sm text7F8FA4">Total Price</p>
        <p className="text-base text334150">${total}</p>
      </div>
    </div>
  );
};

export default BookingPaymentInfo;
