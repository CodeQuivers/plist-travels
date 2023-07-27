import "./supportarticle.css";
import loop from "../../assets/image/home/Mask.png";
import loop1 from "../../assets/image/home/Mask (1).png";
import loop2 from "../../assets/image/home/Mask (2).png";
import author from "../../assets/image/home/Author Photo.png";
import forward from "../../assets/image/home/forward.png";

const SupportArticle = () => {
  return (
    <div className="w-[1170px] mx-auto ">
      <h1 className="support-article-h1">Article</h1>
      <div className="flex justify-center items-center gap-[34px] mt-[40px] mb-[200px]">
        {/* Card 1 */}
        <div className="loop-card relative">
          <img src={loop} alt="" />
          <p className="loop-heading absolute left-[16px] bottom-[48px]">
            How to go in the ...
          </p>
          <p className="loop-date absolute left-[16px] bottom-[24px]">
            04 May 2023
          </p>

          <div className="loop-bottom rounded-b-xl w-[267px]  flex justify-between items-center">
            <div className="flex items-center gap-[16px] ml-[16px]">
              <img src={author} alt="" />
              <p className="loop-author">Author Name</p>
            </div>
            <div className="mr-[16px]">
              <img src={forward} alt="" />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="loop-card relative ">
          <img src={loop1} alt="" />
          <p className="loop-heading absolute left-[16px] bottom-[48px]">
            How to go in the ...
          </p>
          <p className="loop-date absolute left-[16px] bottom-[24px]">
            04 May 2023
          </p>

          <div className="loop-bottom rounded-b-xl w-[267px]  flex justify-between items-center">
            <div className="flex items-center gap-[16px] ml-[16px]">
              <img src={author} alt="" />
              <p className="loop-author">Author Name</p>
            </div>
            <div className="mr-[16px]">
              <img src={forward} alt="" />
            </div>
          </div>
        </div>

        {/* Card 3 */}

        <div className="loop-card relative ">
          <img src={loop2} alt="" />
          <p className="loop-heading absolute left-[16px] bottom-[48px]">
            How to go in the ...
          </p>
          <p className="loop-date absolute left-[16px] bottom-[24px]">
            04 May 2023
          </p>

          <div className="loop-bottom rounded-b-xl w-[267px]  flex justify-between items-center">
            <div className="flex items-center gap-[16px] ml-[16px]">
              <img src={author} alt="" />
              <p className="loop-author">Author Name</p>
            </div>
            <div className="mr-[16px]">
              <img src={forward} alt="" />
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="loop-card relative ">
          <img src={loop2} alt="" />
          <p className="loop-heading absolute left-[16px] bottom-[48px]">
            How to go in the ...
          </p>
          <p className="loop-date absolute left-[16px] bottom-[24px]">
            04 May 2023
          </p>

          <div className="loop-bottom rounded-b-xl w-[267px]  flex justify-between items-center">
            <div className="flex items-center gap-[16px] ml-[16px]">
              <img src={author} alt="" />
              <p className="loop-author">Author Name</p>
            </div>
            <div className="mr-[16px]">
              <img src={forward} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportArticle;
