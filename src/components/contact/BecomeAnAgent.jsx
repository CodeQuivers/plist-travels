const BecomeAnAgent = () => {
    return (
        <div className="flex justify-between items-center border border-indigo-800 p-8 rounded-2xl">
            <div>
                <h2 className="text-[#141416] text-3xl font-bold">We’re here for you</h2>
                <p className="text-[#141416] text-base">Log in to get help with your reservations, account, and more.</p>
            </div>
            <div>
                <button
                    className="old-logo-color px-6 py-4 rounded-xl font-bold text-white"
                >
                    Become an Agent
                </button>
            </div>
        </div>
    );
};

export default BecomeAnAgent;