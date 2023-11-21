'use client'
import styles from './page.module.css';
import React, { useState } from 'react';
import { NavBar } from "../componentes/navBar/NavBar";
import { TituloPrincipal } from "../componentes/tituloJobs/TituloPrincipal";
import { Banner } from '../componentes/banner/Banner';
import { Jobs } from '../componentes/jobs/Jobs';
import { FiltroEmpleos } from '../componentes/filtroJobs/FiltroJobs';

export default function EmpleosPage() {

  const [empleosFiltrados, setEmpleosFiltrados] = useState([]);

  const manejoEmpleosFiltrados = (empleos: any) => {
      setEmpleosFiltrados(empleos);
  };

  const titulo = "¡Futurama te necesita! Busque su empleo aquí"
  const src = "/img/bannerJobs/uGottaDo.jpg"

  return (
    <>
      <Banner src={src} />
      <NavBar />
      <main className={styles.main}>
        <TituloPrincipal titulo={titulo} />
        <div className={`d-flex flex-row ${styles.containerCol}`}>
          <div className={`col-2 ${styles.containerFilter}`}>
          <FiltroEmpleos cambiosEmpleosFiltrados={manejoEmpleosFiltrados} />
          </div>
          <div className='col-10 '>
            <Jobs empleosFiltrados={empleosFiltrados} />
          </div>
        </div>
      </main>
    </>

  )
}