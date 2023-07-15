import React from "react"
import { Link } from "react-router-dom"

// second section
// verify certificate, payment status Etc...
export function SecondSection() {
    return (
        <div>
            <div className="grid grid-cols-1 sm:gap-x-10 md:grid-cols-3 gap-x-10 gap-5 ">
                <DataOne
                    imageSrc="https://portal.nysc.org.ng/nysc1/img/service-icon/verification.png"
                    title="Verify Certificates"
                    linkText="Discharge, Exclude and Exemption"
                    linkURL="#discharge"
                />

                <DataOne
                    imageSrc="https://portal.nysc.org.ng/nysc1/img/service-icon/paymentstatus.png"
                    title="Payment Status"
                    linkText="To check your Payment Status"
                    linkURL="#payment"
                />

                <DataOne
                    imageSrc="https://portal.nysc.org.ng/nysc1/img/mainsite.png"
                    title="Visit the Main Site"
                    linkText="Visit the Nysc Website for More Information"
                    linkURL="/home"
                />
            </div>
        </div>
    )
}

function DataOne({ imageSrc, title, linkText, linkURL }) {
    return (
        <div className="template">
            <img
                className="w-16 h-16 object-contain mb-3"
                src={imageSrc}
                alt=""
            />
            <h3 className="text_list">{title}</h3>
            <Link to={linkURL}>
                <h4 className="text-blue-500 cursor-pointer sm:text-[15px] hover:underline">
                    {linkText}
                </h4>
            </Link>
        </div>
    )
}
