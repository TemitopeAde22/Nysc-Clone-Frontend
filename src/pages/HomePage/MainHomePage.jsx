import React from "react"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { FaHandPointRight } from "react-icons/fa"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"

function LayOut() {
    const today = new Date()
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    }
    const formattedDate = today.toLocaleDateString(undefined, options)

    return (
        <div className="bg-[#fff] h-full flex flex-col md:flex-row space-y-28 md:space-y-6">
            <div className="w-full px-3 md:w-[25%] lg:w-[20%] md:px-7 h-[600px] md:h-[800px] md:border-2 md:shadow-lg border-solid border-y-0 border-l-0">
                <div className="mb-10 space-y-2">
                    <h1 className="text-[23px] font-semibold mt-5 ">Actions</h1>
                </div>

                <div className="space-y-4">
                    <SideBar title={"My Dashboard"} Icon={FaHandPointRight} />
                    <SideBar
                        title={"Change Password"}
                        Icon={FaHandPointRight}
                    />
                    <SideBar
                        title={"Course Correction"}
                        Icon={FaHandPointRight}
                    />
                    <SideBar title={"PPA Letter"} Icon={FaHandPointRight} />
                    <SideBar title={"LGA Clearance"} Icon={FaHandPointRight} />
                    <SideBar
                        title={"Disciplinary Case"}
                        Icon={FaHandPointRight}
                    />
                    <SideBar title={"Log Out"} Icon={FaHandPointRight} />
                </div>
            </div>

            <div className="w-full h-screen md:mt-10 md:w-[70%] lg:w-[90%]">
                <div className="flex flex-col justify-between md:flex-row mb-10 md:items-center space-y-3">
                    <h2 className="bg-green-600 rounded-[4px] text-[18px] px-5 w-64 ml-5 text-white font-semibold text-center">
                        adebunmi33@gmail.com
                    </h2>
                    <h3 className="md:mr-10 ml-[170px] text-[14px] text-gray-800">
                        Todays Date: {formattedDate}
                    </h3>
                </div>

                <div className="border border-solid border-gray-400 md:w-[96%] mx-5">
                    <h3 className="text-black bg-gray-200 font-semibold text-[18px] px-3">
                        Dashboard Basic | Details
                    </h3>
                    <div className="bg-[#dff0d8] px-5 mx-5 mt-4 rounded-md">
                        <div className="flex flex-row justify-between">
                            <div className="list-none flex flex-col justify-start py-4 space-y-1 md:space-y-1 md:ml-[40px] lg:ml-[55px]">
                                <UserDetails
                                    title={"Name"}
                                    details={"Adebunmi Temitope "}
                                />
                                <UserDetails
                                    title={"Batch"}
                                    details={"C 2022"}
                                />
                                <UserDetails
                                    title={"Email"}
                                    details={"adebunmi33@gmail.com"}
                                />
                                <UserDetails
                                    title={"Phone Number"}
                                    details={"07059195123"}
                                />
                                <UserDetails
                                    title={"Name"}
                                    details={"Adebunmi Temitope "}
                                />
                                <UserDetails
                                    title={"Batch"}
                                    details={"C 2022"}
                                />
                                <UserDetails
                                    title={"Email"}
                                    details={"adebunmi33@gmail.com"}
                                />
                                <UserDetails
                                    title={"Phone Number"}
                                    details={"07059195123"}
                                />
                            </div>
                            <div className="hidden md:inline-flex sm:inline-flex sm:mt-3">
                                <AccountCircleIcon
                                    sx={{ height: "60px", width: "60px" }}
                                />
                            </div>
                        </div>

                        <h3 className="text-[#3c763d] italic mb-3 font-semibold w-full md:text-[14px]">
                            Lorem ipsum, or lipsum as it is sometimes known, is
                            dummy text used in laying out print, graphic or web
                            designs. The passage is attributed to an unknown
                            typesetter in the 15th century
                        </h3>
                        <h3 className="text-[#3c763d] italic mb-5 font-semibold md:mb-10 md:text-[14px]">
                            who is thought to have scrambled parts of Cicero's
                            De Finibus Bonorum et Malorum for use in a type
                            specimen book. It usually begins with <br />
                            The purpose of lorem ipsum is to create a natural
                            looking block of text (sentence, paragraph, page,
                            etc.) that doesn't distract from the layout. A
                            practice not without controversy, laying out pages
                            with meaningless filler text can be very useful when
                            the focus is meant to be on design, not content.
                        </h3>

                        <div className="flex items-center flex-col w-full gap-2 p-3 lg:flex-row">
                            <button className="btn">Print Slip</button>
                            <button className="btn">Relocation</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function UserDetails({ title, details }) {
    return (
        <div className="flex flex-col md:flex-row space-x-3 items-start">
            <h3 className="text-[#3c763d] font-semibold">{title}:</h3>
            <h4 className="text-[#3c763d] font-normal text-[15px] ml-0">
                {details}
            </h4>
        </div>
    )
}

function SideBar({ title, Icon }) {
    return (
        <div className="flex items-center gap-3 last:border-b-0 border border-solid border-x-0 border-t-0 border-[#808080] p-2 py-4 ">
            {Icon && <Icon className="w-4  h-4 " />}
            <h3 className="text-[18px] md:text-[15px] flex-1 font-semibold cursor-pointer hover:text-red-500">
                {title}
            </h3>
        </div>
    )
}
function HomePage() {
    return (
        <div>
            <Header />
            <LayOut />
            <Footer />
        </div>
    )
}

export default HomePage
