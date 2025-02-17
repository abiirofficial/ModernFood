'use server'

import { redirect } from "next/navigation"
import { insertData, userDbServer, userLoginDB } from "./meals"
import { revalidatePath } from "next/cache";

export async function serverActionsForm(prevState, formData){

  function inValidData(text){
    return !text || text.trim() == '';
  }

    const meal = {
      title: formData.get('title'),
      creator_email: formData.get('email'),
      summary: formData.get('summary'),
      instructions: formData.get('instructions'),
      image: formData.get('image'),
      creator: formData.get('name')
    }
    if(
      inValidData(meal.title)|| 
      inValidData(meal.creator_email)||
      inValidData(meal.summary)||
      inValidData(meal.instructions)||
      inValidData(meal.creator)||
      !meal.image||
      meal.image.size === 0||
      !meal.creator_email.includes('@')||
      meal.title.length < 10
  ){
    // throw new Error('Invalid Meals')
    return {
      message: 'Invalid Meals'
    }
    }
    await insertData(meal);
    revalidatePath('/meals')
    redirect('/meals');
  }

  export async function userServer(formData){
    const user = {
      username: formData.get('name'),
      password: formData.get('password'),
      email: formData.get('email'),
      age: formData.get('age'),
      image: formData.get('image'),
      address: formData.get('address')
    }
    userDbServer(user)
    redirect('./login')
  }

  export async function LoginSubmit(prevState, formData) {
    function inValidData(text){
      return !text || text.trim() == '';
    }
    const user = {
      email : formData.get('email'),
      password: formData.get('password')
    }
    if(inValidData(user.email)|| !user.email.includes('@')){
      return{message: 'User Invalid'}
    }
    userLoginDB(user)
    
    if(userLoginDB){
      return{message: 'User Invalid'}
    }
    else{
      return {message: true}
    }
  }