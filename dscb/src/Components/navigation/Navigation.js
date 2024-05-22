import React from "react";
import {Link,Outlet} from "react-router-dom"
import logo from "../../static/brand-logo.svg"
export default function NavigationBar({List}){
   console.log(List)
    return(
       <>
        <div className="brand-logo"><img src={logo} width="200px" height="200px"/></div>
        <div className="hidden md:flex md:justify-between md:w-[32rem] poppins-light md:text-lg md:items-center md:text-[1.3125rem]">
       {
        List.map((value)=>{
          return(
                <Link to={value.navlink}><div className="middle-element md:text-white ">{value.navtext}</div></Link>
        )
       })
    }
       </div>
       <div>
       <div className="buttons bg-[#FF006B] w-40 px-5 py-2 md:w-48  rounded-md text-[1.125rem] md:text-[1.3125rem] md:poppins-light">
         <Link to="/login">Download CV</Link>
       </div>
       </div>
       <Outlet/>
       </>
    )
}