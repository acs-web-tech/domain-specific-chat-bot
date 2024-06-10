import React from "react";
import { Link } from "react-router-dom";
import facebook from "../static/Facebook.svg"
import instagram from "../static/Instagram.svg"
import LinkedIn from "../static/LinkedIn.svg"
import logo from "../static/brand.svg"
export default function Footer(props){
    return(
        <div className="[font-family:'Poppins'] flex flex-col relative justify-center items-center md:h-[30.5rem] md:gap-16 pt-5 md:pt-0 pb-10 md:pb-0 ">
            <div className="flex items-center">
                {/* <h1 className="flex justify-center items-center p-5 w-[2.625rem] h-[3.2955rem] text-[2.594rem] font-[700] bg-[#FF006B]">M</h1> */}
                <h1 className=""><img src={logo}/></h1>
               <h1 class="ml-3 text-[2.80794rem] font-[700]">4DUCATE</h1>
            </div>
            <section className="flex flex-col justify-center gap-3 md:flex-row items-center md:justify-start md:items-start md:flex-row md:gap-5">
               <div className="text-[1.125rem] font-400 tracking-[0.03938rem]"><Link>Home</Link></div>
               <div className="text-[1.125rem] font-400 tracking-[0.03938rem]"><Link>About</Link></div>
               <div className="text-[1.125rem] font-400 tracking-[0.03938rem]"><Link>Skills</Link></div>
               <div className="text-[1.125rem] font-400 tracking-[0.03938rem]"><Link>Projects</Link></div>
               <div className="text-[1.125rem] font-400 tracking-[0.03938rem]"><Link>Contact Us</Link></div>
          
            </section>
            <section className="flex gap-5 mt-5 md:mt-0">
               <div className="md:text-[1.125rem] md:font-400 md:tracking-[0.03938rem]"><Link><img src={facebook}/></Link></div>
               <div className="md:text-[1.125rem] md:font-400 md:tracking-[0.03938rem]"><Link><img src={instagram}/></Link></div>
               <div className="md:text-[1.125rem] md:font-400 md:tracking-[0.03938rem]"><Link><img src={LinkedIn}/></Link></div>
            </section>
            <div className="w-full text-black self-end bg-white absolute bottom-0 text-center md:text-[1.3125rem] md:font-[400] tracking-[0.03938rem]">Distributed By 4DUCATE</div>
        </div>
    )
}