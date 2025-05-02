import AboutCircle from "../../assets/img/AboutCircle.svg"
import tringle from "../../assets/img/tringle.svg"

const AboutMe = ({ circles, logos, title, description, skils }) => {
    return (
        <div id="about" className="">
            <div className=" flex justify-center items-start px-7 mt-[50px] mb-[125px] flex-wrap xl:justify-between md:px-[70px]">
                <div className="hidden w-[509px] relative mb-[100px] sm:block ">
                    <img src={circles} alt="" className=" max-w-full" />
                    {logos.map((logo, index) => {
                        return (
                            <span key={index} >
                                {logo.img}
                            </span>
                        )
                    })}
                </div>
                <div className="max-w-[598.7px] ">
                    <h1 className="font-poppins text-[#1D2130] font-semibold text-4xl leading-[60px] tracking-[0.03em] mb-3 dark:text-white">{title}</h1>
                    <p className="font-poppins text-[#1D2130] font-normal text-lg tracking-[0.03em] max-w-[536px] mb-10 dark:text-white">{description}</p>
                    <div className="">
                        <div className="">
                            {
                                skils.map((skil, index) => {
                                    return (
                                        <div key={index} className="mb-5">
                                            <h5 className="mb-[14px] text-[#1D2130] font-semibold text-2xl font-poppins dark:text-white">{skil.name}</h5>
                                            <p className="max-w-[500px] h-3 bg-[#EDECEC] rounded-full ">
                                                <span className={`w-[${skil.width}]   h-3 bg-[#0C96E2] block rounded-full relative `}>
                                                    <img src={AboutCircle} alt="" className=" absolute top-[-10px] right-[-10px] cursor-pointer " />
                                                    <span className="  absolute right-[-6px] top-[-40px] w-8 h-5 bg-[#0C96E2] flex items-center justify-center rounded-[4px] font-inter text-white font-normal text-[10px] leading-3">
                                                        {skil.width}
                                                        <img src={tringle} alt="" className="w-[12px] h-[12px] absolute bottom-[-10px] -z-10" />
                                                    </span>
                                                </span>
                                            </p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
