import Devider from "../components/Devider";

interface PaginationProps {
  metaData: {
    currentPage: number;
    totalPages: number ;
    totalProducts: number;
  };
  onSetCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = ({
  metaData: { currentPage, totalPages },
  onSetCurrentPage,
}: PaginationProps) => {
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onSetCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onSetCurrentPage((prevPage) => prevPage - 1);
    }
  };
  return (
    <>
      <div className="flex flex-col gap-2 mt-1 h-[40px] md:h-[200px] ss:mt-4 sm:h-[100px] justify-center items-center relative">
        <Devider /> 
        <div className="flex flex-row gap-2 items-center">
          <div
            onClick={handlePrevPage}
            className="flex cursor-pointer text-[10px] w-[15px] h-[15px] md:text-[18px] md:w-[40px] md:h-[40px] border 
            border-solid border-slate-600 
            rounded-full text-gray-600 items-center justify-center"
          >
            {"<"}
          </div>
          <div className="flex text-[10px] w-[15px] h-[15px] md:text-[16px] md:w-[40px] md:h-[40px] border border-solid
           border-secondary rounded-full text-white items-center justify-center">
            {currentPage}
          </div>
          <div
            onClick={handleNextPage}
            className="flex cursor-pointer text-[10px] w-[15px] h-[15px] md:text-[18px] md:w-[40px] md:h-[40px] border
             border-slate-600 rounded-full text-gray-600 items-center justify-center"
          >
            {">"}
          </div>
        <div className=" text-white text-[12px] md:text-[20px] font-light">
          of {totalPages}
        </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;
