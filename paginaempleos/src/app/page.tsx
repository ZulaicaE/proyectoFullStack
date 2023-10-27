import styles from './page.module.css';
import { Banner } from "./componentes/banner/banner";
import { NavBar } from "./componentes/navBar/navBar";

export default function Home() {
  return (
    <>
    <Banner />
    <NavBar />
    
    <main className={styles.main}>
     
    </main>
    </>    
  )
}
