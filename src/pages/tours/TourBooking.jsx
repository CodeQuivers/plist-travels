import React from 'react'
import BookingSummary from '../../components/bookingSummary/BookingSummary'


const bookedItemImg =
  "https://s3-alpha-sig.figma.com/img/c022/c102/435d3bfad0e4fe503411fe812320cd15?Expires=1691366400&Signature=LqQtxeeZqGYG39FVuF5Iba2mmRuSBEE~ZZ-vMC~HR4ZrE4VQ8BLJM~Rzwzt2F9S789Hx2XWexfNJd9b-6dRjiRMBD9vLtD5RXCSAvSUJ54l-EyyKpbr7MfU~YKAQ5dotVuetvxkxqyBHEzKCiEGskJ3cVi5SqkWYPP6kJl039Oi4D~EL~RALDWr9852bM4su1SBlEvccdgkYpCXEhapVTtXQKaPGL5B4y~r~qg0-iv2A8KnIoQUkWgi5jCxMLM9afmtapk~sw~g5uO-dwgTUoNp0wmhhRfjL3pYiYo0zhvsQHyirkVfpykUMFRTFmrjJerLviEXj5uNIEyZ2n37NAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

const TourBooking = () => {
  const bookingConfirmationiInfo = {
    itemCoverPhoto:bookedItemImg,
    itemInfo:{
      title:'Cycle Tour of Old or New Delhi',
      subTitle: 'Delhi and NCR'
    },
    reservationPeriod:{
      checkIn:'04/07/2023',
      checkOut: '04/07/2023'
    },
    paymentInfo:{
      total:250,
      other:[{'label':'Base Fare', value:200}, {label:'Service Charge', value:50}]
    },
    otherInfo:[
      {label:'Activity Type', value:'TICKET'},
      {label:'Source', value:'ATLAS'},
      {label:'Categories', value:'Art & culture'},
      {label:'Duration', value:'Half-day morning'},
      {label:'Passengers', value:'Adult: 1 - Children: 0'},
    ]
  }
  return (
    <div className='mt-28'>
      <BookingSummary bookingConfirmationiInfo={bookingConfirmationiInfo}/>
    </div>
  )
}

export default TourBooking