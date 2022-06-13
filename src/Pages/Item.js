import axios from 'axios'
import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import Style from './item.module.css'
import BuyButton from '../Compunets/BuyButton'
import Loading from '../Compunets/Loading'
export default function Item(props) {
    const parm = useParams().id
    const [item, satItem] = useState()
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/' + parm)
            .then((res) => satItem(res.data))
    }, [])

    return (
        item ?
            <>
                <h2 className={Style.titleItem}>item :</h2>
                <div className={Style.box}>
                    <div className={Style.itemDiv}>
                        <img src={item.image} className={Style.pic} />
                        <h3 className={Style.ItemName}>{item.title} </h3>
                        <BuyButton addToCart={props.addToCart} item={item}/>
                        <h3 className={Style.price}>{item.price}$<span className={Style.priceSpan}></span> </h3>
                        <p>{item.description} </p>
                    </div>


                </div>
            </>
            : <Loading />
    )
}