import { PlusCircle, Trash } from "phosphor-react"
import React, { useState } from "react"
import { useEffect } from "react"
import { Input } from "../../../components/input"
import { WishListItem } from "../../../components/wish-list-item"
import { WishListItemNew } from "../../../components/wish-list-item-new"
import { request } from "../../../request"
import "./main-container.scss"

export const MainContainer = () => {
    const [items, setItems] = useState<any[]>([])

    const updateItems = (newItems: any[]) => {
        setItems(newItems)
    }

    useEffect(() => {
        request("/list", {
            method: "GET"
        }).then((response) => {
            if (response.status === 200) {
                updateItems(response.data)
            }
        })
    }, [])

    return (
        <div className="container">
            <h1>Make your choice, friend!</h1>
            <div className="container__list">
                <div className="container__list-items">
                    {items.map((item) => {
                        return <WishListItem key={item.id} updateItems={updateItems} name={item.name} isActive={item.isActive} id={item.id} />
                    })}
                </div>
                <WishListItemNew updateItems={updateItems} />
            </div>







        </div>
    )
}