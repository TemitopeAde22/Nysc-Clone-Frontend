import React from "react"
import MailIcon from "@mui/icons-material/Mail"
import LockIcon from "@mui/icons-material/Lock"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"

function LoginPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm()
    const navigation = useNavigate()

    const onSubmit = (data) => {
        console.log(data)
        reset()
    }

    return (
        <div
            className="relative h-screen overflow-hidden flex justify-center space-y-5 bg-cover bg-center bg-no-repeat bg-opacity-60"
            style={{ backgroundImage: 'url("../images/imageone.jpg")' }}
        >
            <div className="absolute z-10 flex flex-col items-center justify-center">
                <img
                    className="sm:mb-5"
                    src="https://portal.nysc.org.ng/nysc1/img/banner1.png"
                    alt=""
                />
                <div className="p-5 mx-3 rounded-xl bg-white/50 md:w-[70%] lg:w-[70%]">
                    <h1 className="p-3 rounded-md text-xl bg-[#979aaa] font-sans font-bold">
                        Login to your Account
                    </h1>
                    <h2 className="text-center mt-5 text-[16px] font-sans font-semibold text-black mb-4">
                        Get started with our app, just create an account and
                        enjoy the experience.
                    </h2>
                    <form className="" onSubmit={handleSubmit(onSubmit)}>
                        <div className="login">
                            <MailIcon />
                            <label htmlFor="email" className="login_text">
                                Email Address
                            </label>
                        </div>
                        <input
                            id="email"
                            className="w-full p-1 rounded-md mb-7 outline-none  border border-black"
                            type="email"
                            {...register("Email", { required: true })}
                        />
                        {errors.Email && (
                            <p className="italic text-red-600 -mt-6 font-normal font-fira text-[14px] ">
                                Email is required.
                            </p>
                        )}

                        <div className="login">
                            <LockIcon />
                            <label htmlFor="password" className="login_text">
                                Password
                            </label>
                        </div>
                        <input
                            id="password"
                            className="w-full p-1 rounded-md mb-5 outline-none border border-black"
                            type="password"
                            {...register("Password", { required: true })}
                        />
                        {errors.Password && (
                            <p className="italic text-red-600 font-normal font-fira text-[14px] -mt-4">
                                Password is required.
                            </p>
                        )}

                        <div className="flex justify-end mb-3">
                            <button type="submit" className="login_btn">
                                Resume
                            </button>
                        </div>

                        <div className="flex space-x-3 items-center font-semibold text-black mb-4">
                            <h3>Not a Member?</h3>

                            <h4 className="hover:underline">
                                <a href="./signUp"> Create an Account</a>
                            </h4>
                        </div>

                        <div
                            onClick={() => navigation("/")}
                            className="flex flex-row space-x-2 items-center bg-black py-2 rounded-md text-[15px] w-44 px-1 cursor-pointer"
                        >
                            <ArrowBackIcon className="text-white font-bold" />
                            <h4 className="font-semibold text-white">
                                {" "}
                                Back to Home page
                            </h4>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
