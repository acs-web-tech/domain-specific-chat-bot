import React from "react"
import NavigationBar from "./navigation/Navigation"
import MainContent from "./Main"
import Des from "./Des"
import AsideImage from "./AsideImage"
import hero2 from "../static/hero-2.svg"
import "../index.css"
import MainContentSecond from "./MainContentSecond"
import Skills from "./Skills"
import Projects from "./Projects"
import ProjectCard from "./ProjectCard"
export default function Home(){
    return(
        <>
        {/* Navigation Bar */}
        <div className="flex justify-around px-36 mt-16 poppins-bold">
        <NavigationBar List={[{navtext:"Home",navlink:"/",navStyle:""},
             {navtext:"About",navlink:"/",navStyle:""},
             {navtext:"Skills",navlink:"/",navStyle:""},
             {navtext:"Project",navlink:"/",navStyle:""},
             {navtext:"Connect",navlink:"/",navStyle:""}

        ]}></NavigationBar>
        </div>
        {/* Navigation Bar End */}

        {/* Main Content Description  */}
        <div className="flex justify-around items-center mt-36 pl-24">
        <div className="mt-32 poppins-light flex items-center flex-col">
            <div className="pb-10">
            <MainContent></MainContent>
            <Des></Des>
            </div>
        </div>
        <div className="poppins-bold ml-5">
           <AsideImage style={{width:"34.125rem",height:"30.75519rem", rounded:"2.46338rem"}}></AsideImage>
        </div>
        </div>
       {/*  Main Content Description End */}

       {/* Main Content Part-2 */}
       <div className="flex justify-around mt-56 pl-24 pb-24">
       
        <div className="poppins-bold ml-5">
           <AsideImage image={hero2} style={{width:"29.125rem",height:"40.75519rem", rounded:"2.46338rem",backgroundImage:"custom-bg-image"}}></AsideImage>
        </div>
        <div>
            <MainContentSecond></MainContentSecond>
        </div>
        </div>

       {/* Main Content Part-2 END */}

       {/* Skills start  */}
       <Skills skillList={["HTML5","C","C++","Java","Javascript","PHP","CSS","GO"]}></Skills>
       {/* Skills End */}

       {/* Projects */}
       <div className="flex flex-col justify-center items-center pt-20">
       <Projects></Projects>
       <ProjectCard></ProjectCard>
       </div>
       {/* Projects End */}
        </>
    ) 
}