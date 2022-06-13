import Style from './buyButton.module.css'

export default function BuyButton(props) {
    return (
        <div className={Style.buttonDiv}>
            <button className={Style.buyButton} onClick={(e) => { e.preventDefault();props.addToCart(props.item) }}>add to cart</button>
        </div>
    )
}
