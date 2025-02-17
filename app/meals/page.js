import Link from "next/link";
import classes from './page.module.css'
import MealGrid from "@/Components/meals/meals-grid";
import { getMeals } from "../library/meals";
import { Suspense } from "react";
import LoginFirst from "./loginFirst";
import Index from "../store";

export const metadata = {
    title: 'Meals',
    description: 'All Meals are loaded.',
  };

async function GetMeals(){
    const meals = await getMeals()
    return <MealGrid meals={meals} />
}

export default function Meals(){

    return(
        <>
        <Index>
        <header className={classes.header}>
                <h1>
                    Delicious Meals, Created{' '}
                    <span className={classes.highlight}>by you</span>
                </h1>
                <p>
                    Choose your favourite recipe and cook it yourself. It is easy and fun!
                </p>
                <p className={classes.cta}>
                    <LoginFirst />
                </p>
            </header>
            <main className={classes.main}>
                <Suspense fallback={<p className={classes.loading}>Loading.....</p>}>
                    <GetMeals />
                </Suspense>
            </main>
        </Index>
        </>
    )
}