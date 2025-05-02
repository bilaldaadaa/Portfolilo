import { FaArrowRight, FaGithub, FaHtml5, FaReact } from "react-icons/fa"
import AboutMe from "../components/AboutMe/AboutMe"
import Hero from "../components/Hero/Hero"
import { SiCss3 } from "react-icons/si"
import EducationExperience from "../components/EducationExperience/EducationExperience"
import Questions from "../components/Questions/Questions"
import MyProjects from "../components/MyProjects/MyProjects"
import Contact from "../components/Contact/Contact"
import { IoCallOutline } from "react-icons/io5"
import { MdOutlineEmail } from "react-icons/md"
import { CiLocationOn } from "react-icons/ci"
import ButtonGoToTop from "../components/ButtonGoToTop/ButtonGoToTop"
import { useEffect, useState } from "react"
import man from "../assets/img/man.png"
import Squares from "../assets/img/squers.png"
import Lines from "../assets/img/Lines.svg"
import figma from "../assets/img/figma.png"
import Circles from "../assets/img/Circles.png"
import LInes_three from "../assets/img/LInes_three.svg"





const MainPage = () => {
    const [isVisible, setIsVisible] = useState(false)


    const handleScroll = () => {
        if (window.scrollY >= 1700) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }




    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])



    const goToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }


    return (
        <div>
            <Hero

                hey="HEY!"
                title=" I’m bilal, Frontend Developer"
                description="Agency-quality Webflow websites with the personal touch of a freelancer."
                btn="Download Cv"
                background={Lines}
                Squares={Squares}
                myimg={man}
            />
            <AboutMe

                circles={Circles}
                logos={[{ img: <FaGithub className="w-20 h-20 absolute top-[330px] left-[130px] bg-transparent dark:text-white" /> },
                { img: <FaHtml5 className="w-16 h-20 text-[#F16529] absolute top-[80px] left-[90px]" /> },
                { img: <img src={figma} className="w-20 h-20 absolute right-24 top-[150px]  " /> },
                { img: <SiCss3 className="w-[74.31px] h-20 text-[#264DE4] absolute left-[35%] top-[200px] translate-y-2/4  translate-x-1/2" /> },
                { img: <FaReact className=" w-20 h-20 text-[#00D8FF] absolute bottom-[100px] right-[80px] " /> }]}
                title="About Me"
                description="My name is bilal daadaa, and is my portfolio is a representation of all that i've learned and accomplished as a science and engineering student"
                skils={[{ name: "HTML 5", width: "90%" }, { name: "CSS 3", width: "85%" }, { name: "JavaScript", width: "95%" }, { name: "React", width: "90%" }]}
            />
            <EducationExperience

                des="Education and Experience"
                title="Education & Experience"
                cards={[
                    { title: "Experince Designer", description: 'I studied the basics of programming and web development with a focus on building modern applications.' },
                    { title: "Frontend Developer", description: 'I deal with end-to-end web interfaces using HTML, CSS, JavaScript, and React with a focus on improving performance and user experience.' },
                    { title: "Experince Designer", description: "I can integrate user interfaces with back-end programming interfaces (APIs) to provide an end-to-end experience." },
                    { title: "Frontend Developer", description: "I used modern technologies like Tailwind CSS to create distinctive and fast designs." }
                ]}
                img="./public/assets/img/squers_edu&exp.svg"
            />

            <ButtonGoToTop onclick={goToTop} isactive={isVisible} />

            <Questions
                backgroundImage={LInes_three}
                title="Try me out, risk free!"
                descrpition="If you’re not happy with the design after the first draft, I’ll refund your deposit, "
                complementsDoc="no questions asked"
                btn="Contact"
                imgbtn={<FaArrowRight className="w-4 h-4" />}
                to={"#contact"}
            />
            <MyProjects

                title="My Creative Works Latest"
                complementstitle="Projects"
                btn="View Github"
                imgbtn={<FaArrowRight className="-rotate-45 w-5 h-5" />}
            />
            <Contact

                title="Contact"
                Description="Let’s Discuss Your "
                complementsDescription="Project"
                infos={[
                    { img: <IoCallOutline className="w-8 h-7" />, name: "Call me", Description: "+963996883651" },
                    { img: <MdOutlineEmail className="w-8 h-7" />, name: 'Email me', Description: "belalemb9@gmail.com" },
                    { img: <CiLocationOn className="w-8 h-7" />, name: 'Address', Description: "Damascus,syria" }]}
            />
        </div>
    )
}

export default MainPage
