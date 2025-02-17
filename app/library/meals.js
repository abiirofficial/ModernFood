import sql from 'better-sqlite3'
const db = sql('meals.db')
import slugify from 'slugify'
import xss from 'xss'
import fs from 'node:fs'
import { redirect } from "next/navigation"
import { useDispatch } from 'react-redux'

export async function getMeals(){
    await new Promise((resolve)=> setTimeout(resolve, 1000))
    //throw new Error('Loading error')
    return db.prepare(`select * from meals`).all()
}

export function getMeal(slug) {
    //await new Promise((resolve)=> setTimeout(resolve, 1000))
    return db.prepare(`select * from meals where SLUG = ?`).get(slug)
}

export async function insertData(meal){
    meal.slug = slugify(meal.title, {lower: true})
    meal.instructions = xss(meal.instructions)

    const extension = meal.image.name.split('.').pop();
    const fileName = `${meal.slug}.${extension}`;

    const stream = fs.createWriteStream(`public/images/${fileName}`)
    const bufferedImage = await meal.image.arrayBuffer()
    stream.write(Buffer.from(bufferedImage), (err)=>{
        if(err){
            throw new Error('Saving Image Failed')
        }
    });

    meal.image = `/images/${fileName}`
    db.prepare(`INSERT INTO meals (title, slug, creator_email, summary, instructions, image, creator) VALUES
        ( @title,
         @slug,
         @creator_email,
         @summary,
         @instructions,
         @image,
         @creator)
        `).run(meal)
}

export async function userDbServer(user){
    let today = new Date();
    user.age = today.getFullYear() - user.age.split('-')[0]
    console.log(user)
    const image = user.image.name.split('.').pop();
    const extension = `${user.username}.${image}`
    
    const stream = fs.createWriteStream(`public/users/${extension}`)
    const imageArrayBuffer = await user.image.arrayBuffer()
    stream.write(Buffer.from(imageArrayBuffer), (err)=>{
        if(err){
            throw new Error('Failed Upload')
        }
    })
    user.image = `/users/${extension}`
    db.prepare(`insert into users(username, password, image, age, address, email) values (@username, @password, @image, @age, @address, @email)`).run(user);
}

export function userLoginDB(user){
    const value =  db.prepare(`select * from users where email = ? and password = ?`).get(user.email, user.password)
    if(value){
        redirect('/meals/share')
    }
    return{
        messege: 'User Invalid'
    }
}