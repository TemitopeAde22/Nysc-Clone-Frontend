import React from "react"
import { useForm } from "react-hook-form"

// The watch function is used to access the current values of the password and confirmPassword
function SignUpPage() {
    const USER_REGEX = /^[A-Za-z]/
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm()

    const key = {
        Password: watch("Password"),
        confirmPassword: watch("confirmPassword"),
    }

    const { Password } = key
    const onSubmit = (data) => {
        // compare
        if (data.Password !== data.confirmPassword) {
            alert("Passwords do not match")
            return
        }
        console.log(data)
    }
    return (
        <div className="bg-[#fff] max-w-6xl p-5 mx-auto flex justify-center items-center my-auto overflow-y-hidden">
            <div className="w-full md:w-[70%] lg:w-[50%] space-y-3 rounded-md shadow-md overflow-hidden mt-5 ">
                <div className=" flex md:items-center md:justify-center">
                    <a href="/">
                        <img
                            className=""
                            src="https://portal.nysc.org.ng/nysc1/img/banner1.png"
                            alt=""
                        />{" "}
                    </a>
                </div>
                <h2 className="bg-[#2b943a] px-5 py-2 text-center text-[18px] font-bold rounded-md text-white">
                    Create an Account
                </h2>

                <div className="p-[16px]">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="text-sm text-gray-700 font-bold"
                    >
                        <div className="signup">
                            {/* FirstName */}
                            <div className="input_container">
                                <h3 className="font-semibold text-[12px]">
                                    FirstName:
                                </h3>
                                <input
                                    className="input_form"
                                    type="text"
                                    {...register("FirstName", {
                                        required: "FirstName is required",
                                        pattern: {
                                            value: USER_REGEX,
                                            message:
                                                "Name must contain letters only",
                                        },
                                    })}
                                />
                                {errors.FirstName && (
                                    <p className="italic text-[10px] font-semibold  text-red-500">
                                        {errors.FirstName.message}
                                    </p>
                                )}
                            </div>

                            {/* lastname */}
                            <div className="input_container">
                                <h3 className="font-semibold text-[12px]">
                                    LastName:
                                </h3>
                                <input
                                    className="input_form"
                                    type="text"
                                    {...register("LastName", {
                                        required: "LastName is required",
                                        pattern: {
                                            value: USER_REGEX,
                                            message:
                                                "Name must contain letters only",
                                        },
                                    })}
                                />
                                {errors.LastName && (
                                    <p className="italic text-[10px] font-semibold  text-red-500">
                                        {errors.LastName.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Email */}
                        <div className="signup">
                            <div className="input_container">
                                <h3 className="font-semibold text-[12px]">
                                    Email:
                                </h3>
                                <input
                                    className="input_form"
                                    type="email"
                                    {...register("Email", { required: true })}
                                />
                                {errors.Email && (
                                    <p className="italic text-[10px] font-semibold  text-red-500">
                                        Email is required.
                                    </p>
                                )}
                            </div>
                            <div className="input_container">
                                <h3 className="font-semibold text-[12px]">
                                    Date of Birth:
                                </h3>
                                <input
                                    className="input_form"
                                    type="date"
                                    {...register("DateOfBirth", {
                                        required: true,
                                    })}
                                />
                                {errors.DateOfBirth && (
                                    <p className="italic font-semibold  text-[10px] text-red-500">
                                        Date of Birth is required.
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="">
                            {/* password */}
                            <div className="input_container mb-1">
                                <h3 className="font-semibold text-[12px]">
                                    Password:
                                </h3>
                                <input
                                    id="password"
                                    className="input_form"
                                    type="password"
                                    {...register("Password", {
                                        required: "Password is required",
                                        pattern: {
                                            value: PWD_REGEX,
                                            message:
                                                "Invalid password. Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be 8-24 characters long.",
                                        },
                                    })}
                                />
                                {errors.Password && (
                                    <p className="italic text-[10px] text-red-500 font-semibold -mt-3">
                                        {errors.Password.message}
                                    </p>
                                )}
                            </div>

                            {/* confirm password */}
                            <div className="input_container mb-4">
                                <h3 className="font-semibold text-[12px]">
                                    Confirm Password:
                                </h3>
                                <input
                                    className="input_form"
                                    id="confirmPassword"
                                    type="password"
                                    {...register("confirmPassword", {
                                        required:
                                            "Confirm Password is required",
                                        validate: (value) =>
                                            value === Password ||
                                            "Passwords do not match",
                                    })}
                                />
                                {errors.confirmPassword && (
                                    <p className="italic text-[10px] text-red-500 font-semibold -mt-3">
                                        {errors.confirmPassword.message}
                                    </p>
                                )}
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="px-6 py-3 ml-3 text-base font-bold rounded bg-[#2b943a] text-white uppercase transition duration-200 ease-in-out cursor-pointer active:border border-solid active:scale-100"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default SignUpPage

// value === Password compares the value entered in the ConfirmPassword field with the value of the Password field. It checks if they are equal.

// If the comparison value === Password evaluates to true, it means the passwords match, and the validation passes.

// If the comparison value === Password evaluates to false, it means the passwords do not match.
