import React from "react";
import "./Card.css"

export default function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="main-card ml-10 mt-10 ">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <div className="card">
                <img src={`../Images/${props.item.img}`} alt="" />

                <div className="card-stats flex text-xs">
                    <img src={`../Images/Star.png`} alt="" className="w-3 h-3"/>
                    <span className="font-light">{props.item.stats.rating}</span>
                    <span className="font-thin">{props.item.stats.reviewCount}</span>
                    <span className="font-thin">{props.item.location}</span>
                </div>

                <div className="Container mb-6">
                    <h5>{props.item.title}</h5>
                    <h5><span className="font-semibold">From {props.item.price} </span>/ person</h5>
                </div>
            </div>
        </div>
        )
    }

