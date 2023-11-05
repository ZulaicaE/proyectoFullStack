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
        <div className="d-flex flex-row">
          <div className='col-2 d-flex flex-row justify-content-evenly'>
            <HomeMenu />
          </div>
          <div className='col-10 d-flex flex-row justify-content-evenly'>
            <InfoHome />
          </div>
        </div>
          <ImageCarousel /> 
      </main>
      
    </>
  )
}
