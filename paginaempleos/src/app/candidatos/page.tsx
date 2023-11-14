import styles from '../page.module.css';
import { NavBar } from "../componentes/navBar/NavBar";
import { Banner } from '../componentes/banner/Banner';

export default function CandidatosPage () {
  const src = "/img/banner/paidToThink2.jpg"

  return (
    <>
      <Banner src={src}/>
      <NavBar />
      <main className={styles.main}>

      </main>
    </>
    
  )
}