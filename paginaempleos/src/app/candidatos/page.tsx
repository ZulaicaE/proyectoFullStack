'use client'
import styles from './page.module.css';
import React, { useState, useEffect } from 'react';
import { NavBar } from "../componentes/navBar/NavBar";
import { TituloPrincipal } from "../componentes/tituloJobs/TituloPrincipal";
import { Banner } from '../componentes/banner/Banner';
import { Employees } from '../componentes/employees/Employees';
import { FiltroEmployee } from '../componentes/filtroEmployee/FiltroEmployee';
import { Paginado } from '../componentes/paginado/Paginado'
import BotonCargarCandidato from '../componentes/cargarCandidato/BotonCargarCandidato'

export default function CandidatosPage() {

  const [candidatosFiltrados, setCandidatosFiltrados] = useState<any>([]);
  const [paginaActual, setPaginaActual] = useState<number>(1);
  const [cardsPorPagina, setCardsPorPagina] = useState<number>(calcularCardsPorPagina);

  function calcularCardsPorPagina() {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 576) {
      return 1;
    } else if (screenWidth <= 768) {
      return 2;
    } else if (screenWidth <= 1180) {
      return 3;
    } else if (screenWidth <= 1366) {
      return 4;
    } else {
      return 6
    }
  }

  const manejoCandidatosFiltrados = (candidatos: any) => {
    setCandidatosFiltrados(candidatos);
    setPaginaActual(1);
  };

  const agregarNuevoCandidato = (nuevoCandidato: any) => {
    const nuevosCandidatos = [...candidatosFiltrados];
    nuevosCandidatos.unshift(nuevoCandidato);
    setCandidatosFiltrados(nuevosCandidatos);
  };
  
  useEffect(() => {
    function handleResize() {
      setCardsPorPagina(calcularCardsPorPagina());
      setPaginaActual(1);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const indexLastCard = paginaActual * cardsPorPagina;
  const indexFirstCard = indexLastCard - cardsPorPagina;
  const cardsActuales = candidatosFiltrados.slice(indexFirstCard, indexLastCard);

  const paginasTotales = Math.ceil(candidatosFiltrados.length / cardsPorPagina);

  const handlePaginaChange = (page: number) => setPaginaActual(page);

  const src = "/img/banner/uGottaDo.jpg"
  const titulo = "¡Futurama te necesita! Busque su candidato aquí"

  return (
    <>
      <Banner src={src} />
      <NavBar />
      <main className={styles.main}>
        <TituloPrincipal titulo={titulo} />
        <div className={`d-flex flex-row ${styles.containerCol}`}>
          <div className={`colIzq ${styles.containerFilter}`}>
            <div className='pegadizo'>
              <FiltroEmployee cambiosCandidatosFiltrados={manejoCandidatosFiltrados} />
              <BotonCargarCandidato onSubmitCandidato={agregarNuevoCandidato} />
            </div>
          </div>
          {candidatosFiltrados.length === 0 ? (
          <div className='col-10'>
            <p className={styles.divCandidatos}> No hay candidatos que coincidan con las caracteristicas buscadas.</p>
          </div>
        ) : (
          <div className='col-10'>
            <Employees candidatosFiltrados={cardsActuales} />
            <Paginado
              paginaActual={paginaActual}
              paginasTotales={paginasTotales}
              onPaginaChange={handlePaginaChange}
            />  
          </div>
          )} 
        </div>
      </main>
    </>
  )
}