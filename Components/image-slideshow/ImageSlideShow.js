// <!DOCTYPE html>
// <html>
// <body>

// <h1>The Window Object</h1>
// <h2>The setInterval() Method</h2>

// <img id="demo">

// <script>
// const element = document.getElementById("demo");
// const ab = [{src:'https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?semt=ais_hybrid'}, {src: 'https://img.freepik.com/premium-photo/raindrop-dry-leaf-generative-ai_225446-6059.jpg'},{src: 'https://img.freepik.com/free-photo/vibrant-autumn-maple-leaves-nature-beauty-showcased-generated-by-ai_188544-15039.jpg?ga=GA1.1.518818386.1733946534&semt=ais_hybrid'}]
// let a = 0
// function num(){
// if(ab.length > a){
// element.src = ab[a].src
// a++
// }
// else if(ab.length == a){
// a=0;
// console.log(ab[a])
// }
// }
// setInterval(()=> num(), 500)
// </script>

// </body>
// </html>

'use client'
import Image from 'next/image';

import burgerImg from '@/assets/burger.jpg';
import curryImg from '@/assets/curry.jpg';
import dumplingsImg from '@/assets/dumplings.jpg';
import macncheeseImg from '@/assets/macncheese.jpg';
import pizzaImg from '@/assets/pizza.jpg';
import schnitzelImg from '@/assets/schnitzel.jpg';
import tomatoSaladImg from '@/assets/tomato-salad.jpg';
import classes from './imageSlideShow.module.css'
import { useEffect, useState } from 'react';




export default function ImageSlideShow(){
  const images = [
    { image: burgerImg, alt: 'A delicious, juicy burger' },
    { image: curryImg, alt: 'A delicious, spicy curry' },
    { image: dumplingsImg, alt: 'Steamed dumplings' },
    { image: macncheeseImg, alt: 'Mac and cheese' },
    { image: pizzaImg, alt: 'A delicious pizza' },
    { image: schnitzelImg, alt: 'A delicious schnitzel' },
    { image: tomatoSaladImg, alt: 'A delicious tomato salad' },
  ];

  console.log(images[0])

  const [value, setValue] = useState(images[0].image)

  useEffect(()=>{
    let number = 0
    function ImageShow(){
      if(images.length > number){
        setValue(images[number].image)
        ++number
        }
      else if(images.length == number){
        number = 0
      }
    }
    setInterval(()=> ImageShow(), 2000)
  }, [])
  
    return(
        <>
        {/* <div className={classes.slideshow}>
            {images.map((item, index)=> <Image key={index} className={index === value ? classes.active : ''} src={item.image} width={item.image.width} height={item.image.height}/>)}
        </div> */}
        <Image className={classes.imageSliderInfo} src={value} alt={value} priority/>
        </>
    )
}
