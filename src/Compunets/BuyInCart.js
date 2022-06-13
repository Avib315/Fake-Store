import Style from './buyInCart.module.css'

export default function BuyInCart(props){
    return (
        <>
        <div className={Style.buyDiv}>
        <button className={Style.addBtn} onClick={()=>{props.removeFromCart(props.item)}}>-</button><span className={Style.inCart}> {props.inCart} </span><button className={Style.addBtn} onClick={()=>{props.addToCart(props.item)}}>+</button>
        </div>
        </>
    )
}