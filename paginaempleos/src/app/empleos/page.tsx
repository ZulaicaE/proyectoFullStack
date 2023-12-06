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
        return 16
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
        <div className={styles.contenedor}>
          <div className={styles.colIzq}>
            <div className="pegadizo">
          <FiltroEmpleos cambiosEmpleosFiltrados={manejoEmpleosFiltrados} />
          </div>
          </div>
          <div className={styles.colDer}>
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