import React, { useState, useEffect } from 'react';
import { ListGroup } from "react-bootstrap";
import DataEmpleos from '../dataJobs/DataJobs';
import styles from './FiltroJobs.module.css';


interface FiltroEmpleosProps {
  cambiosEmpleosFiltrados: (empleos: any[]) => void;
}

export const FiltroEmpleos: React.FC<FiltroEmpleosProps> = ({ cambiosEmpleosFiltrados }) => {
  const [filtroRubro, setFiltroRubro] = useState<string>('');

  const [fulltime, setFulltime] = useState<boolean>(false);
  const [parttime, setParttime] = useState<boolean>(false);

  const filtrarEmpleos = (filtradoRubro: string) => {
    setFiltroRubro(filtradoRubro);
  };

  useEffect(() => {
    const empleosFiltrados = DataEmpleos.filter((empleo: any) => {
      return (
        empleo.rubro.toLowerCase().startsWith(filtroRubro.toLowerCase())
      );
    });

    cambiosEmpleosFiltrados(empleosFiltrados);
  }, [filtroRubro]);

  useEffect(() => {
    const empleosFiltrados = DataEmpleos.filter((empleo : any) => {
      if ((!fulltime && empleo.cargaHoraria === 'Part-Time') || (!parttime && empleo.cargaHoraria === 'Full-Time')) {
        return true;
      }
      return false;
    });

    cambiosEmpleosFiltrados(empleosFiltrados);
  }, [DataEmpleos, fulltime, parttime]);

  const handleCheckboxChange = (type: 'Full-Time' | 'Part-Time') => {
    if (type === 'Full-Time') {
      setFulltime(!fulltime);
      if (!fulltime) {
        setParttime(false);
      }
    } else if (type === 'Part-Time') {
      setParttime(!parttime);
      if (!parttime) {
        setFulltime(false);
      }
    }
  };

  return (
    <div>
      <ListGroup>
        <ListGroup.Item className={styles.container}>
          <p>Rubro:</p>
          <input
            type="text"
            placeholder="Buscar"
            value={filtroRubro}
            onChange={(e) => filtrarEmpleos(e.target.value,)}
            className={styles.inputBuscar}
          />
        </ListGroup.Item>
        <ListGroup.Item className={styles.container}>
          <p>Carga Horaria:</p>
          <label>
            <span> Fulltime </span>
            <input
              type="checkbox"
              checked={fulltime}
              onChange={() => handleCheckboxChange('Full-Time')}
            />
          </label>
          <p />
          <label>
            <span> Partime </span>
            <input
              type="checkbox"
              checked={parttime}
              onChange={() => handleCheckboxChange('Part-Time')}
            />
          </label>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};
