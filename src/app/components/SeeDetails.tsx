import arrow from '../../assets/arrowAngle.svg'


const SeeDetails = () =>  (
    <div
    className={`flex justify-center items-center border border-solid z-[5] border-secondary w-[40px] h-[40px] ss:w-[80px] ss:h-[80px] 
    sm:w-[100px] sm:h-[100px] md:w-[140px] md:h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
  >
    <div
      className={`flex flex-col bg-primary w-[100%] h-[50%] rounded-full items-center md:mt-13 md:ml-10`}
    >
      <div className={`flex flex-start flex-row items-center`}>
        <p className="font-poppins font-medium text-[8px] ss:text-[10px] ss:mt-1 sm:text-[14px] md:text-[18px] ss:leading-[23px] mr-2">
          <span className="text-gradient">See</span>
        </p>
          <img
            src={arrow}
            className="w-[10px] h-[10px] ss:w-[13px] ss:h-[13px] sm:w-[20px] sm:h-[20px] md:w-[23px] md:h-[23px] object-contain"
            alt="arrow"
          />
      </div>
      <p className="font-poppins font-medium text-[8px] ss:text-[10px] ss:mb-1 sm:text-[14px] md:text-[18px] sm:leading-[23px]">
        <span className="text-gradient">Details</span>
        
      </p>
    </div>
  </div>
  )


export default SeeDetails