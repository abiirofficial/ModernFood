import Link from "next/link";
import classes from './page.module.css'
import ImageSlideShow from "@/Components/image-slideshow/ImageSlideShow";

export default function Home() {
  return (
    <>
    <div>
    </div>
    <header className={classes.header}>
      <div className={classes.slideshow}>
      </div>
      <div style={{position: 'absolute', top: '218px', left: '200px', backgroundColor: 'black'}}>
                <ImageSlideShow />
            </div>
      <div>
        <div className={classes.hero}>
          <h1>NextLevel Food for NextLevel Foodies</h1>
          <p>Taste The Best</p>
        </div>
        <div className={classes.cta}>
          <Link href='/meals'>Explore Your Desired Meals</Link>
          <Link href='/community'>Join The Community</Link>
        </div>
      </div>
    </header>
    <main>
    <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
    </main>
    </>
    
  );
}
