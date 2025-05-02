import { FaArrowUp } from "react-icons/fa"

const ButtonGoToTop = ({ onclick, isactive }) => {
    return (
        <div className={` pr-[60px] fixed top-[90%] right-0 w-[50px] h-[50px]  z-10`} onClick={onclick} >
            {isactive &&
                <button className=" w-[50px] h-[50px] rounded-xl bg-[#0C96E2] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] flex items-center justify-center  " >
                    <FaArrowUp className="text-white" />
                </button>
            }
        </div>
    )
}

export default ButtonGoToTop

