import React from "react"
import { Header } from "../../components/Header"
import { FirstSection } from "./FirstSection"
import { Footer } from "../../components/Footer"
import { SecondSection } from "./SeconSection"
import { Guidlines } from "./Guidlines"
import { ImportantInfo } from "./ImportantInfoSection"

function LandingPage() {
    return (
        <div className="">
            <Header />
            <div className="layout">
                <FirstSection />
                <SecondSection />
                <Guidlines />
                <ImportantInfo />
            </div>
            <Footer />
        </div>
    )
}

export default LandingPage
