import SearchTour from '../../components/tours/SearchTour'
import './Tours.css'
import Divider from '../../components/tours/Divider'
import WhyUs from '../../components/tours/whyUs/WhyUs'
// import PlaceForStories from '../../components/tours/PlaceForStories'
import UpiCamTravel from '../../components/tours/UpiCamTravel'
import WishList from '../../components/tours/wish_list/WishList'
import SearchCheapCar from '../../components/tours/searchCheapCar/SearchCheapCar'
import HotelFaq from '../../components/hotel/HotelFaq'
import TourFaq from '../../components/tours/TourFaq'
import PlaceForStories from '../../components/tours/PlaceForStories'
import TourSearchResult from '../../components/tours/tourSearchResult/TourSearchResult'


const Tours = () => {
  return (
    <>
      <SearchTour />
      <Divider />
      <WhyUs />
      <PlaceForStories/>
      <UpiCamTravel />
      <WishList />
      <SearchCheapCar/>
      <TourFaq/>
      {/* <TourSearchResult/> */}

    </>
  );
};

export default Tours;
