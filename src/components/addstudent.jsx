import React, { useState } from "react"
import {BsFillArrowLeftSquareFill} from "react-icons/bs"
import styles from '../styeles/Add.module.css'
import coverbook from "../img/bookcover.jpg"
import { Link } from "react-router-dom"


const AddStudent=()=>{
    const [name, setName]=useState('')
    const [standar, setStandar]=useState('')
    const [movile, setMovile]=useState('')
    const [adress, setAdress]=useState('')
    const [pincode, setPincode]=useState('')
    const [city, setCity]=useState('')
    const [idcard, serIdcard]=useState('')


    const newStudent={
        name:name,
        standar:standar,
        movile:movile,
        adress:adress,
        pincode:pincode,
        city:city,
        idcard:idcard
    }

    /*global someFunction, imgcover*/
    /*eslint no-undef: "error"*/

    return (
        <div className={styles.container} >
            <input type="text" name="Student" placeholder="Student name" className={styles.container_input} 
            onChange={e=>setName(e.target.value)}/>
            
            <input type="text" name="standar" placeholder="Standart"className={styles.container_input} 
            onChange={e=>setStandar(e.target.value)} />
            <input type="text" name="movile" placeholder="Movile"className={styles.container_input} 
            onChange={e=>setMovile(e.target.value)}/>
            <input type="text" name="address" placeholder="Address" className={styles.container_input} 
            onChange={e=>setAdress(e.target.value)}/>
            <input type="text" name="pincode" placeholder="Pincode" className={styles.container_input} 
            onChange={e=>setPincode(e.target.value)} />
            <input type="text" name="city" placeholder="City" className={styles.container_input} 
            onChange={e=>setCity(e.target.value)} />
            <input type="text" name="Idcard" placeholder="ID card no." className={styles.container_input} 
            onChange={e=>serIdcard(e.target.value)} />
            
            <div className={styles.div_buttons} >
            <Link to="/"> <BsFillArrowLeftSquareFill color="var(--fondo)" size="30px"/> </Link>
            <button className={styles.button} onClick={e=>{console.log(newStudent)}}> Add</button>
            </div>
        </div>
    )
}
export default AddStudent 