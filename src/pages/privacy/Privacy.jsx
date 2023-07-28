import PrivacyPolicy from "../../components/Privacy/PrivacyPolicy";

const Privacy = () => {
    return (
        <div className="w-auto lg:w-[1170px] mx-auto pt-20">
            <h2 className="grad-text-olc text-center text-3xl font-bold pb-5">Privacy</h2>
            <hr className="my-2 pb-[70px]" />
            <PrivacyPolicy />
        </div>
    );
};

export default Privacy;