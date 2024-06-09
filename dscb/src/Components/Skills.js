export default function Skills(props){
    return(
        <div className="skill-bg [font-family:'Poppins'] md:w-full h-auto md:h-[35.9375rem] flex flex-col items-center justify-center pt-10 py-10 md:py-0 md:pt-0">
           <h1 className="text-6xl custom-bg-text-brand">Use Cases</h1>
           <div className="px-5 w-full md:w-[50rem] md:text-lg md:font-[400] mt-3 md:px-10 text-center tracking-[0.03938rem] leading-6 md:mt-5">These listings are listed based on our testing datasets, there are cases which will be covered soon!</div>
          <div className={`w-full grid grid-cols-1 ${props.skillList.length<4?"md:flex":"md:grid-cols-4"} items-center justify-center gap-12 mt-12 px-5 md:px-10`}>
            {
                props.skillList.map((value)=>{
                    return(<div className="flex w-full md:w-auto px-5 h-[4rem] bg-white text-black rounded-full md:text-[1.83594rem] md:font-[400] items-center justify-center">{value}</div>)
                })
            }
          </div>
        </div>
    )

}