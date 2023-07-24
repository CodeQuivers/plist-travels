import TransferSearchForm from "../../components/transfer/TransferSearchForm/TransferSearchForm";
import TransferResult from "./TransferResult";
import TransferSearchFilters from "./TransferSearchFilters";

const TransferSearchResults = () => {
    return (
        <div className="max-w-[1170px] py-1 px-2 mx-auto">
            <TransferSearchForm />
            {/* search result section */}
            <section className="mt-20 py-20 border-t grid grid-cols-9 gap-5">
                <div className="col-span-2">
                    <TransferSearchFilters />
                </div>
                <div className="col-span-7">
                    <TransferResult />
                </div>
            </section>
        </div>
    );
};

export default TransferSearchResults;