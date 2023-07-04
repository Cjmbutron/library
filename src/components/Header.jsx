import logo from "../img/logo.png" 
import style from "../styeles/Header.module.css"
import { Link } from "react-router-dom"
 
 const Header =()=>{
    return (
        <header>
            <Link to="/">
            <img  src={logo} alt="company logo" />
            </Link>
            <div className={style.header_menu}>
                <Link to="/add">
                <li>add new book</li>
                </Link>
                <a href="#">
                <li>book report</li></a>
                <Link to="/add">
                <li>add student</li>
                </Link>
                <a href="#">
                <li>student report</li></a>
                <a href="#">
                <li>penality</li></a>
                <a href="#">
                <li>book return</li></a>
            </div>
        </header>
    )
 }
 export default Header