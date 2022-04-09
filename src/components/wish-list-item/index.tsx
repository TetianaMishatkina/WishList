import { CheckCircle, MinusCircle, Trash } from "phosphor-react"
import { useState } from "react"
import { request } from "../../request"
import { Input } from "../input"
import "./wish-list-item.scss"

type Props = {
    name: string,
    isActive: boolean,
    id: number,
    updateItems: (items: any[]) => void
}

export const WishListItem = ({ name, isActive, id, updateItems }: Props) => {

    const deleteClick = () => {
        request("/list", {
            method: "DELETE",
            data: {
                id: id
            }

        }).then((response) => {
            updateItems(response.data)
        })


    }
    const checkClick = () => {
        request(`/list/${id}`, {
            method: "PUT"
        }).then((response) => {
            updateItems(response.data)

        })
    }

    return (
        <div className="wish-list-item">
            <div className={`wish-list-item__input ${isActive ? 'active' : ''}`}>
                <Input value={name} disabled />
            </div>

            <div className="wish-list-item__icons">
                <CheckCircle onClick={checkClick} size={30} weight="light" />
                <Trash onClick={deleteClick} size={30} weight="light" />
            </div>
        </div>
    )
}