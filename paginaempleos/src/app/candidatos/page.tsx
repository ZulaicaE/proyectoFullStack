import styles from '../page.module.css';
import { NavBar } from "../componentes/navBar/NavBar";
import { TituloPrincipal } from "../componentes/tituloJobs/TituloPrincipal";


export default function CandidatosPage () {
  const titulo = "¡Futurama te necesita! Busque su candidato aquí"
  return (
    <>
      <NavBar />
      <main className={styles.main}>
        <TituloPrincipal titulo={titulo} />
      </main>
    </>
    
  )
}