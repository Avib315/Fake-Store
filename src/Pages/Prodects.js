import axios from 'axios'
import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import ProdectsDiv from '../Compunets/ProdectsDiv'
import Style from './prodects.module.css'
import Loading from '../Compunets/Loading'
export default function Prodects(props){
    const parm = useParams().name
    const [prodects,satProdects] = useState()
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products/category/' + parm)
        .then((res)=>satProdects(res.data))
    },[])
    
return ( 
    prodects ?
    <>
    <div className={Style.prodects}>
    <h2 className={Style.titlePro}>{parm}: </h2>
    <div className={Style.box}>
    {prodects.map(value => {
        return  <ProdectsDiv img= {value.image} title={value.title} price ={value.price} id={value.id} key ={value.id} addToCart={props.addToCart}  removeFromCart={props.removeFromCart} item={value} inCart={props.cartArr.find(v=>v.id == value.id)} />
    })}
      </div>
    </div>
    </>
    : <Loading />
)
}