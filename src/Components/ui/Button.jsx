const Button = ({ btntext}) => {
  return (
    <button className="relative mt-5 inline-flex items-center shadow-2xl bg-[#48DF69] justify-center p-0.5 mb-2 me-2  border-[#48DF69] border-[1px] overflow-hidden text-sm font-medium text-gray-900 rounded-full hover:scale-105">
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full">
        <a href="" className="text-xl font-thin text-[#48DF69] ">
          {" "}
          {btntext}
        </a>
      </span>
    </button>
  );
};

export default Button;