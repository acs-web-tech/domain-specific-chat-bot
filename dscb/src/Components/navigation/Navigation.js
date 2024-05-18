import React from "react";
import {Link,Outlet} from "react-router-dom"
import logo from "../../static/brand-logo.svg"
export default function NavigationBar({List}){
   console.log(List)
    return(
       <>
        <div className="brand-logo"><img src={logo} width="200px" height="200px"/></div>
        <div className="flex justify-between w-[32rem] poppins-light text-lg items-center text-[1.3125rem]">
       {
        List.map((value)=>{
          return(
                <Link to={value.navlink}><div className="middle-element text-white ">{value.navtext}</div></Link>
        )
       })
    }
       </div>
       <div>
       <div className="buttons bg-[#FF006B] px-5 py-2 w-48  rounded-md text-[1.3125rem] poppins-light">
         <Link to="/login">Download CV</Link>
       </div>
       </div>
       <Outlet/>
       </>
    )
}