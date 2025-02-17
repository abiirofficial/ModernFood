'use client'

import { useRef, useState } from 'react'
import classes from './image.module.css'
import Image from 'next/image'
import userImage from './user.jpg'

export default function UserImage({name, label}){
    const [value, setValue] = useState(userImage)
    const inputRef = useRef()
    function handleImageFile(event){
        const imagePicker = event.target.files[0]
        const reader = new FileReader
        reader.readAsDataURL(imagePicker)
        reader.onload = ()=>{
            setValue(reader.result)
        }
    }
    function handleImage(){
        inputRef.current.click()
    }
    return(
        <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
            <div className={classes.preview}>
                {!value && <Image src={value} alt='The image selected by the users.' fill />}
                {value && <Image src={value} alt='The image selected by the users.' fill />}
            </div>
            <input ref={inputRef} onChange={handleImageFile} className={classes.input} type='file' id='image' accept='image/png, image/jpeg' name={name}/>
        </div>
        <button onClick={handleImage} className={classes.button} type='button'>Upload a image</button>
    </div>
    )
}