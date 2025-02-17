
import Link from 'next/link'
import classes from './page.module.css'
import { useFormState } from 'react-dom'
import { LoginSubmit } from '../library/actions'
import { useDispatch } from 'react-redux'
import { loginFlag } from '../store/login-slice'
import { useRef } from 'react'
export default function LoginPanel(){
  const [loginStatus, formAction] = useFormState(LoginSubmit, {message: null})
  const email = useRef()
  const password = useRef()
    return(
        <>
            <main className={classes.main}>
                <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" required ref={email}/>
            </p>
            <p>
              <label htmlFor="password">Your Password</label>
              <input type="password" id="password" name="password" required ref={password}/>
            </p>
            {loginStatus && loginStatus.message != null && <p>{loginStatus.message}</p>}
            <p>Dont have an Account? Then Go for signup your self and upload & enjoy the meals</p>
            <div style={{display: 'flex', gap: '8px'}}>
            <p className={classes.actions}>
            <button type="submit">LOGIN</button>
            </p>
            <p className={classes.actions}>
              <Link href='/signup'><button>SIGNUP</button></Link>
            </p>
            </div>
          </div>
          </form>
          </main>
        </>
    )
}