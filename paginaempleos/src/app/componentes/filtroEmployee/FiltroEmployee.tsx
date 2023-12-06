import React, { useState, useEffect } from 'react';
import { ListGroup, Button } from "react-bootstrap";
import DataCandidatos from '../dataCanditatos/DataCandidatos';
import styles from "./FiltroEmployee.module.css";


interface FiltroEmployeeProps {
  cambiosCandidatosFiltrados: (candidatos: any[]) => void;
}

export const FiltroEmployee: React.FC<FiltroEmployeeProps> = ({ cambiosCandidatosFiltrados }) => {
  const [filtroNombre, setFiltroNombre] = useState<string>('');
  const [minEdad, setMinEdad] = useState<number | ''>('');
  const [maxEdad, setMaxEdad] = useState<number | ''>('');
  const [fulltimeYes, setFulltimeYes] = useState<boolean>(false);
  const [fulltimeNo, setFulltimeNo] = useState<boolean>(false);
  const [movilidadYes, setMovilidadYes] = useState<boolean>(false);
  const [movilidadNo, setMovilidadNo] = useState<boolean>(false);

  const filtrarCandidatos = (filtradoNombre: string) => {
    setFiltroNombre(filtradoNombre);
  };

  useEffect(() => {
    const candidatosFiltrados = DataCandidatos.filter((candidato: any) => {
      return (
        candidato.nombre.toLowerCase().startsWith(filtroNombre.toLowerCase()) ||
        candidato.apellido.toLowerCase().startsWith(filtroNombre.toLowerCase())
      );
    });

    cambiosCandidatosFiltrados(candidatosFiltrados);
  }, [filtroNombre]);

  useEffect(() => {
    if (minEdad !== '' && maxEdad !== '' && minEdad >= maxEdad) {
      setMinEdad(maxEdad - 1);
    } else {
      const candidatosFiltrados = DataCandidatos.filter((candidato) => {
        const cardEdad = parseInt(candidato.edad);
        return (
          (minEdad === '' || cardEdad >= minEdad) &&
          (maxEdad === '' || cardEdad <= maxEdad)
        );
      });
      cambiosCandidatosFiltrados(candidatosFiltrados);
    }
  }, [minEdad, maxEdad]);

  const handleReset = () => {
    setMinEdad('');
    setMaxEdad('');
  };

  useEffect(() => {
    const candidatosFiltrados = DataCandidatos.filter((candidato: any) => {
      const Fulltime = (!fulltimeYes && candidato.fulltime === 'No') || (!fulltimeNo && candidato.fulltime === 'Si')
      const Movilidad = (!movilidadYes && candidato.movilidad === 'No') || (!movilidadNo && candidato.movilidad === 'Si')

      return Fulltime && Movilidad
    });

    cambiosCandidatosFiltrados(candidatosFiltrados);
  }, [DataCandidatos, fulltimeYes, fulltimeNo, movilidadYes, movilidadNo]);


  const handleCheckboxChange = (type: 'Si' | 'No', secondType: 'Si' | 'No') => {
    if (type === 'Si') {
      if (secondType === 'Si') {
        setFulltimeYes(!fulltimeYes);
        if (!fulltimeYes) {
          setFulltimeNo(false);
        }
      } else if (secondType === 'No') {
        setMovilidadYes(!movilidadYes);
        if (!movilidadYes) {
          setMovilidadNo(false);
        }
      }
    } else if (type === 'No') {
      if (secondType === 'Si') {
        setFulltimeNo(!fulltimeNo);
        if (!fulltimeNo) {
          setFulltimeYes(false);
        }
      } else if (secondType === 'No') {
        setMovilidadNo(!movilidadNo);
        if (!movilidadNo) {
          setMovilidadYes(false);
        }
      }
    }
  };

  return (
    <div className={styles.divFiltro}>
      <div className={styles.name}>
        <p>Nombre y apellido:</p>
        <input
          type="text"
          placeholder="Buscar..."
          value={filtroNombre}
          onChange={(e) => filtrarCandidatos(e.target.value)}
          className={styles.inputBuscar}
        />
      </div>
      <hr className={styles.hr} />
      <div className={styles.age}>
        <p className={styles.tituloFiltro}>Edad:</p>
        <label className={styles.EdadMinMaxContainer}>
          <span> Min </span>
          <input
            type="number"
            placeholder='Min. 18'
            value={minEdad}
            onChange={(e) => setMinEdad(parseInt(e.target.value))}
            min={18}
            max={9998}
            className={styles.EdadMinMax}
          />
        </label>
        <label className={styles.EdadMinMaxContainer}>
          <span> Max </span>
          <input
            type="number"
            placeholder='Max. 9999'
            value={maxEdad}
            onChange={(e) => setMaxEdad(parseInt(e.target.value))}
            min={19}
            max={9999}
            className={styles.EdadMinMax}
          />
        </label>
        <Button onClick={handleReset} size='sm' className={styles.btnReset}>Reset</Button>
      </div>
      <hr className={styles.hr} />
      <div className={`${styles.cargHor}`}>
        <p>Fulltime:</p>
        <label>
          <input
            type="checkbox"
            checked={fulltimeYes}
            onChange={() => handleCheckboxChange('Si', 'Si')}
            className={`form-check-input ${styles.checkBoxHover}`}
          />
          <span className={styles.checkBoxHover}> Si </span>
        </label>
        <label>
          <input
            type="checkbox"
            checked={fulltimeNo}
            onChange={() => handleCheckboxChange('No', 'Si')}
            className={`form-check-input ${styles.checkBoxHover}`}
          />
          <span className={styles.checkBoxHover}> No </span>
        </label>
      </div>
      <hr className={styles.hr} />
      <div className={`${styles.mov} ${styles.cargHor} ${styles.checkBoxContainer}`}>
        <p>Movilidad:</p>
        <label>
          <input
            type="checkbox"
            checked={movilidadYes}
            onChange={() => handleCheckboxChange('Si', 'No')}
            className={`form-check-input ${styles.checkBoxHover}`}
          />
          <span className={styles.checkBoxHover}> Si </span>
        </label>
        <label>
          <input
            type="checkbox"
            checked={movilidadNo}
            onChange={() => handleCheckboxChange('No', 'No')}
            className={`form-check-input ${styles.checkBoxHover}`}
          />
          <span className={styles.checkBoxHover}> No </span>
        </label>
      </div>
    </div>
  );
};
