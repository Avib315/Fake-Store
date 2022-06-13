import Style from './login.module.css'

export default function LogIn(){
    return (

        <div className={Style.logInDiv}>

        <h2 className={Style.titleLog}>Log in: </h2>
        <div>
            <form>
<label>email : </label>                
<input type={'email'}  className={Style.logInput}/>
<br />
<label>password : </label>                
<input type={'password'} className={Style.logInput} />
<br />
<br /> 
<input type={'submit'} value={"Enter"} className={Style.enterBtn}/>
            </form>
        </div>
        </div>
    )
}