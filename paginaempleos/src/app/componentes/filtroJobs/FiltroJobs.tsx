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
        empleo.rubro.toLowerCase().includes(filtroRubro.toLowerCase())
      );
    });

    cambiosEmpleosFiltrados(empleosFiltrados);
  }, [filtroRubro]);

  useEffect(() => {
    // Filter cards based on checkbox selections
    const empleosFiltrados = DataEmpleos.filter((empleo : any) => {
      if ((!fulltime && empleo.cargaHoraria === 'Full-Time') || (!parttime && empleo.cargaHoraria === 'Part-Time')) {
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
        setParttime(false); // Uncheck 'no' if 'yes' is checked
      }
    } else if (type === 'Part-Time') {
      setParttime(!parttime);
      if (!parttime) {
        setFulltime(false); // Uncheck 'yes' if 'no' is checked
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
            Fulltime
            <input
              type="checkbox"
              checked={fulltime}
              onChange={() => handleCheckboxChange('Full-Time')}
            />
          </label>
          <p />
          <label>
            Partime
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