const Pagination = () => (
  <>
    <div className="flex flex-col gap-3 h-[200px] justify-center items-center">
      <div className="w-[80%] h-[1px] bg-[#4D4B5D] " />
      <div className="flex flex-row gap-2">
        <div className="flex cursor-pointer w-[40px] h-[40px] border border-solid border-slate-600 rounded-full text-gray-600 items-center justify-center">
          {"<"}
        </div>
        <div className="flex w-[40px] h-[40px] border border-solid border-secondary rounded-full text-white items-center justify-center">
          1
        </div>
        <div className="flex cursor-pointer w-[40px] h-[40px] border border-slate-600 rounded-full text-gray-600 items-center justify-center">
          {">"}
        </div>
      </div>
    </div>
  </>
);

export default Pagination;
