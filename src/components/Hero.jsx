import React, { Component } from "react";


export default class Hero extends Component {
    render() {
        return (
            <div className="container">
                <div className="main-hero flex justify-center ml-4 mt-10">
                <img src={process.env.PUBLIC_URL + "/Images/hero.png"} alt="hero" />
            </div>

            <div className="hero-text pl-10 pt-10">
                <h1 className=" text-3xl font-semibold font-weight: 600;">Online Experiences</h1>
                <p className="font-light font-weight: 300; pt-3">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
            </div>
        )
    }
}