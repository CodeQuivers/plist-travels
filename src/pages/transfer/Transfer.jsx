import Divider from "../../components/tours/Divider";
import PickDriveFromNazarian from "../../components/transfer/PickDriveFromNazarian/PickDriveFromNazarian";
import PopularCars from "../../components/transfer/PopularCars/PopularCars";
import TransferAccordianLists from "../../components/transfer/TransferAccordian/TransferAccordianLists";
import TransferBanner from "../../components/transfer/TransferBanner/TransferBanner";
import TransferPagination from "../../components/transfer/TransferPagination/TransferPagination";
import TransferSearchForm from "../../components/transfer/TransferSearchForm/TransferSearchForm";

const Transfer = () => {
    

    return (
        <div className="w-auto lg:w-[1170px] mx-auto">
            <div>
                <TransferSearchForm/>
            </div>
            <Divider />
            {/* Pick Your Drive From Nazarian   */}
            <div>
                <PickDriveFromNazarian/>
            </div>
            <div>
                <TransferBanner/>
            </div>
            <div>
                <PopularCars/>
            </div>
            <div>
                <TransferPagination/>
            </div>
            <div>
                <TransferAccordianLists/>
            </div>
        </div>
    );
};

export default Transfer;