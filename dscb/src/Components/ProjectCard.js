import React from "react";
export default function ProjectCard(props){
   return(
    <div>
        <div className="switch hidden text-black text-[1.5rem] [font-family:'Poppins'] md:flex gap-5 mt-10">
            <div className="w-12 pl-[5px] pr-2 py-2 bg-[#F3F3F3] rounded-[0.5rem] text-center font-[400]">ALL</div>
            <div className="pl-[5px] pr-2 py-2 w-24 bg-[#FF006B]  rounded-lg text-white text-center">UI/UX</div>
            <div className="w-42 bg-white pl-[10px] pr-5 py-2 rounded-lg text-center">App Design</div>
        </div>
        
    </div>
   )
}
export function SingleCard(props){
    return(
        <div className="[font-family:'Poppins'] w-full md:w-[26rem] mt-12">
          <div className="w-full h-[17.5rem] md:w-[25.4035rem] md:h-[17.5rem] fruits rounded-xl"></div>
          <h4 className="md:text-[1.92188rem] md:font-[700] tracking-[0.05769rem] mt-5">Foodify</h4>
          <p className="w-full md:text-[0.879rem] md:font-[400] text-[#858585] tracking-[0.02669rem] md:mt-3">
          Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis
          </p>
          <div className="md:flex md:gap-5 mt-3">
            <button className="border-2 border-[#FF006B] p-[0.5rem] rounded-lg text-[#FF006B] hover:text-white hover:bg-[#FF006B] transition-colors">Source Code</button>
            <button className="border-2 border-[#FF006B] p-[0.5rem] rounded-lg text-[white] hover:text-[#FF006B] hover:bg-[transparent] bg-[#FF006B]  transition-colors ml-5 md:ml-0">Preview</button>

          </div>
        </div>
    )
}