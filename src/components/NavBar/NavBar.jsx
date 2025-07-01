
import { useState } from "react";
import { Link, } from "react-router-dom"
import { IoReorderThreeOutline } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";

const NavBar = ({ name, items, img, onclick, active }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };
    return (
        <nav className=" flex justify-between items-center px-7 py-10 mb-[54px] fixed w-full top-0 z-20 bg-white  dark:bg-[#1B2431] duration-1000 lg:px-[70px] ">
            <h1 className="font-poppins  font-semibold text-2xl text-[#1D2130] dark:text-white "><Link to="/">{name}</Link></h1>
            <ul className=" hidden justify-between items-center gap-6 lg:flex ">
                {
                    items.map((item, index) => {
                        return (
                            <li className={`font-poppins  font-medium text-base text-[#1D2130]  dark:text-white hover:text-[#0c97e2] dark:hover:text-[#0c97e2] ${active ? "text-[#0c97e2]" : "text-[#1D2130]"}`} key={index}><a href={item.to}  >{item.name}</a></li>

                        )
                    })
                }
            </ul>
            <span className="cursor-pointer hidden lg:block " onClick={onclick} > {img} </span>
            <span className="block lg:hidden cursor-pointer " onClick={toggleSidebar}><IoReorderThreeOutline className="w-7 dark:text-white h-7" /></span>

            <div className={`fixed top-0 right-0 h-full w-36 bg-[#1b2533] text-white transform transition-transform ${isSidebarOpen ? "translate-x-0" : "translate-x-full"} flex-col flex py-4  items-center gap-10 `}>
                <ul className="justify-between items-center gap-6 flex flex-col">
                    {
                        items.map((item, index) => {
                            return (
                                <li className="font-poppins  font-medium text-base text-white hover:text-[#0c97e2] dark:hover:text-[#0c97e2] " key={index}><a href={item.to} >{item.name}</a></li>
                            )
                        })
                    }
                </ul>
                <span className="cursor-pointer" onClick={onclick}> {img} </span>
                <span><FaTimes className="text-white" onClick={toggleSidebar} /></span>
            </div>
        </nav >
    )
}

export default NavBar
