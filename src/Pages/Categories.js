import axios from 'axios'
import { useState, useEffect } from 'react'
import Category from '../Compunets/Catrgory'
import Loading from '../Compunets/Loading'
import Style from './categories.module.css'
export default function Categories(){
    const [category,satCategory] = useState()
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products/categories')
        .then((res)=>satCategory(res.data))
    },[])
  
return ( 
    category ?
    <>
    <div className={Style.noOpc}>
    <h2 className={Style.titleCat}>categories: </h2>
    <div className={Style.box}>
{category.map(v=> {return <Category categoryName={v} key={v}/>})}
    </div>
    </div>
    </> :
 <Loading />
)
}