import React from "react"
import NavigationBar from "./navigation/Navigation"
import MainContent from "./Main"
import Des from "./Des"
import AsideImage from "./AsideImage"
import hero2 from "../static/about-01.png"
import "../index.css"
import MainContentSecond from "./MainContentSecond"
import Skills from "./Skills"
import Projects from "./Projects"
import ProjectCard,{SingleCard} from "./ProjectCard"
import fruitImage from "../static/fruits.svg"
import  Connect  from "./Connect"
import buttonIcon from "../static/linkedin-logo.svg"
import Footer from "./Footer"
import layer from "../static/facets.svg"
import { Link } from "react-router-dom"

export default function Home(){
    return(
        <>
        {/* Navigation Bar */}
        <div className="cover-head-bg h-[500px] md:h-[800px]">
        <div className="w-full custom-bg-hero flex justify-around md:px-36 poppins-bold p-3 fixed top-0 z-10">
        <NavigationBar List={[{navtext:"Home",navlink:"/",navStyle:""},
             {navtext:"About",navlink:"/",navStyle:""},
             {navtext:"Skills",navlink:"/",navStyle:""},
             {navtext:"Project",navlink:"/",navStyle:""},
             {navtext:"Connect",navlink:"/",navStyle:""}

        ]}></NavigationBar>
        </div>
        {/* Navigation Bar End */}

        {/* Main Content Description  */}
        <div className="relative main-custom-bg  flex flex-col justify-center items-center md:flex md:flex-row md:justify-around items-center  md:px-0 md:mt-0 md:pl-27">
        <div className="md:pt-48 mt-12 pt-20 md:mt-18 poppins-light justify-center flex items-center flex-col pr-3">
            <div className="md:pb-10 md:flex-none flex flex-col md:justify-start justify-center items-center md:items-start pl-5 text-justify md:pl-0">
            <MainContent></MainContent>
            <Des></Des>
            <button className="skill-bg w-full h-12 mt-5"><Link to="/">contact Sales</Link></button>
            </div>
        </div>
        </div>
        </div>
       {/*  Main Content Description End */}

       {/* Main Content Part-2 */}
       <div className="md:flex mt-10 md:mt-0 flex justify-center items-center md:flex-row flex-col-reverse md:items-start md:gap-20 md:mt-56  pb-5 md:pb-24">
       
        <div className="poppins-bold  mt-5 md:mt-0 md:ml-5 h-92 w-full md:w-auto md:h-auto px-2 md:px-0">
           <AsideImage image={hero2} style={{width:"34.125rem",height:"30.75519rem", rounded:"2.46338rem",backgroundImage:"custom-bg-image"}}></AsideImage>
        </div>
        <div className="w-full md:w-3/4 md:w-auto md:pt-10 md:flex flex flex-col md:justify-center justify-center items-center md:items-center">
       
            <MainContentSecond></MainContentSecond>
        </div>
        </div>

       {/* Main Content Part-2 END */}

       {/* Skills start  */}
       <Skills skillList={["E-COMMERCE","ENTERTAINMENT","CONTENT LIBRARY"]}></Skills>
       {/* Skills End */}

       {/* Projects */}
       <div className="md:flex md:flex-col md:justify-center md:items-center pt-20 pb-5">
       <Projects></Projects>
       <ProjectCard></ProjectCard>
       <div className="flex flex-col md:flex-row md:justify-start justify-center items-center md:gap-10 md:pb-32 px-5 md:px-0">
       <SingleCard type="Starter" fruit={fruitImage} price={"10"}>
        Includes(500 embeddings in dataset,unlimted retrival and storage)
       </SingleCard>
       <SingleCard type={"Medium"} fruit={fruitImage} price={"14"}>
       Includes(800 embeddings in dataset,unlimted retrival and storage)
       </SingleCard>
       <SingleCard fruit={fruitImage} type={"Large"} price={"0.2"}>
       Includes(unlimted embeddings in dataset,unlimted retrival and storage)
       <div className="mt-5">Note : The following plan is based Pay-as-you-Go type will be charged as per the consumption</div>
       </SingleCard>
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