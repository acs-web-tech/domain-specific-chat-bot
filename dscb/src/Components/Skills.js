export default function Skills(props){
    return(
        <div className="[background:#FF006B] [font-family:'Poppins'] w-full h-[35.9375rem] flex flex-col items-center justify-center">
           <h1 className="text-6xl">Skills</h1>
           <div className="w-[50rem] text-lg font-[400] px-10 text-center tracking-[0.03938rem] leading-6 mt-5">Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam venenatis fghh hgjj nisi ante.</div>
          <div className="grid grid-cols-4 gap-12 mt-12">
            {
                props.skillList.map((value)=>{
                    return(<div className="flex w-[14.75rem] h-[4rem] bg-white text-black rounded-full text-[1.83594rem] font-[400] items-center justify-center">{value}</div>)
                })
            }
          </div>
        </div>
    )

}