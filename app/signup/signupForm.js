
'use client'
import { useState } from 'react'
import { userServer } from '../library/actions'
import UserImage from './image'
import classes from './signupForm.module.css'

export default function SignupForm(){

  const [age, setAge] = useState(null)

// function targetAge(e){
//   console.log(e.target.value)
//   let today = new Date();
//   const age = today.getFullYear() - e.target.value.split('-')[0]
//   setAge(e.target.value)
// }

    return(
        <>
        <main className={classes.main}>
        <form className={classes.form} action={userServer}>
            <div className={classes.row}>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="name" required />
        </p>
        <p>
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" name="email" required />
        </p>
        <p>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" name="password" required />
        </p>
        <p>
          <label htmlFor="age">Date of Birth</label>
          <input type="date" id="age" name="age" value={age} required />
        </p>
        <p>
          <label htmlFor="address">Your Address</label>
          <input type="text" id="address" name="address" required />
        </p>
        <div>
            <UserImage name='image' label='Your Image'/>
        </div>
        <p className={classes.actions}>
        <button type="submit">Signup</button>
        </p>
      </div>
      </form>
      </main>
    </>
    )
}