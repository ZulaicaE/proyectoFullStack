import styles from './page.module.css';
import { Banner } from "./componentes/banner/banner";
import { NavBar } from "./componentes/navBar/navBar";
import { InfoHome } from './componentes/InfoHome/infoHome';

export default function Home() {
  return (
    <>
    <Banner />
    <NavBar />
    <InfoHome />
    
    <main className={styles.main}>
     
    </main>
    </>    
  )
}
