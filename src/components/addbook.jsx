import React, { useState } from "react"
import {BsFillArrowLeftSquareFill} from "react-icons/bs"
import styles from '../styeles/Add.module.css'
import coverbook from "../img/bookcover.jpg"
import { Link } from "react-router-dom"


const AddBook=()=>{
    const [book, setBook]=useState('')
    const [auther, setAuther]=useState('')
    const [publication, setPublication]=useState('')
    const [price, setPrice]=useState('')
    const [quantity, setQuantity]=useState('')

    const newBook={
        title:book,
        auther:auther,
        year:publication,
        price:price,
        quantity:quantity,
    }

    /*global someFunction, imgcover*/
    /*eslint no-undef: "error"*/

    return (
        <div className={styles.container} >
            <input type="text" name="Bookname" placeholder="Book name" className={styles.container_input} 
            onChange={e=>setBook(e.target.value)}/>
            
            <input type="text" name="Auther name" placeholder="Auther name"className={styles.container_input} 
            onChange={e=>setAuther(e.target.value)} />
            <input type="text" name="Publication" placeholder="Publication"className={styles.container_input} 
            onChange={e=>setPublication(e.target.value)}/>
            <input type="text" name="Price" placeholder="Price" className={styles.container_input} 
            onChange={e=>setPrice(e.target.value)}/>
            <input type="text" name="Quantity" placeholder="Quantity" className={styles.container_input} 
            onChange={e=>setQuantity(e.target.value)} />
            
            {/* section dor to add a cover of books, using reader onload */}
            <img 
                            id="imgcover" 
                            name="imgcover" 
                            src={coverbook} 
                            alt="coverbook" 
                            className={styles.container_cover}
                          />
        
            <input type="file" name="bookcover" placeholder="Add image of the book"
            title="cargar imagen"
            accept="image/*"
            id="loadimagen"
            onChange={e=>{if((e.target.files[0]))
                    {   const reader = new FileReader()
                        reader.onload = function (event){
                            
                          console.log(event.target.result)
                         imgcover.src= event.target.result

                        }
                    reader.readAsDataURL(e.target.files[0])
            }else{
                imgcover.src= coverbook
            }   
            }}
            className={styles.container_img}
            />
            <label for="loadimagen" className={styles.label} >Cargar imagen</label>
            <div className={styles.div_buttons} >
            <Link to="/"> <BsFillArrowLeftSquareFill color="var(--fondo)" size="30px"/> </Link>
            <button className={styles.button} onClick={e=>{console.log(newBook)}}> Add</button>
            </div>
        </div>
    )
}
export default AddBook 