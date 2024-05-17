import React from "react"
import NavigationBar from "./navigation/Navigation"
import MainContent from "./Main"
import Des from "./Des"
import AsideImage from "./AsideImage"
export default function Home(){
    return(
        <>
        {/* Navigation Bar */}
        <div className="flex justify-around px-52 mt-16 poppins-bold">
        <NavigationBar List={[{navtext:"Home",navlink:"/",navStyle:""},
             {navtext:"About",navlink:"/",navStyle:""},
             {navtext:"Skills",navlink:"/",navStyle:""},
             {navtext:"Project",navlink:"/",navStyle:""},
             {navtext:"Connect",navlink:"/",navStyle:""}

        ]}></NavigationBar>
        </div>
        {/* Navigation Bar End */}

        {/* Main Content Description  */}
        <div>
        <div className="mt-32 poppins-bold">
            <MainContent></MainContent>
            <Des></Des>
        </div>
        <div className="poppins-bold">
           <AsideImage></AsideImage>
        </div>
        </div>
       {/*  Main Content Description End */}

        </>
    ) 
}