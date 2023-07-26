// eslint-disable-next-line react/prop-types
const InputField = ({ label, width, type, placeholder }) => {
  return (
    <>
      <div className="flex flex-col gap-[6px]">
        <label htmlFor="">{label} *</label>
        <input
          placeholder={placeholder}
          className={`${width} h-[36px] rounded-md border border-solid border-gray-300 bg-white`}
          type={type}
          name=""
          id=""
        />
      </div>
    </>
  );
};

export default InputField;
