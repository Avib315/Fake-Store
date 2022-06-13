import Style from './header.module.css'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
export default function Header() {
    return (
        <div className={Style.HeaderDiv} >

            <div className={Style.homeLink}>
                <Link to={'/'}>
                    <h1 className={Style.title}>Store</h1>
                </Link>
            </div >
<div className={Style.userDiv}> 

            <div className={Style.logInLink}>
                <Link to={'/login'}>
                    <h2 className={Style.logTitle}>log in</h2>
                </Link>
            </div>
            <div className={Style.registerDiv}>
                <Link to={'/registr'}>
                    <h2 className={Style.registerTitle}>registr</h2>
                </Link>
            </div>
</div>
            
        </div>
    )
}