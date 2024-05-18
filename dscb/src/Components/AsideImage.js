import React from "react"
import hero from "../static/hero-1.svg"
export default function AsideImage(props){
   return(
    <div>
        <img src={props.image?props.image:hero} style={{width:props.style.width,height:props.style.height}} alt="Hero" className={`rounded-[${props.style.rounded}] ${props.style.backgroundImage}`}/>
    </div>
   )
}