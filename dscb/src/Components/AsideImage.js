import React from "react"
import hero from "../static/hero-1.svg"
export default function AsideImage(props){
   return(
    <div className="pb-10">
        <img src={props.image?props.image:hero} style={{}} alt="Hero" className={`md:rounded-[10rem] rounded-[5rem] w-full h-[${props.style.height}]`}/>
    </div>
   )
}