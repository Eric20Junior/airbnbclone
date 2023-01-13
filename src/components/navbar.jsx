import React from "react";


export default class Navbar extends React.Component {
    render() {
        return (
                <div className="main-nav">
                    <img src={process.env.PUBLIC_URL + "/Images/airbnb.png"} alt="airbnb" className="logo"/>
                </div>
        )
    }
}