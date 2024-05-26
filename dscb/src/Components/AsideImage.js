import React from "react"
import hero from "../static/hero-1.svg"
export default function AsideImage(props){
   return(
    <div>
        <img src={props.image?props.image:hero} style={{}} alt="Hero" className={`rounded-[${props.style.rounded}] w-[${props.style.width}] h-[${props.style.height}]`}/>
    </div>
   )
}