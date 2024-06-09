import React from "react";
export default function ProjectCard(props){
   return(
    <div>
        <div className="switch hidden text-black text-[1.5rem] [font-family:'Poppins'] md:flex gap-5 mt-10">
            <div className="w-28 px-4 py-2 bg-[#F3F3F3] rounded-[0.5rem] flex justify-center font-[400]">STARTER</div>
            <div className="py-2 px-4 w-28 bg-[#FF006B]  rounded-lg text-white flex justify-center">Medium</div>
            <div className="w-42 px-4 bg-white  py-2 rounded-lg flex justify-center">Large</div>
        </div>
        
    </div>
   )
}
export function SingleCard(props){
    return(
        <div className="border-style-custom [font-family:'Poppins'] w-full md:w-[28rem] mt-12 px-[20px] py-[10px] mt:px-[0px]  mt:py-[0px] shadow-md	 shadow-slate-100	">
          <div className="w-full h-[17.5rem] md:w-[25.4035rem] md:h-[17.5rem] fruits rounded-xl"></div>
          <h4 className="md:text-[1.92188rem] text-[2rem] md:font-[700] tracking-[0.05769rem] mt-5">{props.type} ${props.price} </h4>
          <p className="w-full md:text-[0.879rem] md:font-[400] text-[#858585] tracking-[0.02669rem] md:mt-3">
          {props.children}
          </p>
          <div className="md:flex md:gap-5 mt-3">
            <button className="border-2 border-[#FF006B] p-[0.5rem] rounded-lg text-[#FF006B] hover:text-white hover:bg-[#FF006B] transition-colors">Source Code</button>
            <button className="border-2 border-[#FF006B] p-[0.5rem] rounded-lg text-[white] hover:text-[#FF006B] hover:bg-[transparent] bg-[#FF006B]  transition-colors ml-5 md:ml-0">Preview</button>

          </div>
        </div>
    )
}