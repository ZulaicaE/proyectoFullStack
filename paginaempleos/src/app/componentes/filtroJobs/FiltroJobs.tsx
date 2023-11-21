import React, { useState, useEffect } from 'react';
import { ListGroup } from "react-bootstrap";
import DataEmpleos from '../dataJobs/DataJobs';
import styles from './FiltroJobs.module.css';


interface FiltroEmpleosProps {
  cambiosEmpleosFiltrados: (empleos: any[]) => void;
}

export const FiltroEmpleos: React.FC<FiltroEmpleosProps> = ({ cambiosEmpleosFiltrados }) => {
  const [filtroRubro, setFiltroRubro] = useState<string>('');
  const [filtroCargaHoraria, setFiltroCargaHoraria] = useState<string>('');

  const filtrarEmpleos = (filtradoRubro: string, filtradoCargaHoraria: string) => {
    setFiltroRubro(filtradoRubro);
    setFiltroCargaHoraria(filtradoCargaHoraria);
  };

  useEffect(() => {
    const empleosFiltrados = DataEmpleos.filter((empleo: any) => {
      return (
        empleo.rubro.toLowerCase().includes(filtroRubro.toLowerCase())
      );
    });

    cambiosEmpleosFiltrados(empleosFiltrados);
  }, [filtroRubro]);

  useEffect(() => {
    const empleosFiltrados = DataEmpleos.filter((empleo: any) => {
      return (
        empleo.cargaHoraria.toLowerCase().includes(filtroCargaHoraria.toLowerCase())
      );
    });

    cambiosEmpleosFiltrados(empleosFiltrados);
  }, [filtroCargaHoraria]);

  return (
    <div>
      <ListGroup>
        <ListGroup.Item className={styles.container}>
          <p>Rubro:</p>
          <input
            type="text"
            placeholder="Buscar"
            value={filtroRubro}
            onChange={(e) => filtrarEmpleos(e.target.value,'')}
            className={styles.inputBuscar}
          />
        </ListGroup.Item>
        <ListGroup.Item className={styles.container}>
          <p>Carga Horaria:</p>
          <input 
            type='text'
            placeholder="Buscar"
            value={filtroCargaHoraria}
            onChange={(e) => filtrarEmpleos('', e.target.value)}
            className={styles.inputBuscar}
          />
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};