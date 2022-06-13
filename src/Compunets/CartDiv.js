import BuyInCart from './BuyInCart'
import Style from './CartDiv.module.css'

export default function(props){
    return (
        <>
        <div className={Style.cartDivBox}>
            <div className={Style.cartPicBtnDiv}>
                <img className={Style.pic} src={props.image} />
                <BuyInCart inCart={props.inCart} addToCart={props.addToCart} item={props.item} removeFromCart={props.removeFromCart}/>
            </div>
            <div className={Style.cartUlDiv}>
            <ul className={Style.ulCart}>
                <li className={Style.cartLi}><h4> {props.title} </h4></li>
                <li className={Style.cartLi}>price: <span className={Style.priceSpan}> {props.price} $ </span></li>
                <li className={Style.cartLi}></li>
            
            </ul>
            </div>
        </div>
        </>
    )
}