import React from "react"
import { Gift } from "phosphor-react"
import "./header.scss"

export const Header = () => {
    return (
        <div className="header">

            <h1>Wish List</h1>
            <Gift weight="duotone" size="50" />

        </div>
    )
}