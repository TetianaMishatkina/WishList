import { PlusCircle } from "phosphor-react"
import React from "react"
import { useState } from "react"
import { request } from "../../request"
import { Input } from "../input"
import "./wish-list-item-new.scss"

type WishListItemNewProps = {
    updateItems: (items: any[]) => void
}

export const WishListItemNew = ({ updateItems }: WishListItemNewProps) => {

    const [item, setItem] = useState("")

    const itemChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setItem(event.target.value)
    }
    const handleClick = () => {
        request("/list", {
            method: "POST",
            data: {
                name: item
            }
        }).then((response) => {
            if (response.status === 200) {
                updateItems(response.data)
                setItem("")
            }
        })
    }

    return (
        <form className="wish-list-item-new">
            <Input onChange={itemChange} value={item} />
            <button className="wish-list-item-new__button" type="submit" onClick={handleClick}>
                <PlusCircle size={30} weight="light" />
            </button>
        </form>
    )
}