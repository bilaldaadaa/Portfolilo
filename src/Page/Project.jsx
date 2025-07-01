import { useParams } from "react-router-dom"
import Flora from "../assets/img/flora.png"
import SallaStore from "../assets/img/sallastore.png"
import arrow_inside_circle_white from "../assets/img/arrow_inside_circle_white.svg"
import { useEffect, useState } from "react"
import { IoIosArrowBack } from "react-icons/io"
import { LuCircleDotDashed } from "react-icons/lu"
import { MdOutlineZoomOutMap } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import githubImg from "../assets/img/arrow_inside_circle.svg"
import MyProjectsCard from "../components/MyProjectsCard/MyProjectsCard"
import dashboard from "../assets/img/dashboard.png"


const projects = [
    {
        id: "flora",
        name: "Flora",
        img: Flora,
        demo: " https://bilaldaadaa.github.io/flora/",
        des: "A beautifully crafted website using HTML and CSS to help users explore and discover their dream homes. The platform showcases a variety of houses with detailed descriptions and appealing visuals. The responsive design ensures a smooth and enjoyable browsing experience on any device.",
        data: "12-5-2024",
        lang: "html-css",
        Framework: "no framework",
        Libraries: "no libraries",
        repo: "https://github.com/bilaldaadaa/Flora",
        to: "/bilalportfolio/project/flora",
        des2: "HTML-css3"

    },
    {
        id: "sallastore",
        name: "Salla Store",
        img: SallaStore,
        demo: " https://bilaldaadaa.github.io/flora/",
        des: "A simple online store designed using HTML and CSS, showcasing a variety of electronic gadgets in an attractive and organized layout. It offers an easy browsing experience for viewing smartphones, tablets, and tech accessories. The design is responsive to ensure optimal viewing across all devices.",
        data: "12-5-2024",
        lang: "html-css",
        Framework: "no framework",
        Libraries: "no libraries",
        repo: "https://github.com/bilaldaadaa/salla-store",
        to: "/bilalportfolio/project/sallastore",
        des2: "Html-css3"
    },
    {

        id: "dashboard",
        name: "DashBoard",
        img: dashboard,
        repo: "https://github.com/bilaldaadaa/dashboread",
        des: "An interactive dashboard built with React and Tailwind CSS, it displays user data in an organized and seamless manner.It features an elegant design and a seamless user experience across multiple devices.It demonstrates strong skills in building dynamic interfaces, managing status, and formatting content.",
        data: "1-7-2025",
        lang: "html-css-typescript",
        Framework: "React",
        Libraries: "axios , toast , react-router-dom , react-icont ",
        demo: "https://dashboard-3ptb.vercel.app/",
        to: "/bilalportfolio/project/dashborad",
        des2: "React - tailwindCss"

    }
]

const Project = () => {
    const { id } = useParams()
    const project = projects.find(p => p.id === id)
    if (!project) {
        return (<div className="">المشروع غير موجود</div>)
    }

    useEffect(() => {
        window.scroll({ top: 0, behavior: "smooth" })
    }, [])


    const [hovered, setHovered] = useState(false);
    const [zoomed, setZoomed] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0)

    const toggleZoom = () => {
        setZoomed(!zoomed)
    }


    const Next = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
    }

    const Prev = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? projects.length - 1 : prevIndex - 1)
    }



    return (
        <div>
            <div className="mt-[112px] mb-[79px]" >
                <div className="px-7 relative flex justify-between items-center flex-wrap lg:px-[70px] border-b-2 border-dashed border-[#1D2130] dark:border-white py-[70px] gap-7">
                    <div className="h-full max-w-[610px]  relative" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} >
                        {hovered && <div className=" absolute bg-[#00000080] w-full h-full flex justify-center items-center gap-5">
                            <a href={project.demo}><img src={arrow_inside_circle_white} alt="" className="cursor-pointer file:text-white " /></a>
                            <MdOutlineZoomOutMap className="text-white w-9 h-9 cursor-pointer" onClick={toggleZoom} />
                        </div>}
                        <img src={project.img} alt="" className="max-w-full rounded-lg" />
                        {zoomed && (
                            <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                                <div>
                                    <img
                                        src={project.img}
                                        alt=""
                                        className="w-2/4 h-1/2 m-auto rounded-lg"
                                    />
                                    <span className="absolute top-4 right-4 cursor-pointer " onClick={toggleZoom}>
                                        <FaTimes className="text-white w-12 h-12 " />
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="">
                        <div className="flex justify-between items-start  ">
                            <div className="mb-3">
                                <h1 className="font-poppins font-semibold  text-2xl leading-10 text-[#1D2130] dark:text-white ">{project.name}</h1>
                                <span className="font-poppins font-medium  text-sm leading-7 text-[#A6A6A6]">{project.date}</span>
                            </div>
                            <a href={project.demo}><img src={githubImg} alt="" className="cursor-pointer" /></a>
                        </div>
                        <p className="max-w-[570.41px] font-poppins text-lg text-[#1D2130] dark:text-white mb-[18px]dark:text-white mb-4 ">{project.des}</p>
                        <div className="mb-[30px]">
                            <p className="mb-3 font-poppins text-lg text-[#1D2130] dark:text-white "><span className="font-medium">Basic Languages : </span>{project.lang}</p>
                            <p className="mb-3  font-poppins text-lg text-[#1D2130] dark:text-white"><span className="font-medium">Framework : </span>{project.Framework}</p>
                            <p className=" font-poppins text-lg text-[#1D2130] dark:text-white" ><span className="font-medium">Libraries : </span>{project.Libraries}</p>
                        </div>
                        <a href={project.repo}>
                            <button className="w-[163.47px] h-[51px] rounded-lg bg-[#0C96E2] text-white cursor-pointer  font-inter font-medium leading-7">Github Repo</button>
                        </a>
                        <span className=" absolute left-[50%] bottom-[-8px] -translate-x-1/2 "><LuCircleDotDashed className=" dark:bg-white dark:text-white dark:rounded-full" /></span>
                    </div>
                </div>
                <div className=" px-7  mt-[80px] lg:px-[70px] ">
                    <div className="flex justify-between items-end mb-14 flex-wrap">
                        <div className="">
                            <p className="font-poppins font-medium text-xl ledaing-[30px]  mb-2 text-[#0C96E2] ">portfolio</p>
                            <h1 className="font-poppins font-semibold text-[40px] ledaing-[54px] text-[#1D2130] max-w-[381px] dark:text-white">The Best<span className="text-[#0C96E2]">Projects</span></h1>
                        </div>
                        <div className="flex gap-2">
                            <span onClick={Prev} className="bg-transparent "><IoIosArrowBack className=" cursor-pointer w-[30px] h-[30px] border-solid border-[1px] border-[#0C96E2] text-[#A6A6A6] rounded-full hover:bg-[#0c96e2] hover:text-white" /></span>
                            <span onClick={Next} className="bg-transparent"> <IoIosArrowBack className=" cursor-pointer w-[30px] h-[30px] border-solid border-[1px] border-[#0C96E2] text-[#A6A6A6]  rotate-180 rounded-full hover:bg-[#0c96e2] hover:text-white" /></span>
                        </div>
                    </div>
                    <div className="relative overflow-hidden">
                        <div className="flex justify-between transition-transform duration-1000 " style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            {projects.map((project, index) => (
                                <div key={index} className="flex-shrink-0 px-2 w-full md:w-full gap-7 ">
                                    <MyProjectsCard
                                        projectImg={project.img}
                                        projectname={project.name}
                                        projectdescription={project.des2}
                                        to={project.to}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Project
