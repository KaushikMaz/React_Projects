import React from "react"
import trollFace from "../../images/troll-face.png"

export default function Header(){
    return(
        <header>
            <img src={trollFace} className="Header-image"/>
            <h2 className="Header-title">Meme Generator</h2>
            <h4 className="header-text"> A meme way of fun</h4>
        </header>
    )
}