import React, { useState } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { Button } from "../../components/button"
import { Header } from "../../components/header"
import { Input } from "../../components/input"
import { request } from "../../request"
import "./login.scss"

export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()



    const emailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const passwordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const handleClick = () => {
        toast.promise(
            request("/login", {
                method: "POST",
                data: {
                    email: email,
                    password: password
                }
            }),
            {
                success: {
                    render: (toastProps: any) => {
                        const { data } = toastProps;
                        if (data.status === 200) {
                            const { token } = data.data;
                            localStorage.setItem('token', token)
                            navigate("/main")
                            return 'Welcome!'
                        }
                    }
                },
                error: {
                    render: () => {
                        return 'Check your data!!!111!!!'
                    }
                },
                pending: {
                    render: () => {
                        return "LOADING....."
                    }
                }
            }
        )
    }

    return (
        <div className="login-page">
            <Header />
            <div className="login-page__container">
                <h1>Hello, Friend!</h1>
                <p>Here you can SIGN IN</p>
                <div className="login-page__inputs">
                    <Input onChange={emailChange} type="email" label="Email" placeholder="Email" />
                    <Input onChange={passwordChange} type="password" label="Password" placeholder="Password" />
                </div>
                <div className="login-page__button">
                    <Button onClick={handleClick} />

                </div>
            </div>


        </div>
    )
}