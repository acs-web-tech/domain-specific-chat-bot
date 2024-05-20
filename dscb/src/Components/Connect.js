import React from "react";
export default function Connect(props){
    return(
        <div className=" flex flex-col justify-center items-center w-full h-full [background:linear-gradient(90deg,#002ED2_0%,#0032E4_100%)] [font-family:Poppins]">
            <h1 className="text-white text-center  text-[4.0625rem] font-[600] leading-[normal] tracking-[0.12188rem]">Connect</h1>
            <p className="mt-3 w-[44.25rem] text-[1.3125] font-[400] tracking-[0.03938rem] text-center">
            Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam venenatis fghh hgjj nisi ante.
            </p>
            <button className="flex items-center justify-center bg-white w-[20.3125rem] h-[4.5625rem] font-[600] heading-[1.5rem] text-[#0066C8] text-[1.6875rem] rounded-lg mt-3">Let's Connect <img src={props.buttonIcon}/></button>
        </div>
    )
}