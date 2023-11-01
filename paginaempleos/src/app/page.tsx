import styles from './page.module.css';
import { Banner } from "./componentes/banner/banner";
import { NavBar } from "./componentes/navBar/navBar";
import { InfoHome } from './componentes/InfoHome/infoHome';
import { HomeMenu } from "./componentes/HomeMenu/homeMenu";

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
      </main>
    </>
  )
}
