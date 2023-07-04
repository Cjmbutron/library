import { Route } from "react-router-dom"
import AddBook from "../components/addbook"
import AddStudent from "../components/addstudent"
import { Children, useState } from "react"
import style from "../styeles/Add.module.css"

const Add =()=>{
    const [button, setButton]=useState(true)
       /*global someFunction, boton*/
    /*eslint no-undef: "error"*/
    return(
        <div >
            <button name="boton" onClick={e=>{setButton(!button)}} className={style.button} >
            {
                !button ? "Add book" : "Add student"
            }
            </button>
            {
                !button ? <AddBook/>: <AddStudent/>
            }

             
        </div>
       
    )
}

export default Add