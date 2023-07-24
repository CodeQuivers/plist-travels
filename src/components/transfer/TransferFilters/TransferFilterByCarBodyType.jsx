import { useState } from 'react';

const TransferFilterByCarBodyType = () => {
    const [carBodyTypeChecked, setCarBodyTypeChecked] = useState(true);

    const handleRadio1Click = () => {
        setCarBodyTypeChecked(!carBodyTypeChecked);
    };
    return (
        <div>
            <div className="space-y-4">
                <div>
                    <h4 className="text-sm text-[#7F8FA4]">Car Body Type</h4>
                </div>
                {/* 1st */}
                <div className="flex">
                    <input
                        onClick={handleRadio1Click}
                        type="radio"
                        name="product1"
                        className="shrink-0 cursor-pointer mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500"
                        id="product1"
                        checked={carBodyTypeChecked}
                    />
                    <label
                        htmlFor="product1"
                        className="text-sm flex cursor-pointer items-center gap-2 text-gray-700 ml-2"
                    >
                        Convertible
                    </label>
                </div>
                <div className="flex">
                    <input
                        onClick={handleRadio1Click}
                        type="radio"
                        name="product1"
                        className="shrink-0 cursor-pointer mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500"
                        id="product1"
                        checked={carBodyTypeChecked}
                    />
                    <label
                        htmlFor="product1"
                        className="text-sm flex cursor-pointer items-center gap-2 text-gray-700 ml-2"
                    >
                        Coupe
                    </label>
                </div>
                <div className="flex">
                    <input
                        onClick={handleRadio1Click}
                        type="radio"
                        name="product1"
                        className="shrink-0 cursor-pointer mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500"
                        id="product1"
                        checked={carBodyTypeChecked}
                    />
                    <label
                        htmlFor="product1"
                        className="text-sm flex cursor-pointer items-center gap-2 text-gray-700 ml-2"
                    >
                        Exotic Cars
                    </label>
                </div>
            </div>
        </div>
    );
};

export default TransferFilterByCarBodyType;