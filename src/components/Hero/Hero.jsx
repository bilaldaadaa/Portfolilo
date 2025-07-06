import { LuCircleDotDashed } from "react-icons/lu";
import "./Hero.css"

import { Link } from "react-router-dom";


const Hero = ({ hey, title, description, btn, background, myimg, Squares, }) => {


    return (

        <div id="home" className=" relative px-7 flex justify-center items-center bg-contain bg-center bg-no-repeat border-b-2 border-[#1D2130] border-dashed mt-[112px] dark:border-white flex-wrap xl:justify-between  lg:px-[70px] " style={{ backgroundImage: `url(${background})`, height: `calc(100vh - 90px) ` }}>
            <div className="relative">
                <div className="circle "></div>
                <h1 className="font-poppins font-bold leading-[60.5px] text-[55px] text-[#1D2130] max-w-[600px] mb-2 dark:text-white ">
                    <span className="font-normal">{hey}</span>
                    {title}
                </h1>
                <p className="text-[#43495B] font-poppins font-normal text-lg max-w-[370px] mb-[30px] opacity-[0.87] dark:text-white  ">
                    {description}
                </p>
                <div className="w-[155px] h-[50px]  bg-[#FFFFFF99] font-poppins font-semibold text-base text-[#1D2130] dark:bg-[#0C96E299] flex justify-center items-center  ">
                    <Link to="https://drive.google.com/file/d/1zQ62MMhG1CJcQqyMCvp6lhIQ5_OSGOMG/view?usp=drivesdk" className="">
                        {btn}
                    </Link>
                </div>
            </div>
            <div className="hidden h-[444.32px] bg-no-repeat bg-top relative sm:block " >
                <img src={Squares} alt="" className=" absolute z-10 top-[-50px] " />
                <div className="circle w-[413.26px] h-[413.26px] rounded-full bg-[#DFE1FA] flex align-middle justify-center z-[0] relative"></div>
                <img src={myimg} alt="" className=" absolute top-[-40px]" />
            </div>
            <span className=" absolute left-[50%] bottom-[-10px] -translate-x-1/2  "><LuCircleDotDashed className=" dark:bg-white dark:text-white dark:rounded-full" /></span>
        </div>
    )
}



export default Hero
