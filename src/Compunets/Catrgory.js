import { Link } from "react-router-dom"
import Style from './category.module.css'
export default function Category(props){
    const id = props.categoryName == `men's clothing` ? 'men' :props.categoryName == `women's clothing` ? 'women' : props.categoryName
    const category = props.categoryName
    return (
        <>
            <Link to={'/prodects/'+category}>
        <div className={Style.NameCat} id={id}>
           <span className={Style.name}> {category}</span> 
        </div>
            </Link>
        </>
    )
}