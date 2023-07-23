import { Link } from "react-router-dom";
import globalWorld from "../../assets/image/flight/icons/globalWorld.svg";

const Card1 = () => {
  return (
    <>
      <div className="flex justify-center gap-6">
        <div className="flex-col flex rounded-2xl items-center w-[274px] old-logo-color p-6 text-white">
          <img
            className="pb-[15px] w-[69px]"
            src={globalWorld}
            alt="globalWorld"
          />
          <h3 className="pb-[10px]">Travel with Ease</h3>
          <p className="pb-5">
            Excepteur sint occae cupidatat non proident, sunt in culpa qui
            officia.
          </p>
          <Link>Explore</Link>
        </div>
        <div className="flex-col flex rounded-2xl items-center w-[274px] old-logo-color p-6 text-white">
          <img
            className="pb-[15px] w-[69px]"
            src={globalWorld}
            alt="globalWorld"
          />
          <h3 className="pb-[10px]">Travel with Ease</h3>
          <p className="pb-5">
            Excepteur sint occae cupidatat non proident, sunt in culpa qui
            officia.
          </p>
          <Link>Explore</Link>
        </div>
        <div className="flex-col flex rounded-2xl items-center w-[274px] old-logo-color p-6 text-white">
          <img
            className="pb-[15px] w-[69px]"
            src={globalWorld}
            alt="globalWorld"
          />
          <h3 className="pb-[10px]">Travel with Ease</h3>
          <p className="pb-5">
            Excepteur sint occae cupidatat non proident, sunt in culpa qui
            officia.
          </p>
          <Link>Explore</Link>
        </div>
        <div className="flex-col flex rounded-2xl items-center w-[274px] old-logo-color p-6 text-white">
          <img
            className="pb-[15px] w-[69px]"
            src={globalWorld}
            alt="globalWorld"
          />
          <h3 className="pb-[10px]">Travel with Ease</h3>
          <p className="pb-5">
            Excepteur sint occae cupidatat non proident, sunt in culpa qui
            officia.
          </p>
          <Link>Explore</Link>
        </div>
      </div>
    </>
  );
};

export default Card1;
