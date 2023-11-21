'use client'
import styles from './page.module.css';
import React, { useState } from 'react';
import { NavBar } from "../componentes/navBar/NavBar";
import { TituloPrincipal } from "../componentes/tituloJobs/TituloPrincipal";
import { Banner } from '../componentes/banner/Banner';
import { Employees } from '../componentes/employees/Employees';
import { FiltroEmployee } from '../componentes/filtroEmployee/FiltroEmployee';

export default function CandidatosPage() {

  const [candidatosFiltrados, setCandidatosFiltrados] = useState([]);

  const manejoCandidatosFiltrados = (candidatos: any) => {
      setCandidatosFiltrados(candidatos);
  };
  
  const src = "/img/banner/thnkBanner.png"
  const titulo = "¡Futurama te necesita! Busque su candidato aquí"

  return (
    <>
      <Banner src={src} />
      <NavBar />
      <main className={styles.main}>
        <TituloPrincipal titulo={titulo} />
        <div className="d-flex flex-row">
          <div className='col-2 '>
          <FiltroEmployee cambiosCandidatosFiltrados={manejoCandidatosFiltrados} />
          </div>
          <div className='col-10 '>
            <Employees candidatosFiltrados={candidatosFiltrados} />
          </div>
        </div>
      </main>
    </>

  )
}      