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
import ProjectCard,{SingleCard} from "./ProjectCard"
import fruitImage from "../static/fruits.svg"
import  Connect  from "./Connect"
import buttonIcon from "../static/linkedin-logo.svg"
import Footer from "./Footer"

export default function Home(){
    return(
        <>
        {/* Navigation Bar */}
        <div className="flex justify-around md:px-36  mt-10 md:mt-16 poppins-bold">
        <NavigationBar List={[{navtext:"Home",navlink:"/",navStyle:""},
             {navtext:"About",navlink:"/",navStyle:""},
             {navtext:"Skills",navlink:"/",navStyle:""},
             {navtext:"Project",navlink:"/",navStyle:""},
             {navtext:"Connect",navlink:"/",navStyle:""}

        ]}></NavigationBar>
        </div>
        {/* Navigation Bar End */}

        {/* Main Content Description  */}
        <div className="mt-12 flex flex-col justify-center items-center md:flex md:flex-row md:justify-around items-center md:mt-36 md:pl-24">
        <div className="md:mt-32 poppins-light justify-center flex items-center flex-col">
            <div className="md:pb-10 md:flex-none flex flex-col md:justify-start justify-center items-center md:items-start pl-5 text-justify md:pl-0">
            <MainContent></MainContent>
            <Des></Des>
            </div>
        </div>
        <div className="poppins-bold md:ml-5 mt-2 md:mt-0 h-92 w-full md:w-auto md:h-auto md:px-0 px-5" >
           <AsideImage style={{width:"34.125rem",height:"30.75519rem", rounded:"2.46338rem"}}></AsideImage>
        </div>
        </div>
       {/*  Main Content Description End */}

       {/* Main Content Part-2 */}
       <div className="md:flex flex justify-center items-center md:flex-row flex-col-reverse md:items-start md:justify-around md:mt-56 pl-22 md:pb-24 pb-5">
       
        <div className="poppins-bold md:ml-5 h-92 w-full md:w-auto md:h-auto px-10 md:px-0">
           <AsideImage image={hero2} style={{width:"34.125rem",height:"30.75519rem", rounded:"2.46338rem",backgroundImage:"custom-bg-image"}}></AsideImage>
        </div>
        <div className="w-full md:w-3/4 md:w-auto md:pb-10 md:flex-none flex flex-col md:justify-start justify-center items-center md:items-start">
       
            <MainContentSecond></MainContentSecond>
        </div>
        </div>

       {/* Main Content Part-2 END */}

       {/* Skills start  */}
       <Skills skillList={["HTML5","C","C++","Java","Javascript","PHP","CSS","GO"]}></Skills>
       {/* Skills End */}

       {/* Projects */}
       <div className="md:flex md:flex-col md:justify-center md:items-center pt-20 pb-5">
       <Projects></Projects>
       <ProjectCard></ProjectCard>
       <div className="flex flex-col md:flex-row md:justify-start justify-center items-center md:gap-10 md:pb-32 px-5 md:px-0">
       <SingleCard fruit={fruitImage}></SingleCard>
       <SingleCard fruit={fruitImage}></SingleCard>
       <SingleCard fruit={fruitImage}></SingleCard>
       </div>
       </div>
         {/* Projects End */}

       {/* Connect LinkedIn  */}
       <div className="w-full md:h-[31.875rem]">
        <Connect buttonIcon={buttonIcon}></Connect>
       </div>
       
       
       {/* Connect LinkedIn End */}

       {/* Footer start */}
       <div>
        <Footer></Footer>
       </div>
     
        </>
    ) 
}