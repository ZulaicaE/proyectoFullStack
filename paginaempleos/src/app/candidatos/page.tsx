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
      return 4;
    } else if (screenWidth <= 768) {
      return 4;
    } else if (screenWidth <= 991) {
      return 6;
    } else if (screenWidth <= 1199) {
      return 9;
    } else if (screenWidth <= 1366) {
      return 12
    } else {
      return 12
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
        <div className={styles.containerCol}>
          <div className={styles.colIzq}>
            <div className='pegadizo'>
              <FiltroEmployee cambiosCandidatosFiltrados={manejoCandidatosFiltrados} />
              <BotonCargarCandidato onSubmitCandidato={agregarNuevoCandidato} />
            </div>
          </div>
          <div className={styles.colDer}>
            <Employees candidatosFiltrados={cardsActuales} />
            <Paginado
              paginaActual={paginaActual}
              paginasTotales={paginasTotales}
              onPaginaChange={handlePaginaChange}
            />
          </div>
        </div>
      </main>
    </>
  )
}