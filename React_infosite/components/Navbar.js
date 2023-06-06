import logo from "/images/react-logo.png"

const Navbar=()=>{
    return(
        <nav>
            <img src={logo} alt= "React Logo" className="logo"/>
            <h3 className="logoText">React Facts</h3>
            <h4 className="navTitle"> React Basic Project</h4>
        </nav>
    )

} 

export default Navbar;