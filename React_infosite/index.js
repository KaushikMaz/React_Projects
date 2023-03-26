import React from "react"
import ReactDOM from "react-dom/client"

const Header=()=>{
    return(
        <>
            <nav className="nav">
                <img src="/images/react-logo.png"/>
                <ul>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </>
        
)}
ReactDOM.render(<Header/>, document.getElementById("root"))