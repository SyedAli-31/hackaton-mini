import React from "react";
import Image from "next/image";
const Portfolio = () => {
  return (
     
      <div className="bg-white h-[2300px] lg:h-[2000px] ">
        <div className="h-auto  text-center">
          <h2 className="text-[14px] sm:text-[16px] text-recBackground font-bold leading-[18px] sm:leading-[20px] pt-6 sm:pt-12">
            P A R T N E R S
          </h2>
          <h3 className="text-[28px] sm:text-[36px] lg:text-[40px] font-crimson font-bold leading-[34px] sm:leading-[42px] lg:leading-[50px] pt-3 sm:pt-5">
            Lorem, Ipsum Dolor
          </h3>
          <h3 className="text-[16px] sm:text-[18px] lg:text-[20px] font-normal leading-[22px] sm:leading-[24px] lg:leading-[25px] pt-3 sm:pt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </h3>
        </div>
        <div className=" lg:flex-none  lg:w-[1158px] items-center mx-auto">
          <div className="lg:flex">
            <Image
              className="mx-auto mt-8 sm:mt-10 lg:mt-12 "
              src={"/portimg1.png"}
              alt="image"
              width={570}
              height={334}
            />

            <Image
              className="mx-auto mt-8 sm:mt-10 lg:mt-12 "
              src={"/portimg2.png"}
              alt="image"
              width={570}
              height={334}
            />
          </div>
          <div className="lg:flex">
            <Image
              className="mx-auto mt-8 sm:mt-10 lg:mt-12 "
              src={"/portimg3.png"}
              alt="image"
              width={570}
              height={334}
            />

            <Image
              className="mx-auto mt-8 sm:mt-10 lg:mt-12 "
              src={"/portimg4.png"}
              alt="image"
              width={570}
              height={334}
            />
          </div>

          <div className="lg:flex">
            <Image
              className="mx-auto mt-8 sm:mt-10 lg:mt-12 "
              src={"/portimg5.png"}
              alt="image"
              width={570}
              height={334}
            />

            <Image
              className="mx-auto mt-8 sm:mt-10 lg:mt-12 "
              src={"/portimg6.png"}
              alt="image"
              width={570}
              height={334}
            />
          </div>
          <div className="lg:flex">
            <Image
              className="mx-auto mt-8 sm:mt-10 lg:mt-12 "
              src={"/portimg7.png"}
              alt="image"
              width={570}
              height={334}
            />

            <Image
              className="mx-auto mt-8 sm:mt-10 lg:mt-12 "
              src={"/portimg8.png"}
              alt="image"
              width={570}
              height={334}
            />
          </div>
          
        </div>
        <div className="mt-2 mx-auto text-center">
          <button className="bg-black w-[170px] sm:w-[170px] h-[48px] sm:h-[48px] text-white mt-8 sm:mt-10 lg:mt-12 rounded">
          Learn More
        </button>
          </div>
      </div>
     
  );
};

export default Portfolio;
