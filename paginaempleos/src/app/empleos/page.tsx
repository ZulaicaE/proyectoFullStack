'use client'
import styles from './page.module.css';
import React, { useEffect, useState } from 'react';
import { NavBar } from "../componentes/navBar/NavBar";
import { TituloPrincipal } from "../componentes/tituloJobs/TituloPrincipal";
import { Banner } from '../componentes/banner/Banner';
import { Jobs } from '../componentes/jobs/Jobs';
import { FiltroEmpleos } from '../componentes/filtroJobs/FiltroJobs';
import { Paginado } from '../componentes/paginado/Paginado'


export default function EmpleosPage() {

  const [empleosFiltrados, setEmpleosFiltrados] = useState([]);
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

  const manejoEmpleosFiltrados = (empleos: any) => {
      setEmpleosFiltrados(empleos);
      setPaginaActual(1);
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
  const cardsActuales = empleosFiltrados.slice(indexFirstCard, indexLastCard);

  const paginasTotales = Math.ceil(empleosFiltrados.length / cardsPorPagina);

  const handlePaginaChange = (page: number) => setPaginaActual(page);

  const titulo = "¡Futurama te necesita! Busque su empleo aquí"
  const src = "/img/banner/thnkBanner.png"

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
            <Jobs empleosFiltrados={cardsActuales} />
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