import React ,{useState}from 'react'
import { NavLink,withRouter } from 'react-router-dom'

const Navbar = ({history}) => {
    const [show,setShow] = useState(false)
 console.log("history",history);
 const getcolor = (curr) => {
    if(history.location.pathname === curr){
        return "#3498db"
    }
 }
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className='row'>
                    <div className='col-10 max-auto'>


                        <nav className="navbar navbar-expand-md navbar-light fixed-top border-0"  >
                            <div className="container-fluid">
                                <NavLink className="navbar-brand" to="/" >Vibhuti Pioneer India Private Ltd (VPIIPL)</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setShow(!show)}>
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className={`collapse navbar-collapse ${show ? "show" : ""}`} >
                                    <ul className="navbar-nav ml-20 mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink className="nav-link"  aria-current="page" style={{color:'white', backgroundColor:getcolor('/')}} to="/"><i className='fa fa-home' aria-hidden="true" ></i></NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" style={{color:'white' , backgroundColor:getcolor('/about')}} to="/about">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" style={{color:'white' , backgroundColor:getcolor('/service')}} to="/service">Service</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" style={{color:'white' , backgroundColor:getcolor('/teams')}} to="/teams">Teams</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" style={{color:'white' , backgroundColor:getcolor('/contact')}} to="/contact">Contact</NavLink>
                                        </li>
                                       


                                    </ul>

                                </div>
                            </div>
                        </nav>
                    </div>

                </div>

            </div>
        </>
    )
}
export default withRouter(Navbar)
