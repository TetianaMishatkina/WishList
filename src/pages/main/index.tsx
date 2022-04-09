import React from "react"
import { Header } from "../../components/header"
import { MainContainer } from "./main-container"
import "./main.scss"

export const Main = () => {
    return (
        <div className="main">
            <Header />
            <MainContainer />
        </div>
    )
}