'use client';
import ImageContent from '@/Components/meals/image'
import classes from './page.module.css'
import { serverActionsForm } from '@/app/library/actions'
import FormStatus from './form-data-status'
import { useFormState } from 'react-dom'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loginFlag } from '@/app/store/login-slice';


export default function ShareMeals({children}){
  const [state, formAction] = useFormState(serverActionsForm, {message: null})
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(loginFlag())
  })
    return(
        <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
            <ImageContent label='Your Image' name='image'/>
            {state && <p>{state.message}</p>}
            <FormStatus />
        </form>
      </main>
    </>
    )
}