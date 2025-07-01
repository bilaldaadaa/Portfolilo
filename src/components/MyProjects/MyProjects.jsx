import Flora from "../../assets/img/flora.png"
import dashboard from "../../assets/img/dashboard.png"
import SallaStore from "../../assets/img/sallastore.png"
import arrowInsideCircle from "../../assets/img/arrow_inside_circle.svg"
import { Link } from "react-router-dom"



const MyProjects = ({ title, complementstitle, btn, imgbtn, onclick }) => {

    const projects = [{
        id: "flora",
        name: "Flora",
        img: Flora,
        demo: " https://bilaldaadaa.github.io/flora/",
        des: "Html-css3"

    }, {
        id: "sallastore",
        name: "Salla Store",
        img: SallaStore,
        demo: " https://bilaldaadaa.github.io/flora/",
        des: "Html-css3"
    }, {
        id: "dashboard",
        name: "DashBoard",
        img: dashboard,
        demo: "https://dashboard-3ptb.vercel.app/",
        des: "React - tailwind-css - restFullAPI"
    }
    ]




    return (
        <div id="project" className="px-7 lg:px-[70px] mb-[94px] ">
            <div className="flex justify-between items-end mb-14 flex-wrap">
                <div className=" max-w-[381px]">
                    <p className="font-poppins font-medium text-xl ledaing-[30px]  mb-2 text-[#0C96E2] ">portfolio</p>
                    <h1 className="font-poppins font-semibold text-[40px] ledaing-[54px] text-[#1D2130] max-w-[381px] dark:text-white">{title} <span className="text-[#0C96E2]">{complementstitle}</span></h1>
                </div>
                <a href="https://github.com/bilaldaadaa">
                    <button className="flex items-center justify-center  bg-[#0C96E2] w-[163px] h-12 rounded-lg text-white cursor-pointer font-inter text-sm leading-6 font-medium" onClick={onclick} >
                        {btn}
                        {imgbtn}
                    </button>
                </a>
            </div>
            <div className=" flex items-center justify-center lg:justify-between flex-wrap gap-6">
                {projects.map((project) => {
                    return (
                        <div className="sm:w-[370px] max-h-full" key={project.id}>
                            <a href={project.demo}><img src={project.img} alt="" className="w-[370px] h-[173px] mb-8 rounded-lg" /></a>
                            <div className="flex items-center justify-between">
                                <div className="">
                                    <h4 className="font-poppins font-semibold text-[22px] leading-[33px] text-[#1D2130] mb-[11px] dark:text-white">{project.name}</h4>
                                    <p className="font-poppins text-[#1D2130] font-normal text-base dark:text-white">{project.des}</p>
                                </div>
                                <Link to={`/bilalportfolio/project/${project.id}`}><img src={arrowInsideCircle} alt="" className="cursor-pointer" /></Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MyProjects
