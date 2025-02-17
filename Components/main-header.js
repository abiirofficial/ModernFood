import Link from "next/link";
import logoImage from '@/assets/logo.png'
import classes from './Main-Header.module.css'
import Image from "next/image";
import MainHeaderBg from "./MainHeaderBg";
import ImageSlideShow from "./image-slideshow/ImageSlideShow";
import classesImage from './image-slideshow/imageSlideShow.module.css'
import NavLink from "./nav-link";

export default function MainHeader(){
    return(
        <>
        <MainHeaderBg />
        <header className={classes.header}>
            <Link className={classes.logo} href='/'>
                <Image src={logoImage} priority alt="Food" />
                Next Level Food
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink href='/meals'>Browse Meals</NavLink>
                    </li>
                    <li>
                        <NavLink href='/community'>Follow Community</NavLink>
                    </li>
                    <li>
                        <div className={classes.login}>
                            <Link className={classes.loginButton} href='/login'>LOGIN</Link>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )
}