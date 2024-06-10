import React from "react";
export default function Connect(props){
    return(
        <div className="custom-connect py-10 px-5 md:py-0 md:px-0 flex flex-col justify-center items-center w-full h-full  [font-family:Poppins]">
            <h1 className="text-white text-center text-[2.0625rem]  md:text-[4.0625rem] md:font-[600] leading-[normal] tracking-[0.12188rem]">Connect</h1>
            <p className="md:mt-3 md:w-[44.25rem] text-[1.125rem] md:text-[1.3125] md:font-[400] tracking-[0.03938rem] text-center">
            Confused about pricing feel free to reach us for any queries, Our experts are ready to have chat with you!,Thanks for visiting
            </p>
            <button className="mt-5 flex items-center justify-center bg-white w-[20.3125rem] md:w-[20.3125rem] md:h-[4.5625rem] md:font-[600] heading-[1.5rem] text-[#0066C8] text-[1.8rem] md:text-[1.6875rem] rounded-lg md:mt-3">Let's Connect <img  src={props.buttonIcon}/></button>
        </div>
    )
}