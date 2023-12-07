'use client'
import styles from './page.module.css';
import { Banner } from "./componentes/banner/Banner";
import { NavBar } from "./componentes/navBar/NavBar";
import { InfoHome } from './componentes/infoHome/InfoHome';
import { HomeMenu } from "./componentes/homeMenu/HomeMenu";
import { ImageCarousel } from "./componentes/carousel/Carousel";
import { TituloPrincipal } from './componentes/tituloJobs/TituloPrincipal';

export default function Home() {
  const titulo = "¡Bienvenidos a Futurama, la asombrosa metrópolis del año 3000!"
  const src = "/img/banner/cityBanner.jpg"

  return (
    <>
      <Banner src={src} />
      <NavBar />

      <main className={styles.main}>
        <TituloPrincipal titulo={titulo}/>
        <div className={styles.contenedor}>
          <div className={`justify-content-between align-items-start ${styles.colIzq}`}>
            <HomeMenu />
          </div>
          <div className={`d-flex flex-row justify-content-between ${styles.colDer}`}>
            <InfoHome />
          </div>
        </div>
        <ImageCarousel />
      </main>
    </>
  )
}
