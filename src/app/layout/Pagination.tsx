import Devider from "../components/Devider";

interface PaginationProps {
  metaData: {
    currentPage: number;
    totalPages: number;
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
      <div className="flex flex-col gap-3 h-[200px] justify-center items-center relative">
        <Devider />
        <div className="flex flex-row gap-2">
          <div
            onClick={handlePrevPage}
            className="flex cursor-pointer w-[40px] h-[40px] border border-solid border-slate-600 rounded-full text-gray-600 items-center justify-center"
          >
            {"<"}
          </div>
          <div className="flex w-[40px] h-[40px] border border-solid border-secondary rounded-full text-white items-center justify-center">
            {currentPage}
          </div>
          <div
            onClick={handleNextPage}
            className="flex cursor-pointer w-[40px] h-[40px] border border-slate-600 rounded-full text-gray-600 items-center justify-center"
          >
            {">"}
          </div>
        </div>
        <div className="absolute text-white left-[56%] top-[45%] text-[20px] font-light">
          of {totalPages}
        </div>
      </div>
    </>
  );
};

export default Pagination;
