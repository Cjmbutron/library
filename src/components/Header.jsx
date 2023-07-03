import logo from "../img/logo.png" 
import style from "../styeles/Header.module.css"
 
 const Header =()=>{
    return (
        <header>
            <img src={logo} alt="company logo" />
            <div className={style.header_menu}>
                <a href="#">
                <li>add new book</li></a>
                <a href="#">
                <li>book report</li></a>
                <a href="#">
                <li>add student</li></a>
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