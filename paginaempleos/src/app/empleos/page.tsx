import styles from '../page.module.css';
import { NavBar } from "../componentes/navBar/NavBar";
import { TituloPrincipal } from "../componentes/tituloJobs/TituloPrincipal";
import { Banner } from '../componentes/banner/Banner';

export default function EmpleosPage () {
  const titulo = "¡Futurama te necesita! Busque su empleo aquí"
  const src = "/img/bannerJobs/uGottaDo.jpg"

  return (
    <>
      <Banner src={src}/>
      <NavBar />
      <main className={styles.main}>
        <TituloPrincipal titulo={titulo} />
      </main>
    </>
    
  )
}