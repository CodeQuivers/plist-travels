import contactImage from '../../../src/assets/image/contact/contact.jpg';
const ContactUs = () => {
    return (
        <div className="flex justify-between items-center pt-[70px]">
            <div className="flex justify-between mr-8">
                {/* block of information */}
                <div className='flex flex-col'>
                    <h2 className="text-3xl font-bold pb-8">Contact us</h2>
                    <div className='flex justify-between mb-6'>
                        <div className="w-[45%] flex flex-col gap-1.5">
                            <label htmlFor="" className="text-sm font-normal text7F8FA4">
                                First Name
                            </label>
                            <div className="border rounded gray-border p-1">
                                <input type="text" placeholder="First name" className="outline-none pl-4" />
                            </div>
                        </div>
                        <div className="w-[45%] flex flex-col gap-1.5">
                            <label htmlFor="" className="text-sm font-normal text7F8FA4">
                                Last Name
                            </label>
                            <div className="border rounded gray-border p-1">
                                <input type="text" placeholder="Last name" className="outline-none pl-4" />
                            </div>
                        </div>
                    </div>
                    <div className='mb-6'>
                        <div className="w-full flex flex-col gap-1.5">
                            <label htmlFor="" className="text-sm font-normal text7F8FA4">
                                Email
                            </label>
                            <div className="border rounded gray-border p-1">
                                <input type="text" placeholder="you@company.com" className="outline-none pl-4" />
                            </div>
                        </div>
                    </div>
                    <div className='mb-6'>
                        <div className="w-full flex flex-col gap-1.5">
                            <label htmlFor="" className="text-sm font-normal text7F8FA4">
                                Phone number
                            </label>
                            <div className="border rounded gray-border p-1">
                                <input type="text" placeholder="+1 (555) 000-0000" className="outline-none pl-4" />
                            </div>
                        </div>
                    </div>
                    <div className="felx flex-col mb-6">
                        <label htmlFor="" className="text-sm font-normal text7F8FA4">
                            Message
                        </label>
                        <div className="border rounded gray-border p-1">
                            <textarea
                                type="text"
                                className="outline-none w-full pl-4"
                                rows="4" cols="50" />
                        </div>
                    </div>
                    <div className='mb-6 flex justify-start items-center'>
                        <input className='w-5 h-5 rounded-full' type="checkbox" name="policy" id="policy" />
                        <label className='pl-3 text-[#667085]' htmlFor="policy">You agree to our friendly privacy policy.</label>
                    </div>
                    <div className='mb-6'>
                        <button
                            className="old-logo-color text-lg px-6 py-4 w-full rounded-xl font-bold text-white"
                        >
                            Send message
                        </button>
                    </div>
                </div>

            </div>
            <div className='ml-8'>
                <img className='w-[576px] h-[666px] object-cover' src={contactImage} alt="" />
            </div>
        </div>


    );
};

export default ContactUs;