import { useCallback, useEffect, useState } from "react";
import Select from "react-dropdown-select";
import Dropzone, { useDropzone } from "react-dropzone";
import { LuUploadCloud } from "react-icons/lu";

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const AddPropertyImage = () => {
  const [files, setFiles] = useState([]);
  const maxImageSizeInBytes = 10 * 1024 * 1024; // 10MB

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      const validFiles = acceptedFiles.filter(
        (file) => file.size <= maxImageSizeInBytes
      );

      setFiles(
        validFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  // const AddPropertyImage = () => {
  //   const [files, setFiles] = useState([]);
  //   const { getRootProps, getInputProps } = useDropzone({
  //     accept: {
  //       "image/*": [],
  //     },
  //     onDrop: (acceptedFiles) => {
  //       setFiles(
  //         acceptedFiles.map((file) =>
  //           Object.assign(file, {
  //             preview: URL.createObjectURL(file),
  //           })
  //         )
  //       );
  //     },
  //   });

  const thumbs = files?.map((file) => (
    <div key={file.name}>
      <div>
        <img
          src={file.preview}
          className="w-[800px] h-[400px]"
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));
  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);
  return (
    <>
      <div className="mt-20">
        <div className="flex flex-col gap-[30px]">
          {/* Head title  */}
          <p className="dmsan-font text-[32px]">Image</p>
          {/* drag and drop file upload */}
          <div className="sm:col-span-6">
            <label
              htmlFor="cover-photo"
              className="block text-sm font-medium text-gray-700"
            >
              Cover photo
            </label>
            <div
              {...getRootProps({ className: "dropzone" })}
              className="bg-[#f9fafb] mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 p-7"
            >
              <div className="space-y-1 text-center">
                <div className="flex justify-center ">
                  {!files?.length && (
                    <span>
                      <LuUploadCloud
                        size={40}
                        color="#475467"
                        enableBackground={true}
                        className=" p-2 rounded-full bg-[#f2f4f7]"
                      />
                    </span>
                  )}
                </div>

                <div>
                  <input {...getInputProps()} />
                  {!files?.length && (
                    <p>
                      <span className="text-[#D0D5DD]">Click to Upload</span>{" "}
                      <span className="text-[#667085]">or drag and drop</span>
                    </p>
                  )}
                </div>
                <div>
                  <div className="flex justify-center">{thumbs}</div>
                </div>
                <p className="text-sm text-gray-500">
                  SVG, PNG, JPG or GIF (max. 800x400px)
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="mt-5">
              <p>*Double Click on the image to select featured.</p>
              <p>**Change images order with Drag & Drop.</p>
            </div>
          </div>
          {/* video from
          <div className="flex gap-[30px]">
            <div>
              <label htmlFor="">Video from</label>
              <Select
                style={{
                  width: "569px",
                  border: "1px solid #D0D5DD",
                  borderRadius: "5px",
                  paddingLeft: "10px",
                  color: "#667085",
                  fontSize: "16px",
                }}
                className="mt-[6px] h-12 shadow-sm"
                options={options}
                placeholder="Per Day/Night"
              />
            </div>
            <div>
              <label htmlFor="">Video id</label>
              <input
                type="text"
                name=""
                id=""
                className="w-[569px] h-12 px-3 rounded-[5px] border-[#D0D5DD] border focus:outline-none shadow-sm mt-[6px]"
                placeholder="Dhaka"
              />
            </div>
          </div>
          {/* video id textarea */}
          <div>
            <label htmlFor="">Video id:</label>
            <textarea
              className="w-full h-[198px] border focus:outline-none border-[#D0D5DD] rounded py-3 px-4 mt-[6px]"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          {/* button */}
          <button></button>
        </div>
      </div>
    </>
  );
};

export default AddPropertyImage;
