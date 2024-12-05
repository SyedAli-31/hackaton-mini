import React from 'react'
import Image from 'next/image'
const Contact = () => {
  return (
     
        <div className='bg-white lg:h-[900px]'>
        <div className="  mx-auto text-center">
       
        <h3 className="text-[32px]  font-crimson font-bold leading-[50px] ">
          Contact Us
        </h3>
        <h3 className="pt-5 text-[16px] sm:text-[20px] text-[#000000] font-normal leading-[25px]">
          Lorem ipsum, dolor sit amet consectetur <br />
          Suscipit nemo hic quos, ab,
        </h3>
        
       
        </div>
        <div className=" w-[1180px] h-[385px] mx-auto mt-6 p-4 lg:p-6">
      {/* Main container */}
      <div className="flex flex-col lg:flex-row lg:items-center items-center justify-between">
        {/* Image */}
        <div className="relative w-full max-w-[575px] h-[220px] lg:h-[378px] lg:order-2 order-1 lg:ml-0 mb-4 lg:mb-0">
          <Image
            className="z-50 absolute lg:left-0"
            src={"/Group1.png"}
            alt="hero-image"
            width={575}
            height={403}
            layout="responsive" // Ensures proper scaling on all screens
            priority // Optimizes loading
          />
        </div>

        {/* Text Content */}
        <div
          className={`flex flex-col text-black   lg:items-start order-2 lg:order-1`}
        >
          <form  className="   rounded-lg w-full max-w-md">

        {/* Name Field */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-[20px]  font-normal font-sans text-[#000000] mb-1"
          >
            Name
          </label>
          <input type="text" id='name' name='name'  
          className="w-[500px] border border-gray-300 rounded-lg px-3 h-[38px] text-sm focus:outline-none bg-[#EEEEEE]    " />
          </div>
          {/* email */}
          <div className="">
            <label htmlFor="email"  className="block text-[20px]  font-normal font-sans text-[#000000] mb-1">
                Email
            </label>
            <input type="text" name='message' id='email' 
            className="w-[500px] border border-gray-300 rounded-lg px-3 h-[38px] text-sm focus:outline-none bg-[#EEEEEE]    "/>
          </div>
          {/* message */}
          <div className="">
            <label htmlFor="message"  className="block text-[20px]  font-normal font-sans text-[#000000] mb-1">
                Message
            </label>
            <input type="text" name='message' id='email' 
            className="w-[500px] border border-gray-300 rounded-lg px-3 h-[75px] text-sm focus:outline-none bg-[#EEEEEE]    "/>
          </div>
          </form>
          <div className="mt-3">
            <button className="bg-black w-[500px] rounded-lg  h-[48px] text-white ">
             Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  
    </div>
  )
}

export default Contact