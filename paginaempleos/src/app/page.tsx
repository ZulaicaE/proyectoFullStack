'use client'
import styles from './page.module.css';
import { Banner } from "./componentes/bannerHome/Banner";
import { NavBar } from "./componentes/navBar/NavBar";
import { InfoHome } from './componentes/infoHome/InfoHome';
import { HomeMenu } from "./componentes/homeMenu/HomeMenu";
import { ImageCarousel } from "./componentes/carousel/Carousel";

export default function Home() {
  return (
    <>
      <Banner />
      <NavBar />

      <main className={styles.main}>
        <h1 className={styles.tituloBienvenida}>¡Bienvenidos a Futurama, la asombrosa metrópolis del año 3000!</h1>
        <div className="d-flex flex-row">
          <div className='col-2 d-flex flex-row justify-content-between align-items-start'>
            <HomeMenu />
          </div>
          <div className='col-10 d-flex flex-row justify-content-between'>
            <InfoHome />
          </div>
        </div>
        <ImageCarousel />
      </main>
    </>
  )
}
