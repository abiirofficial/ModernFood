import { getMeal } from '@/app/library/meals'
import classes from './page.module.css'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export async function generateMetadata({params}){
    const meals = getMeal(params.mealsSlug)
    return{
        title: meals.title,
        description: meals.summary
    }
}

export default async function MealsSlug({params}){
    const mealItem = await getMeal(params.mealsSlug)
    if(!mealItem){
        notFound();
    }
    console.log(mealItem)
    mealItem.instructions = mealItem.instructions.replace(/\n/g, '<br />')
    return(
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image src={mealItem.image} alt={mealItem.title} fill />
                </div>
                <div className={classes.headerText}>
                    <h1>{mealItem.title}</h1>
                    <p className={classes.creator}>
                        by <a href={`mailto:${mealItem.creator_email}`}>{mealItem.creator}</a>
                    </p>
                    <p className={classes.summary}>{mealItem.summary}</p>
                </div>
            </header>
            <main>
                <p className={classes.instructions} dangerouslySetInnerHTML={{__html: mealItem.instructions}}></p>
            </main>
        </>

    )
}