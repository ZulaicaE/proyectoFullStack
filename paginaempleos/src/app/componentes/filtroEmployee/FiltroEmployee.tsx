import React, { useState, useEffect } from 'react';
import { ListGroup } from "react-bootstrap";
import DataCandidatos from '../dataCanditatos/DataCandidatos';
import styles from "./FiltroEmployee.module.css";


interface FiltroEmployeeProps {
  cambiosCandidatosFiltrados: (candidatos: any[]) => void;
}

export const FiltroEmployee: React.FC<FiltroEmployeeProps> = ({ cambiosCandidatosFiltrados }) => {
  const [filtroNombre, setFiltroNombre] = useState<string>('');
  const [filtroEdad, setFiltroEdad] = useState<string>('');
  const [fulltimeYes, setFulltimeYes] = useState<boolean>(false);
  const [fulltimeNo, setFulltimeNo] = useState<boolean>(false);
  const [movilidadYes, setMovilidadYes] = useState<boolean>(false);
  const [movilidadNo, setMovilidadNo] = useState<boolean>(false);

  const filtrarCandidatos = (filtradoNombre: string, filtradoEdad: string) => {
    setFiltroNombre(filtradoNombre);
    setFiltroEdad(filtradoEdad);
  };

  useEffect(() => {
    const candidatosFiltrados = DataCandidatos.filter((candidato: any) => {
      return (
        candidato.nombre.toLowerCase().includes(filtroNombre.toLowerCase()) ||
        candidato.apellido.toLowerCase().includes(filtroNombre.toLowerCase())
      );
    });

    cambiosCandidatosFiltrados(candidatosFiltrados);
  }, [filtroNombre]);

  useEffect(() => {
    const candidatosFiltrados = DataCandidatos.filter((candidato: any) => {
      return (
        candidato.edad.toLowerCase().includes(filtroEdad.toLowerCase())
      );
    });

    cambiosCandidatosFiltrados(candidatosFiltrados);
  }, [filtroEdad]);

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
    <div>
      <ListGroup>
        <ListGroup.Item className={styles.container}>
          <p>Nombre y apellido:</p>
          <input
            type="text"
            placeholder="Buscar"
            value={filtroNombre}
            onChange={(e) => filtrarCandidatos(e.target.value, '')}
            className={styles.inputBuscar}
          />
        </ListGroup.Item>
        <ListGroup.Item className={styles.container}>
          <p>Edad:</p>
          <input
            type='text'
            placeholder="Buscar"
            value={filtroEdad}
            onChange={(e) => filtrarCandidatos('', e.target.value)}
            className={styles.inputBuscar}
          />
        </ListGroup.Item>
        <ListGroup.Item className={styles.container}>
          <p>Fulltime:</p>
          <label>
            <input
              type="checkbox"
              checked={fulltimeYes}
              onChange={() => handleCheckboxChange('Si', 'Si')}
            />
            Si
          </label>
          <p />
          <label>
            <input
              type="checkbox"
              checked={fulltimeNo}
              onChange={() => handleCheckboxChange('No', 'Si')}
            />
            No
          </label>
        </ListGroup.Item>
        <ListGroup.Item className={styles.container}>
          <p>Movilidad:</p>
          <label>
            <input
              type="checkbox"
              checked={movilidadYes}
              onChange={() => handleCheckboxChange('Si', 'No')}
            />
            Si
          </label>
          <p />
          <label>
            <input
              type="checkbox"
              checked={movilidadNo}
              onChange={() => handleCheckboxChange('No', 'No')}
            />
            No
          </label>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};