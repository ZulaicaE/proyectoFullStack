'use client'
import styles from './page.module.css';
import { NavBar } from "../componentes/navBar/NavBar";
import { TituloPrincipal } from "../componentes/tituloJobs/TituloPrincipal";
import { Banner } from '../componentes/banner/Banner';
import { Employees } from '../componentes/employees/Employees';

export default function CandidatosPage() {
  const src = "/img/banner/thnkBanner.png"
  const titulo = "¡Futurama te necesita! Busque su candidato aquí"

  return (
    <>
      <Banner src={src} />
      <NavBar />
      <main className={styles.main}>
        <TituloPrincipal titulo={titulo} />
        <div className="d-flex flex-row">
          <div className='col-2 d-flex flex-row justify-content-between align-items-start'>
          </div>
          <div className='col-10 d-flex flex-row justify-content-between'>
            <Employees />
          </div>
        </div>
      </main>
    </>

  )
}      