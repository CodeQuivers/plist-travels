import { useState } from 'react';
import InputRange from 'react-input-range';

const TransferFilterByPriceRange = () => {
    const [priceRange, setPriceRange] = useState({
        min: 12020,
        max: 250000,
    });
    const handleRange = (value) => {
        if (value.min >= 0 && value.max <= 300000) setPriceRange(value);
    };
    return (
        <div>
            <div className="pt-1 pb-2">
                <h4 className="text-sm text-[#7F8FA4]">Price Range:</h4>
            </div>

            <div className="mt-3">
                <InputRange
                    minValue={0}
                    maxValue={300000}
                    value={priceRange}
                    onChange={handleRange}
                    step={1}
                    draggableTrack
                />
            </div>
            <div className="mt-5  flex items-center gap-2">
                <div>
                    <input
                        className="w-full border focus:outline-none pl-3 text-[#777E90]  rounded py-1.5"
                        type="text"
                        maxLength={6}
                        placeholder={`$${priceRange?.min}`}
                    />
                </div>
                <span>—</span>
                <div>
                    <input
                        className="w-full border focus:outline-none pl-3 text-[#777E90]  rounded py-1.5"
                        type="text"
                        placeholder={`$${priceRange?.max}`}
                    />
                </div>
            </div>
        </div>
    );
};

export default TransferFilterByPriceRange;