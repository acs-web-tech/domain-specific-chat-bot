import React from "react"
import NavigationBar from "./navigation/Navigation"
import MainContent from "./Main"
import Des from "./Des"
export default function Home(){
    return(
        <>
        {/* Navigation Bar */}
        <div className="flex justify-around px-52 mt-16">
        <NavigationBar List={[{navtext:"Home",navlink:"/",navStyle:""},
             {navtext:"About",navlink:"/",navStyle:""},
             {navtext:"Skills",navlink:"/",navStyle:""},
             {navtext:"Project",navlink:"/",navStyle:""},
             {navtext:"Connect",navlink:"/",navStyle:""}

        ]}></NavigationBar>
        </div>
        {/* Navigation Bar End */}

        {/* Main Content Description  */}
        <div className="mt-32">
            <MainContent></MainContent>
            <Des></Des>
        </div>
        <div>
            
        </div>
       {/*  Main Content Description End */}

        </>
    ) 
}