import Style from './cartSum.module.css'
export default function CartSum(props){
    return (
        <>
        <div className={Style.divSum}>
            <h3>In Cart:<span> {props.sum} $ </span> </h3>
        </div>
        </>
    )
}