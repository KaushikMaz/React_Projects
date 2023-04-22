import React from "react";
import Airbnb_logo from "../../images/airbnb-logo.png";

export default function Navbar(){
    return(
        <nav>
            <img src={Airbnb_logo} alt="AirBNB logo" class="nav-logo"/>
        </nav>
    )

}