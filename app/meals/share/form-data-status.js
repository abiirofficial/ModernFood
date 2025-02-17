
'use client'
import { useFormStatus } from 'react-dom'
import classes from './page.module.css'
export default function FormStatus(){
    const {pending} = useFormStatus()
    return(
        <>
            <p className={classes.actions}>
                {pending ? <button disabled type="submit">Submitting........</button> : <button type="submit">Share Meal</button>}
            </p>
        </>
    )
}