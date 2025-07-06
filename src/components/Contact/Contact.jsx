import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../../assets/img/Spinner.gif"
const Contact = ({ title, Description, complementsDescription, infos }) => {
    const [lodaing, setLodaing] = useState(false)
    const formRef = useRef();
    const sendEmail = (e) => {
        setLodaing(true)
        e.preventDefault()
        emailjs
            .sendForm(
                "service_8egjxtd",
                "template_1ax2etp",
                formRef.current,
                "_SdliN043I6evGAq6"
            )
            .then(
                () => {
                    toast.success("🚀 تم إرسال الرسالة بنجاح!");
                    formRef.current.reset();
                    setLodaing(false)
                },
                (error) => {
                    toast.error("😓 فشل الإرسال، حاول مرة أخرى.");
                    console.error(error);
                }
            );

    }

    return (
        <div id="contact" className="px-7 lg:px-[70px]">
            <div className="mb-14">
                <p className="font-poppins font-medium text-xl text-[#0C96E2] mb-2">{title}</p>
                <h1 className="font-poppins font-semibold text-[40px] leading-[54px] text-[#1D2130] dark:text-white">{Description} <span className="text-[#0C96E2]">{complementsDescription}</span></h1>
            </div>
            <div className="flex justify-center xl:justify-between items-start flex-wrap ">
                <div className="flex lg:block flex-wrap gap-6">
                    {
                        infos.map((info, index) => {
                            return (
                                <div className="flex  items-center gap-5 max-w-[386.58px] mb-6 py-6 " key={index}>
                                    <span className="w-[61.85px] h-14 rounded-lg bg-[#0C96E2] text-white flex justify-center items-center">{info.img}</span>
                                    <div className="">
                                        <p className="font-inter text-[#92929D] leading-[14px] mb-4">{info.name}</p>
                                        <h6 className="font-inter font-medium leading-[18px] text-[#1D2130] dark:text-white">{info.Description}</h6>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <form action="" ref={formRef} className="w-[779.78px] mb-[94px] " onSubmit={sendEmail}>
                    <div className="flex justify-between items-center mb-6 flex-wrap gap-5">
                        <input type="text" name="from_name" id="" placeholder="Full name" className=" border-[1px] border-solid border-[#BEC0BF] rounded-lg w-[300px] lg:w-[375.53px] h-14 pl-[20px] py-4 bg-transparent dark:text-white" required />
                        <input type="text" name="from_email" id="" placeholder="Your email" className=" border-[1px] border-solid border-[#BEC0BF] rounded-lg w-[300px] lg:w-[375.53px] h-14 pl-[20px] py-4 bg-transparent dark:text-white" required />
                    </div>
                    <div className="mb-6">
                        <input type="text" name="phone" id="" placeholder="Phone number" className="border-[1px] border-solid border-[#BEC0BF] rounded-lg w-[300.53px] lg:w-[777.78px] h-14 pl-[20px] py-4 bg-transparent dark:text-white" required />
                    </div>
                    <textarea name="message" id="" placeholder="Message" className="w-[300.53px] lg:w-[779.78px] h-[170px] border-[1px] border-solid border-[#BEC0BF] pl-[20px] py-4 rounded-lg mb-5 bg-transparent dark:text-white" required ></textarea>
                    <div className="btn">
                        <button type="submit" className="w-[200px] h-[50px] bg-[#0C96E2] rounded-lg text-white font-inter font-medium flex justify-center items-center" >{lodaing == true ? <img className="w-[50px] " src={Spinner} alt="" /> : "Send Messages"}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
