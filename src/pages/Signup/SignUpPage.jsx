import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { registerUser } from "../../features/authSlice2"
import Loader from "../../components/Loader"
import { toast } from "react-toastify"
import ToastMsg from "../../components/ToastContainer"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import InputField from "../../components/CustomInput"
import states from "../../constants/states.json"
import universities from "../../constants/universities.json"

function SignUpPage() {
    //validation patterns
    const USER_REGEX = /^[A-Za-z]/
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
    const MOBILE_REGEX = /^[0-9]*$/

    //react-hook form
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        watch,
    } = useForm()

    //button conditions
    const renderButton = () => {
        if (formStep > 2) {
            return undefined
        } else if (formStep === 2) {
            return (
                <button
                    type="submit"
                    disabled={!isValid}
                    className="px-6 py-2 mt-5 ml-3 text-base font-bold rounded bg-[#2b943a] 
                    text-white uppercase cursor-pointer 
                   border-solid "
                >
                    Submit
                </button>
            )
        } else {
            return (
                <button
                    type="button"
                    onClick={completeForm}
                    disabled={!isValid}
                    className="px-6 py-2 mt-5 ml-3 text-base font-bold rounded bg-[#2b943a] 
                    text-white uppercase  cursor-pointer 
                    border-solid "
                >
                    Next
                </button>
            )
        }
    }

    const [formStep, setFormStep] = useState(0)
    const isLoading = useSelector((state) => state.auth.isLoading)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    //password compare
    const key = {
        Password: watch("Password"),
        confirmPassword: watch("confirmPassword"),
    }
    const { Password } = key
    const completeForm = () => {
        setFormStep((current) => current + 1)
    }

    //sign up api
    const onSubmit = async (data, e) => {
        completeForm()
        e.preventDefault()
        const action = await dispatch(registerUser(data))

        if (registerUser.fulfilled.match(action)) {
            toast.success("Account Created Successfully", {
                position: toast.POSITION.TOP_RIGHT,
            })
            setTimeout(() => {
                navigate("/login")
            }, 1000)
        } else if (registerUser.rejected.match(action)) {
            const { message } = action.error
            if (message === "User Already Exists") {
                toast.error("User Already Exists Please Login", {
                    position: toast.POSITION.TOP_CENTER,
                })
                setTimeout(() => {
                    navigate("/login")
                }, 2000)
            } else {
                toast.error("An error occurred during registration")
            }
        }
        console.log(data)
    }

    return (
        <div
            style={{ backgroundImage: 'url("../images/imagethree.jpg")' }}
            className="bg-cover bg-center bg-no-repeat bg-opacity-60"
        >
            <div
                className={`max-w-6xl p-5 mx-auto flex justify-center items-center md:h-screen  ${
                    isLoading ? "backdrop-blur-md" : ""
                }`}
            >
                {isLoading ? (
                    <Loader />
                ) : (
                    <div className="w-full bg-white/100 px-3 py-3 md:w-[70%]  lg:w-[50%] space-y-3 rounded-md shadow-md overflow-hidden mt-5 ">
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
                                {formStep >= 0 && (
                                    //first section of sign up
                                    <section
                                        className={
                                            formStep === 0 ? "block" : "hidden"
                                        }
                                    >
                                        {/* firstname and lastname */}

                                        <div className="signup mt-0">
                                            <InputField
                                                label="First Name"
                                                register={register}
                                                errors={errors}
                                                name="firstname"
                                                type="text"
                                                validation={{
                                                    required:
                                                        "First name is required",
                                                    pattern: {
                                                        value: USER_REGEX,
                                                        message:
                                                            "Name must contain letters only",
                                                    },
                                                }}
                                            />
                                            <InputField
                                                label="Last Name"
                                                register={register}
                                                errors={errors}
                                                name="lastname"
                                                type="text"
                                                validation={{
                                                    required:
                                                        "Last name is required",
                                                    pattern: {
                                                        value: USER_REGEX,
                                                        message:
                                                            "Name must contain letters only",
                                                    },
                                                }}
                                            />
                                        </div>

                                        {/* email and mobile number */}
                                        <div className="signup">
                                            <InputField
                                                label="Email"
                                                register={register}
                                                errors={errors}
                                                name="email"
                                                type="email"
                                                validation={{
                                                    required: true,
                                                }}
                                                errorMessage="Email is required."
                                            />
                                            <InputField
                                                label="Mobile Number"
                                                register={register}
                                                errors={errors}
                                                name="mobile"
                                                type="tel"
                                                validation={{
                                                    required:
                                                        "Mobile number is required",
                                                    pattern: {
                                                        value: MOBILE_REGEX,
                                                        message:
                                                            "Invalid mobile number. Please enter numbers only.",
                                                    },
                                                }}
                                            />
                                        </div>

                                        {/* state of origin, address, status and gender fields */}
                                        <div className="flex md:flex-row w-full flex-col md:items-center justify-between">
                                            <SelectInput
                                                label="Gender"
                                                name="gender"
                                                register={register}
                                                options={[
                                                    {
                                                        value: "Male",
                                                        label: "Male",
                                                    },
                                                    {
                                                        value: "Female",
                                                        label: "Female",
                                                    },
                                                ]}
                                                errors={errors}
                                            />
                                            <SelectInput
                                                label="Marital Status"
                                                name="status"
                                                register={register}
                                                options={[
                                                    {
                                                        value: "Single",
                                                        label: "Single",
                                                    },
                                                    {
                                                        value: "Married",
                                                        label: "Married",
                                                    },
                                                ]}
                                                errors={errors}
                                            />
                                        </div>

                                        <TextInput
                                            label="House Address"
                                            name="address"
                                            register={register}
                                            errors={errors}
                                            type={"text"}
                                        />

                                        <SelectInput
                                            label="State of Origin"
                                            name="stateOfOrigin"
                                            register={register}
                                            options={states.map((state) => ({
                                                value: state.name,
                                                label: state.name,
                                            }))}
                                            errors={errors}
                                        />
                                    </section>
                                )}
                                {formStep >= 1 && (
                                    //second section of sign up
                                    <section
                                        className={
                                            formStep === 1 ? "block" : "hidden"
                                        }
                                    >
                                        {/* school, dates, qualification, matric number and course fields */}
                                        <div className="">
                                            <SelectInput
                                                label="School Name"
                                                name="school"
                                                register={register}
                                                options={universities.map(
                                                    (university) => ({
                                                        value: university.name,
                                                        label: university.name,
                                                    })
                                                )}
                                                errors={errors}
                                            />
                                        </div>
                                        <div className="flex flex-col md:flex-row mt-2 w-full">
                                            <div className="md:w-[50%]">
                                                <TextInput
                                                    label="From"
                                                    name="from"
                                                    register={register}
                                                    errors={errors}
                                                    type="date"
                                                />
                                            </div>
                                            <div className="md:w-[50%]">
                                                <TextInput
                                                    label="To"
                                                    name="to"
                                                    register={register}
                                                    errors={errors}
                                                    type="date"
                                                />
                                            </div>
                                        </div>

                                        <SelectInput
                                            label="  Qualification"
                                            name="qualification"
                                            register={register}
                                            options={[
                                                {
                                                    value: "Bsc",
                                                    label: "Bsc",
                                                },
                                                {
                                                    value: "HND",
                                                    label: "HND",
                                                },
                                            ]}
                                            errors={errors}
                                        />

                                        <TextInput
                                            label="Course of Study"
                                            name="course"
                                            register={register}
                                            errors={errors}
                                            type="text"
                                        />

                                        <TextInput
                                            label=" Matric Number"
                                            name="matric"
                                            register={register}
                                            errors={errors}
                                            type="text"
                                        />
                                    </section>
                                )}
                                {formStep >= 2 && (
                                    //third section of sign up
                                    <section
                                        className={
                                            formStep === 2 ? "block" : "hidden"
                                        }
                                    >
                                        {/* Batch, and password fields */}
                                        <SelectInput
                                            label="Batch"
                                            name="Batch"
                                            register={register}
                                            options={[
                                                {
                                                    value: "23 A Stream 1",
                                                    label: "23 A Stream 1",
                                                },
                                                {
                                                    value: "23 A Stream 2",
                                                    label: "23 A Stream 2",
                                                },
                                            ]}
                                            errors={errors}
                                        />
                                        <div className="flex flex-col gap-y-3 mt-2">
                                            <InputField
                                                label="Password"
                                                register={register}
                                                errors={errors}
                                                name="Password"
                                                type="password"
                                                validation={{
                                                    required:
                                                        "Password is required",
                                                    pattern: {
                                                        value: PWD_REGEX,
                                                        message:
                                                            "Invalid password. Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be 8-24 characters long.",
                                                    },
                                                }}
                                            />
                                            <InputField
                                                label="Confirm Password"
                                                register={register}
                                                errors={errors}
                                                name="confirmPassword"
                                                type="password"
                                                validation={{
                                                    required:
                                                        "Confirm Password is required",
                                                    validate: (value) =>
                                                        value === Password ||
                                                        "Passwords do not match",
                                                }}
                                            />
                                        </div>
                                    </section>
                                )}

                                <div className="w-full flex justify-between items-center">
                                    {renderButton()}

                                    <div className="flex flex-col items-center justify-center mt-3">
                                        <Link to={"/login"}>
                                            <span className="hover:underline cursor-pointer text-[15px] font-Roboto font-normal">
                                                Sign-in
                                            </span>
                                        </Link>

                                        <HiOutlineArrowNarrowRight className="h-5 w-5" />
                                    </div>
                                </div>
                            </form>
                            <ToastMsg />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

//select input passing props
const SelectInput = ({ label, name, register, options, errors }) => (
    <div className="p-2 md:w-[100%]">
        <label
            className="font-Belanosima font-normal text-[16px]"
            htmlFor={name}
        >
            {label}
            <span className="text-red-700 self-center">*</span>
        </label>
        <select
            className="mt-1 rounded-md appearance-none w-full bg-white border px-4 py-2 pr-8 font-normal outline-none"
            name={name}
            id={name}
            {...register(name, { required: true })}
        >
            <option value="">Select an Option...</option>
            {options.map((option, index) => (
                <option
                    key={index}
                    value={option.value}
                    className="cursor-pointer px-7 mb-3"
                >
                    {option.label}
                </option>
            ))}
        </select>
        {errors[name] && (
            <p className="italic text-[10px] font-semibold text-red-500 mt-1">
                {label} is Required.
            </p>
        )}
    </div>
)

// text input passing props
const TextInput = ({ label, name, register, errors, type }) => (
    <div className="p-2">
        <label
            className="font-Belanosima font-normal text-[16px]"
            htmlFor={name}
        >
            {label}
            <span className="text-red-700 self-center">*</span>
        </label>
        <input
            className="input"
            type={type}
            {...register(name, { required: true })}
        />
        {errors[name] && (
            <p className="italic text-[10px] font-semibold text-red-500 mt-1">
                {label} is Required.
            </p>
        )}
    </div>
)

export default SignUpPage
