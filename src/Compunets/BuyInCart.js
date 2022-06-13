import Style from './buyInCart.module.css'

export default function BuyInCart(props){
    return (
        <>
        <div className={Style.buyDiv}>
        <button className={Style.addBtn} onClick={(e)=>{e.preventDefault(); props.removeFromCart(props.item)}}>-</button><span className={Style.inCart}> {props.inCart} </span><button className={Style.addBtn} onClick={(e)=>{e.preventDefault();props.addToCart(props.item)}}>+</button>
        </div>
        </>
    )
}