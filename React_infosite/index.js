import React, {createRoot} from "react"
import ReactDOM from "react-dom/client"

const Header=()=>{
    return(
        <>
            <nav className="nav">
                <img src=""/>
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