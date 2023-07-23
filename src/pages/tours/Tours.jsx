import SearchTour from '../../components/tours/SearchTour'
import './Tours.css'
import Divider from '../../components/tours/Divider'
import WhyUs from '../../components/tours/WhyUs'
// import PlaceForStories from '../../components/tours/PlaceForStories'
import UpiCamTravel from '../../components/tours/UpiCamTravel'
import WishList from '../../components/tours/wish_list/WishList'

const Tours = () => {
  return (
    <>
    <SearchTour/>
    <Divider/>
    <WhyUs/>
    {/* <PlaceForStories/> */}
    <UpiCamTravel/>
    <WishList/>
    </>
  )
}

export default Tours