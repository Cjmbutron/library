import {AiOutlineSearch} from "react-icons/ai"

import style from "../styeles/Search.module.css"



const Search=({placeholder})=>{
    return (
        <div className={style.container}>
        <AiOutlineSearch size="30px"/>
        <input itemScope={Search} type="text" placeholder={placeholder}/>
        </div>
    )
}
export default Search
