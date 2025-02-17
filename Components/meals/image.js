'use client'

import { useRef, useState } from 'react'
import classes from './image.module.css'
import Image from 'next/image'

export default function ImageContent({label, name}){
    const [value, setValue] = useState(null)
    const inputRef = useRef()
    function handleImage(){
        inputRef.current.click();
    }
    function handleImageFile(e){
        const file = e.target.files[0]
        const reader = new FileReader
        reader.readAsDataURL(file)
        reader.onload = ()=>{
            console.log(typeof(reader.result))
            setValue(reader.result)
        }
    }
    return(
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!value && <p>No image picked</p>}
                    {value && <Image src={value} alt='The image selected by the users.' fill />}
                </div>
                <input ref={inputRef} onChange={handleImageFile} className={classes.input} type='file' id='image' accept='image/png, image/jpeg' name={name}/>
            </div>
            <button onClick={handleImage} className={classes.button} type='button'>Upload a image</button>
        </div>
    )
}