import { useState,useRef,useContext } from 'react';
import CartContext from '../../Store/cart-context';
import classes from './AuthForm.module.css';
import { useHistory } from 'react-router-dom';
const AuthForm = () => {
  const [islogin, setIslogin] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const authCtx = useContext(CartContext)
   console.log('this is authform',authCtx.isLoggedIn)
  
 
   const shiftButtonHandler = () => {
  setIslogin(prevState => !prevState)
 }

 const history = useHistory();


  const sendRequest = async (operationName,payLoad) => {
     const targetUrl = `https://identitytoolkit.googleapis.com/v1/accounts:${operationName}?key=AIzaSyD_Dsk7UAL5_CV_7SiocBjx4amgkl91rVM`

     try {
      const res = await fetch(targetUrl,{
        method:'POST',
        body:JSON.stringify(payLoad),
        headers:{
          'Content-Type':'application/json'
        }
      })
        setIsLoading(false)
        if(res.ok) {
          const data = await res.json()
          authCtx.login(data.idToken)
          history.replace('/Store');
        }else {
            const {error} = await res.json() 
            let Errormessage = 'Authentication failed';
            if(error && error.message) {
              Errormessage = error.message
            }
            throw new Error(Errormessage)
         
        }
     } catch(err) {
      alert(err.message)
     }
  }


  const submitHandler = (event) => {
    event.preventDefault()
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    authCtx.emailAdd(enteredEmail)
    console.log('entered email',enteredEmail)
    const payLoad = {
      email:enteredEmail,
      password:enteredPassword,
      returnSecureToken:true
    }

    if(islogin) {
      sendRequest('signInWithPassword',payLoad)
    }else {
      sendRequest('signUp',payLoad)
    }
  }

  return (
    <div className={classes.form}>
    <section className={classes.auth}>
    <h1>{islogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' ref={emailInputRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' ref={passwordInputRef} required />
        </div>
        <div className={classes.actions}>
        {!isLoading && <button type='sumbit'>{islogin?'login':'Signup'}</button>}
        {isLoading && <p className='text-white'>sending request....</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={shiftButtonHandler}
          >
            {islogin?'create an account':'login with existing account'}
          </button>
        </div>
      </form>
    </section>
    </div>
  );
};

export default AuthForm;