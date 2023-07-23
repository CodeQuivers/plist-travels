import WishListItems from '../../hotel/wishlist/WishListItems';
import CardWishList from './CardWishList';

const WishList = () => {
  return (
    <div className="xl:container mx-auto px-12 mt-5 sm:mt-8 lg:mt-[70px]">
         {/* <h1 className="text-3xl font-bold mb-8 text-[#0F5DB3]">Your Wishlist Starts Here</h1>
         <div
         className="
            lg:mx-0
            md:px-4
            lg:px-0
            flex 
            flex-wrap
            justify-center
            md:justify-between
            gap-y-5
         "
         >
            <CardWishList/>
            <CardWishList/>
         </div> */}
         <WishListItems/>
    </div>
  )
}

export default WishList