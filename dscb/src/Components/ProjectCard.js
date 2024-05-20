import React from "react";
export default function ProjectCard(props){
   return(
    <div>
        <div className="switch text-black text-[1.5rem] [font-family:'Poppins'] flex gap-5 mt-10">
            <div className="w-12 pl-[5px] pr-2 py-2 bg-[#F3F3F3] rounded-[0.5rem] text-center font-[400]">ALL</div>
            <div className="pl-[5px] pr-2 py-2 w-24 bg-[#FF006B]  rounded-lg text-white text-center">UI/UX</div>
            <div className="w-42 bg-white pl-[10px] pr-5 py-2 rounded-lg text-center">App Design</div>
        </div>
    </div>
   )
}