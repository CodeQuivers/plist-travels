import { useState } from 'react';

const TransferFilterByCarSeats = () => {
    const [carSeatChecked, setCarSeatChecked] = useState(true);

    const handleCarClick = () => {
        setCarSeatChecked(!carSeatChecked);
    };
    return (
        <div>
            <div className="space-y-4">
                <div>
                    <h4 className="text-sm text-[#7F8FA4]">Car Seats</h4>
                </div>
                {/* 1st */}
                <div className="flex">
                    <input
                        onClick={handleCarClick}
                        type="radio"
                        name="product1"
                        className="shrink-0 cursor-pointer mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500"
                        id="product1"
                        checked={carSeatChecked}
                    />
                    <label
                        htmlFor="product1"
                        className="text-sm flex cursor-pointer items-center gap-2 text-gray-700 ml-2"
                    >
                        2 seats
                    </label>
                </div>
                <div className="flex">
                    <input
                        onClick={handleCarClick}
                        type="radio"
                        name="product1"
                        className="shrink-0 cursor-pointer mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500"
                        id="product1"
                        checked={carSeatChecked}
                    />
                    <label
                        htmlFor="product1"
                        className="text-sm flex cursor-pointer items-center gap-2 text-gray-700 ml-2"
                    >
                        4 seats
                    </label>
                </div>
                <div className="flex">
                    <input
                        onClick={handleCarClick}
                        type="radio"
                        name="product1"
                        className="shrink-0 cursor-pointer mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500"
                        id="product1"
                        checked={carSeatChecked}
                    />
                    <label
                        htmlFor="product1"
                        className="text-sm flex cursor-pointer items-center gap-2 text-gray-700 ml-2"
                    >
                        6 seats
                    </label>
                </div>
                <div className="flex">
                    <input
                        onClick={handleCarClick}
                        type="radio"
                        name="product1"
                        className="shrink-0 cursor-pointer mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500"
                        id="product1"
                        checked={carSeatChecked}
                    />
                    <label
                        htmlFor="product1"
                        className="text-sm flex cursor-pointer items-center gap-2 text-gray-700 ml-2"
                    >
                        8 seats
                    </label>
                </div>
            </div>
        </div>
    );
};

export default TransferFilterByCarSeats;