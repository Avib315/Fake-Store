import { Link } from "react-router-dom"
import BuyButton from "./BuyButton";
import BuyInCart from "./BuyInCart"
import Style from './ProdectsDiv.module.css'
export default function ProdectsDiv(props){
    const inCart = props.inCart ? props.inCart.inCart : 0
    console.log(inCart);
    return (
        <>
                <Link to={'/item/' + props.id}>
                <div className={Style.ProdectsDiv}>
                    <img src={props.img}  className = {Style.pic}/>
                    <div>
                        <h3>{props.title}  </h3>
                 {inCart > 0 ?  <BuyInCart inCart={inCart} item={props.item} addToCart={props.addToCart} removeFromCart={props.removeFromCart}/> : <BuyButton item={props.item} addToCart={props.addToCart}/>}  
                    <h4>price :<span className={Style.priceSpan}>  {props.price}$ </span> </h4>    
                    </div>
                </div>
            </Link>
        </>
    )
}