import React, { useEffect, useState } from "react"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import { useDispatch, useSelector } from "react-redux"
import HomeSkeleton from "./HomeSkeleton"
import { setUser, setUserLoading, setUserError } from "../../features/userSlice"
import axios from "axios"
import { base_url } from "../../utils/axiosConfig"
import Sidebar from "./Sidebar"
import Modal from "../../components/Modal"

function LayOut() {
    const [modalOpen, setModalOpen] = useState(false)
    const dispatch = useDispatch()
    // const isLoading = useSelector((state) => state.auth.isLoading)
    const { isLoading, user } = useSelector((state) => state.user)

    const today = new Date()
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    }

    useEffect(() => {
        dispatch(setUserLoading(true))

        axios
            .get(`${base_url}user/user-data`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then((response) => {
                dispatch(setUser(response.data))
                dispatch(setUserLoading(false))
            })
            .catch((error) => {
                console.error("Error fetching user data:", error)
                dispatch(setUserError("Error fetching user data"))
                dispatch(setUserLoading(false))
            })
    }, [dispatch])

    const formattedDate = today.toLocaleDateString(undefined, options)

    return (
        <div className="bg-[#fff] h-full">
            {modalOpen && <Modal setOpenModal={setModalOpen} />}
            {isLoading ? (
                <HomeSkeleton />
            ) : user ? (
                <div className="bg-[#fff] h-full">
                    <div className="flex flex-col md:flex-row space-y-28 md:space-y-6">
                        <div className="w-full px-3 md:w-[25%] lg:w-[20%] md:px-7 h-[600px] md:h-[800px] md:border-2 md:shadow-lg border-solid border-y-0 border-l-0">
                            <div className="mb-10 space-y-2">
                                <h1 className="text-[23px] font-normal font-Belanosima mt-5">
                                    Hello,{" "}
                                    <span className="lowercase">
                                        {user.firstname}
                                    </span>
                                </h1>
                            </div>

                            <Sidebar />
                        </div>

                        <div className="w-full h-screen md:mt-10 md:w-[70%] lg:w-[90%]">
                            <div className="flex flex-col justify-between md:flex-row mb-10 md:items-center space-y-3">
                                <h2 className="bg-green-600 rounded-[4px] text-[15px] px-7 ml-5 text-white font-semibold text-center">
                                    {user.email}
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
                                                title={"Firstname"}
                                                details={
                                                    user.firstname || "N/A"
                                                }
                                            />
                                            <UserDetails
                                                title={"Lastname"}
                                                details={user.lastname || "N/A"}
                                            />

                                            <UserDetails
                                                title={"Email"}
                                                details={user.email || "N/A"}
                                            />
                                            <UserDetails
                                                title={"Phone Number"}
                                                details={user.mobile || "N/A"}
                                            />
                                            <UserDetails
                                                title={"Batch"}
                                                details={user.Batch || "NA"}
                                            />

                                            <UserDetails
                                                title={"Gender"}
                                                details={user.gender || "NA"}
                                            />
                                            <UserDetails
                                                title={"Call up Number"}
                                                details={
                                                    user.CallUpNumber || "NA"
                                                }
                                            />
                                            <UserDetails
                                                title={"State Code"}
                                                details={user.StateCode || "NA"}
                                            />
                                        </div>
                                        <div className="hidden md:inline-flex sm:inline-flex sm:mt-3">
                                            <AccountCircleIcon
                                                sx={{
                                                    height: "60px",
                                                    width: "60px",
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <h3 className="text-[#3c763d] italic mb-3 font-semibold w-full md:text-[14px]">
                                        Lorem ipsum, or lipsum as it is
                                        sometimes known, is dummy text used in
                                        laying out print, graphic or web
                                        designs. The passage is attributed to an
                                        unknown typesetter in the 15th century
                                    </h3>
                                    <h3 className="text-[#3c763d] italic mb-5 font-semibold md:mb-10 md:text-[14px]">
                                        who is thought to have scrambled parts
                                        of Cicero's De Finibus Bonorum et
                                        Malorum for use in a type specimen book.
                                        It usually begins with <br />
                                        The purpose of lorem ipsum is to create
                                        a natural looking block of text
                                        (sentence, paragraph, page, etc.) that
                                        doesn't distract from the layout. A
                                        practice not without controversy, laying
                                        out pages with meaningless filler text
                                        can be very useful when the focus is
                                        meant to be on design, not content.
                                    </h3>

                                    <div className="flex items-center flex-col w-full gap-2 p-3 lg:flex-row">
                                        <button
                                            // onClick={downloadPdf}
                                            className="btn"
                                        >
                                            Print Slip
                                        </button>
                                        <button className="btn">
                                            Relocation
                                        </button>
                                    </div>
                                </div>
                                <div className="md:px-5 px-2 mx-3 md:mx-5 font-Roboto text-[14px] mt-5 mb-5">
                                    <p className="font-500">
                                        If the spelling/arrangement shown above
                                        is incorrect,{" "}
                                        <span
                                            onClick={() => {
                                                setModalOpen(true)
                                            }}
                                            className="bg-[#5CB85C] text-white cursor-pointer font-Belanosima hover:underline py-[3px] px-2 rounded-md hover:text-[#0a0d1a]"
                                        >
                                            Apply for Correction/Rearrangement
                                            of Name
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <HomeSkeleton />
            )}
        </div>
    )
}

function UserDetails({ title, details }) {
    return (
        <div className="flex flex-col md:flex-row space-x-3 items-start">
            <h3 className="text-[#3c763d] font-Belanosima">{title}:</h3>
            <h4 className="text-[#3c763d] font-500 text-[14px] ml-0">
                {details}
            </h4>
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
