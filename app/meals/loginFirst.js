'use client'

import Link from "next/link";
import Index from "../store";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function LoginFirst(){
    const login = useSelector((states)=> states.login.flag)
    return(
        <>
        <Index>
            {<Link href={login ? `/meals/share` : `/login`}>
                Share your Favourite Recipe
            </Link>}
        </Index>
        </>
    )
}