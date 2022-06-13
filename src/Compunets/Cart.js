import Style from './cart.module.css'
import CartDiv from './CartDiv'
import CartSum from './CartSum'
export default function Cart(props){
    return (
        <>
        <div className={Style.CartDiv}>
<h2 className={Style.CartTitle}>Cart:</h2>
<div>
    {props.cartArr.map(v=>{
        return <CartDiv id={v.id} key={v.id} image={v.image} price={v.price} title={v.title} inCart = {v.inCart} item = {v} addToCart={props.addToCart} removeFromCart={props.removeFromCart}/>
    })}
</div>
<CartSum sum={props.sum}/>
        </div>
        </>
    )
}