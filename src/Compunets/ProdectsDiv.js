import { Link } from "react-router-dom"
import BuyInCart from "./BuyInCart"
import Style from './ProdectsDiv.module.css'
export default function ProdectsDiv(props){
    
    return (
        <>
                <Link to={'/item/' + props.id}>
                <div className={Style.ProdectsDiv}>
                    <img src={props.img}  className = {Style.pic}/>
                    <div>
                        <h3>{props.title}  </h3>
                    <h4>price :<span className={Style.priceSpan}>  {props.price}$ </span> </h4>    
                    </div>
                </div>
            </Link>
        </>
    )
}