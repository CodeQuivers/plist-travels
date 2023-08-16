import InputField from "../../components/flight/InputField";
import plainImg from "../../assets/image/flight/images/plainImg.png";
import LongArrowRight from "../../assets/image/flight/icons/Long-arrow-right.svg";
import Security from "../../assets/image/flight/icons/Security.svg";
import { useParams } from "react-router-dom";
import BookingSummary from "../../components/bookingSummary/BookingSummary";
import { useGetSelectedFlightDataQuery } from "../../redux/features/flight/flightApi";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import moment from "moment/moment";
import { getTimeInHoursMinutes } from "../../utils/timeCoversion";

const bookedItemImg =
  "https://s3-alpha-sig.figma.com/img/b09a/045c/cad5b6aa0b98c61ee70c9b644e52f353?Expires=1693180800&Signature=A~15BpEJ1hS85p8S61DzI4tp3In9dbH~8QVAljDvZUu~7tp5bonUb4RrxwAKXB4qqKFuwUdcRYbK1gkfU1r98mwlsNvCYLxeAazjq8cw2A3acI-cTQNTzSro5j64XPNQcSvSQyyfJwxAwYze4ogkuqBGG1W2YE3QxjyKwmYR911QiZ0AVAaYysD3WEjrkPpbVi5L2cgOpYGg7Fpe5lOGuatK4SIVrxgFjtw4w7g4S0N4nrAbtxFgsOwcazKU8LeyYZAmXb1tNBGQh7IIO-jx9zBeWxDIK15oBYsFaeN8cGHatDyLIPTCrD137F-W3vn8b8icnuVbRKP6TyTLGJjv4Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

const FlightCashout = () => {
  const { flightId } = useParams();
  const { data, isLoading, isError } = useGetSelectedFlightDataQuery(
    flightId || skipToken
  );

  let bookingConfirmationiInfo = null;
  if (!isError && data) {
    const itemCoverPhoto = `${import.meta.env.VITE_APP_AIRLINE_IMG}/${
      data.airlines
    }`;
    const itemInfo = {
      title: `${data.cityFrom} to ${data.cityTo}`,
      subTitle: `One Way${data.is_return ? " and Return" : ""} Flight`,
    };
    const reservationPeriod = [
      {
        label: "Take off",
        value: moment.unix(data.departure_datetime).format("lll"),
      },
      {
        label: "Landing",
        value: moment.unix(data.arrival_datetime).format("lll"),
      },
    ];

    const otherInfo = [
      { label: "Airline", value: data.airlineName },
      { label: "Flight Type", value: data.typeFlight },
      {
        label: "Passengers",
        value: `Adult: ${data.adults} Children: ${data.children}`,
      },
      { label: "Duration", value: getTimeInHoursMinutes(data.duration) },
      { label: "Infants", value: data.infants },
    ];

    const paymentInfo = {
      total: data.price,
      other: [
        { label: "Base Fare", value: data.base_fare },
        data.tax ? { label: "Tax", value: data.tax } : "",
      ],
    };
    bookingConfirmationiInfo = {
      itemCoverPhoto,
      itemInfo,
      reservationPeriod,
      paymentInfo,
      otherInfo,
    };
  }
  console.log("first");
  console.log(data);
  return (
    <div className="mt-28">
      <BookingSummary bookingConfirmationiInfo={bookingConfirmationiInfo} />
    </div>
  );
};

export default FlightCashout;
