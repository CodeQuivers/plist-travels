import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";
const TransferPagination = () => {
    return (
        <div className="flex gap-3 justify-center pb-12 pt-12">
        <button className="border-r pr-2" type="button">
          {" "}
          <FaChevronLeft size={15} />
        </button>
        <div className="flex    justify-center items-center  text-xl">
          <button className="pr-3">1</button>
          <button className="border-l text-slate-400 px-3">2</button>
          <button className="text-slate-400 border-l border-r px-3">3</button>
          <p className=" border-r px-3 text-slate-400">-</p>
          <button className="text-slate-400 pl-3"> 8</button>
        </div>
        <button className="border-l pl-1" type="button">
          {" "}
          <FaChevronRight size={15} />
        </button>
      </div>
    );
};

export default TransferPagination;