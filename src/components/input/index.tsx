import React from "react"
import "./input.scss"

type Props = {
    type?: string,
    label?: string,
    placeholder?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    value?: string,
    disabled?: boolean,
}

export const Input = ({ type, label, placeholder, onChange, value, disabled }: Props) => {
    return (
        <div className="input">
            <label>{label}</label>
            <input value={value} disabled={disabled} onChange={onChange} type={type} placeholder={placeholder} />
        </div>
    )
}