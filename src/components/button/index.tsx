import React from "react"
import { SignIn } from 'phosphor-react'
import "./button.scss"

type Props = {
    onClick: () => void

}
export const Button = ({ onClick }: Props) => {
    return (
        <div className="button">
            <button onClick={onClick}>LOG IN  <SignIn size={32} weight="light" /></button>

        </div>
    )
}