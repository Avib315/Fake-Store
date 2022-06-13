import Style from './loading.module.css'

export default function Loading(){
    return (
        <>
        <div className={Style.Loading}>
            <p className={Style.LoadingTitle}>Loading</p>
        <div className={Style.weel}></div>
        </div>
        </>
    )
}