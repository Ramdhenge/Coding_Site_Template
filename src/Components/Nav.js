import { NavLink } from "react-router-dom"

const Nav = () => {

    const logo = "CodeWithUs ... "
    const lg1 = "<"
    const lg2 = " />"
    return (
        <>
            <div className="nav">
                <div className="left">
                <span>{lg1}</span><h2>{logo}</h2><span>{lg2}</span>
                </div>
                <div className="right">

                    <ul>
                        <li><NavLink activeClassName="active" to='/' >Home</NavLink></li>
                        <li><NavLink activeClassName="active" to='/services'>Services</NavLink></li>
                        <li><NavLink activeClassName="active" to='/about'>About</NavLink></li>
                        <li><NavLink to='/contact'>Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Nav