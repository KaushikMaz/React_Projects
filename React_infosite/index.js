import React, {createRoot} from "react"
import ReactDOM from "react-dom/client"
import logo from "/images/react-logo.png"

const Header=()=>{
     return(
        <>
            <nav className="nav">
                <img src={logo} style={{width:40}}  alt="React Logo"/>
                <ul>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </>
        
)}
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<Header/>)