import styles from '../page.module.css';
import { NavBar } from "../componentes/navBar/NavBar";
import { TituloPrincipal } from "../componentes/tituloJobs/TituloPrincipal";
import { Banner } from '../componentes/banner/Banner';

export default function CandidatosPage () {
  const src = "/img/banner/thnkBanner.png"
  const titulo = "¡Futurama te necesita! Busque su candidato aquí"
  
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