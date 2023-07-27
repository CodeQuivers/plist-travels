import { Link } from 'react-router-dom';
import arrowUpRight from '../../../src/assets/image/blogs/arrow-up-right.svg';
import image1 from '../../../src/assets/image/blogs/blogCard/Migrating to Linear 101.jpg';
import image2 from '../../../src/assets/image/blogs/blogCard/Migrating to Linear 102.jpg';
import image3 from '../../../src/assets/image/blogs/blogCard/Migrating to Linear 103.jpg';
import image4 from '../../../src/assets/image/blogs/blogCard/Migrating to Linear 104.jpg';

const BlogCards = () => {
    const ourServices = [
        {
            title: "Migrating to Linear 101",
            text: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
            image: image1
        },
        {
            title: "Migrating to Linear 101",
            text: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
            image: image2
        },
        {
            title: "Migrating to Linear 101",
            text: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
            image: image3
        },
        {
            title: "Migrating to Linear 101",
            text: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
            image: image4
        },
    ];
    return (
        <div>
            {/* <div className="h-[291px] flex flex-col lg:flex-row gap-[25px] mt-[40px] "> */}
            <div className="grid grid-cols-2 gap-[25px] mt-[40px]">
                {
                    ourServices?.map(services =>
                        <>
                            <div className="rounded-lg  flex flex-col items-start gap-[12px] border border-indigo-800">
                                <img className='rounded-t-lg w-[100%] h-[270px] object-cover' src={services.image} alt="" />
                                <div className='p-6 flex flex-col'>
                                    <h1 className="text-[#101828] text-2xl">{services.title}</h1>
                                    <p className="text-[#667085] text-base pt-3">
                                        {services.text}
                                    </p>
                                    <Link className='grad-text-olc flex justify-start items-center pt-[30px]'>Read post
                                        <img className='pl-1' src={arrowUpRight} alt="" />
                                    </Link>
                                </div>

                            </div>
                        </>
                    )
                }

            </div>
        </div>
    );
};

export default BlogCards;