import arrow from '../../assets/arrowAngle.svg'


const SeeDetails = () =>  (
    <div
    className={`flex justify-center items-center border border-solid z-[5] border-secondary w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
  >
    <div
      className={`flex flex-col bg-primary w-[100%] h-[50%] rounded-full mt-13 ml-10`}
    >
      <div className={`flex flex-start flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
          <span className="text-gradient">See</span>
        </p>
          <img
            src={arrow}
            className="w-[23px] h-[23px] object-contain"
            alt="arrow"
          />
      </div>
      <p className="font-poppins font-medium text-[18px] leading-[23px]">
        <span className="text-gradient">Details</span>
        
      </p>
    </div>
  </div>
  )


export default SeeDetails