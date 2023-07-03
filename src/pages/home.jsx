import Search from "../components/Search"
import Book from "../components/book"
import style from "../styeles/home.module.css"

const Home = () =>{

    return (
        <div >
            <Search placeholder="search a book by name"/>
            <div className={style.container_books}>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            </div>
            
        </div>
    )
}

export default Home