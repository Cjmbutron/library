import {BsFillBookmarkFill} from "react-icons/bs"
import {AiOutlineStar,AiFillHeart } from "react-icons/ai"
import portada from "../img/meditaciones.jpeg"
import style from "../styeles/Book.module.css"
import { useState } from "react"


const Book =()=>{

    return(
        <div className={style.container}>
            <img src={portada} alt="portada de los libros" />
            <div className={style.container_foter} >
            <BsFillBookmarkFill color="var(--color2)"  size="20px"  />
            
            <AiOutlineStar color="red" size="25px"/>
            </div>
        </div>
    )
}
export default Book