import React, { useState } from "react"
import axios from "axios"
import countriesData from "../../constants/countriesData.json"
import states from "../../constants/states.json"
import universities from "../../constants/universities.json"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

function Registration() {
    const navigate = useNavigate()
    const [successMessage, setSuccessMessage] = useState(null)
    const [showForm, setShowForm] = useState(true)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        axios
            .post("http://localhost:5000/api/user/details", data)
            .then((response) => {
                setSuccessMessage("Registration Successful! 😃")
                setShowForm(false)
                console.log(response)
            })
            .catch((err) => console.log(err))
        setSuccessMessage(null)
        console.log(data)
    }
    return (
        <div className="border border-[#f5f5f5] rounded-md shadow-md lg:w-[60%] md:w-[50%] w-full py-5 px-6 ">
            {/* Conditional rendering based on form visibility */}
            {showForm && (
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                        <h4 className="label_text">Personal Details</h4>
                        <div className="mb-3">
                            <label className="text" htmlFor="title">
                                Title
                            </label>
                            <select
                                className="mt-3 rounded-full appearance-none w-full bg-white border px-4 py-2 pr-8 outline-none "
                                name="title"
                                id="title"
                                {...register("title")}
                            >
                                <option
                                    value={"Mr"}
                                    className="cursor-pointer px-7  mb-3"
                                >
                                    Mr
                                </option>
                                <option
                                    className="cursor-pointer px-7 "
                                    value={"Mrs"}
                                >
                                    Mrs
                                </option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="text" htmlFor="">
                                Name
                            </label>
                            <input
                                className="input"
                                type="text"
                                {...register("name", { required: true })}
                            />
                            {errors.name && (
                                <p className="italic text-[10px] font-semibold mt-3 text-red-500">
                                    Name is required.
                                </p>
                            )}
                        </div>

                        <div className="mb-3">
                            <label className="text" htmlFor="">
                                Marital Status
                            </label>
                            <select
                                className="mt-3 rounded-full appearance-none w-full bg-white border px-4 py-2 pr-8 outline-none "
                                name="status"
                                id="status"
                                {...register("status")}
                            >
                                <option className="cursor-pointer px-7  mb-3">
                                    Single
                                </option>
                                <option className="cursor-pointer px-7">
                                    Married
                                </option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="text" htmlFor="">
                                House Address
                            </label>
                            <input
                                className="input"
                                type="text"
                                {...register("address", { required: true })}
                            />
                            {errors.address && (
                                <p className="italic text-[10px] font-semibold  text-red-500 mt-3">
                                    Address is Required.
                                </p>
                            )}
                        </div>

                        <h4 className="label_text">Nationality</h4>

                        <div className="mb-3 ">
                            <label className="text" htmlFor="">
                                Country
                            </label>

                            <select
                                className="mt-3 rounded-full appearance-none w-full bg-white border px-4 py-2 pr-8 leading-tight outline-none "
                                name="country"
                                id="country"
                                {...register("country")}
                            >
                                {countriesData.map((country) => (
                                    <option
                                        className="cursor-pointer px-7 border first:mt-3  mb-3"
                                        key={country.id}
                                        value={country.name}
                                    >
                                        {country.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="text" htmlFor="">
                                State of Origin
                            </label>
                            <select
                                className="mt-3 rounded-full appearance-none w-full bg-white border px-4 py-2 pr-8 leading-tight outline-none "
                                name="state"
                                id="state"
                                {...register("state")}
                            >
                                {states.map((state) => (
                                    <option
                                        className="cursor-pointer px-7 border first:mt-3  mb-3"
                                        key={state.id}
                                        value={state.name}
                                    >
                                        {state.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <h4 className="label_text">Academic Details</h4>
                        <div className="mb-3">
                            <label className="text" htmlFor="">
                                School Name
                            </label>
                            <select
                                className="mt-3 rounded-full appearance-none w-full bg-white border px-4 py-2 pr-8 leading-tight outline-none "
                                name="school"
                                id="school"
                                {...register("school")}
                            >
                                {universities.map((university) => (
                                    <option
                                        className="cursor-pointer px-7 border mb-3"
                                        key={university.id}
                                        value={university.name}
                                    >
                                        {university.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="flex flex-col md:flex-row gap-x-7">
                            <div className="mb-3 flex flex-col md:w-[50%]">
                                <label className="text" htmlFor="">
                                    From
                                </label>
                                <input
                                    {...register("from", { required: true })}
                                    className="outline-none border mt-2 py-1 px-4 rounded-full "
                                    type="date"
                                />
                                {errors.from && (
                                    <p className="italic text-[10px] font-semibold  text-red-500 mt-3">
                                        Required
                                    </p>
                                )}
                            </div>

                            <div className="mb-3 flex flex-col md:w-[50%]">
                                <label className="text" htmlFor="">
                                    To
                                </label>
                                <input
                                    className="outline-none border mt-2 py-1 px-4 rounded-full"
                                    type="date"
                                    {...register("to", { required: true })}
                                />
                                {errors.to && (
                                    <p className="italic text-[10px] font-semibold  text-red-500 mt-3">
                                        Required
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="text" htmlFor="">
                                Qualification
                            </label>
                            <select
                                className="mt-3 rounded-full appearance-none w-full bg-white border px-4 py-2 pr-8 outline-none "
                                name="qualification"
                                id="qualification"
                                {...register("qualification")}
                            >
                                <option className="cursor-pointer px-7  mb-3">
                                    Bsc
                                </option>
                                <option className="cursor-pointer px-7">
                                    HND
                                </option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="text" htmlFor="">
                                Course of Study
                            </label>
                            <input
                                className="input"
                                type="text"
                                {...register("course", { required: true })}
                            />
                            {errors.course && (
                                <p className="italic text-[10px] font-semibold  text-red-500 mt-3">
                                    Course of study is required.
                                </p>
                            )}
                        </div>

                        <div className="mb-6">
                            <label className="text" htmlFor="">
                                Matric Number
                            </label>
                            <input
                                className="input"
                                type="text"
                                {...register("matric", { required: true })}
                            />
                            {errors.matric && (
                                <p className="italic text-[10px] font-semibold  text-red-500 mt-3">
                                    Matric Numberis required.
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="bg-green-500 text-white py-2 px-5 rounded-full"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            )}

            {successMessage && !showForm && (
                <div className=" bg-[#f7f7f7] border h-full flex flex-col items-center py-3 px-3 md:px-7 md:py-5">
                    <motion.p
                        initial={{
                            y: -100,
                            opacity: 0,
                        }}
                        transition={{ duration: 1.2 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-2 md:mt-3  md:mb-5 font-Belanosima"
                    >
                        {successMessage}
                    </motion.p>

                    <p className="text-center mb-2 md:mb-5 font-Belanosima">
                        Congratulations! Your registration was successful. 🎉
                    </p>
                    <motion.p
                        initial={{
                            x: -500,
                            opacity: 0,
                            scale: 0.5,
                        }}
                        animate={{
                            x: 0,
                            opacity: 1,
                            scale: 1,
                        }}
                        transition={{
                            duration: 1.5,
                        }}
                        className="hidden md:inline-flex text-center mb-10 font-Belanosima"
                    >
                        Hooray! 🎉 You're now part of our community. Thank you
                        for registering. Welcome aboard! 🚀
                    </motion.p>
                    <img
                        className="lg:h-[300px] md:h-[160px] md:w-[160px] h-[150px] w-[150px] lg:w-[300px] object-contain"
                        src="https://media.tenor.com/xPh7mDqOZ8UAAAAM/success.gif"
                        alt="succsess"
                    />
                    <button
                        onClick={() => navigate("/home")}
                        className="bg-black animate-pulse font-Belanosima mt-4 text-white px-4 md:px-10 rounded-full py-2 text-center"
                    >
                        Continue
                    </button>
                </div>
            )}
        </div>
    )
}

export default Registration
