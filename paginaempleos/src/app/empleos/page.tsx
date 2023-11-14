import styles from '../page.module.css';
import { BannerJobs } from "../componentes/bannerJobs/BannerJobs";
import { NavBar } from "../componentes/navBar/NavBar";
import { TituloPrincipal } from "../componentes/tituloJobs/TituloPrincipal";

export default function EmpleosPage () {
  const titulo = "¡Futurama te necesita! Busque su empleo aquí"

  return (
    <>
      <BannerJobs />
      <NavBar />
      <main className={styles.main}>
        <TituloPrincipal titulo={titulo} />
      </main>
    </>
    
  )
}