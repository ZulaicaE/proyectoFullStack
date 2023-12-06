import React, { useState, useEffect } from 'react';
import DataEmpleos from '../dataJobs/DataJobs';
import styles from './FiltroJobs.module.css';
import { Typeahead } from 'react-bootstrap-typeahead';


interface FiltroEmpleosProps {
  cambiosEmpleosFiltrados: (empleos: any[]) => void;
}

export const FiltroEmpleos: React.FC<FiltroEmpleosProps> = ({ cambiosEmpleosFiltrados }) => {
  const rubros = ['Comercio', 'Delivery', 'Industrial', 'Investigacion', 'Periodismo', 'Salud'];
  const [rubroSeleccionado, setRubroSeleccionado] = useState<string | null>(null);
  const [rubroOpciones, setRubroOpciones] = useState<string[]>(rubros);
  const [fulltime, setFulltime] = useState<boolean>(false);
  const [parttime, setParttime] = useState<boolean>(false);

  const handleRubroChange = (seleccionado: any[]) => {
    setRubroSeleccionado(seleccionado.length > 0 ? seleccionado[0] : null);
  };

  const handleBusqueda = (query: string) => {
    const opcionesFiltradas = rubros.filter((rubro) =>
      rubro.toLowerCase().startsWith(query.toLowerCase())
    );
    setRubroOpciones(opcionesFiltradas);
  };

  useEffect(() => {
    if (rubroSeleccionado) {
      const updatedFilteredCards = DataEmpleos.filter((empleos) => empleos.rubro === rubroSeleccionado);
      cambiosEmpleosFiltrados(updatedFilteredCards);
    } else {
      cambiosEmpleosFiltrados(DataEmpleos);
    }
  }, [rubroSeleccionado]);

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
    <div className={styles.filtroCont}>
      
        <div className={styles.rubro}>
          <p>Rubro:</p>
          <Typeahead
            className={styles.index}
            id="categoryTypeahead"
            onChange={handleRubroChange}
            onInputChange={handleBusqueda}
            options={rubroOpciones}
            selected={rubroSeleccionado ? [rubroSeleccionado] : []}
            placeholder="Busca o selecciona aqui"
          />
        </div>
        <hr className={styles.hr}/>
        <div className={styles.cargHor}>
          <p>Carga Horaria:</p>
          <label className={`${styles.etiqueta} ${styles.checkBoxContainer}`}>
            <span className={styles.checkBoxHover}> Fulltime </span>
            <input
              type="checkbox"
              checked={fulltime}
              onChange={() => handleCheckboxChange('Full-Time')}
              className={`form-check-input ${styles.checkBoxHover}`}
            />
          </label>

          <label className={`${styles.etiqueta} ${styles.checkBoxContainer}`}>
            <span className={styles.checkBoxHover}> Partime </span>

            <input
              type="checkbox"
              checked={parttime}
              onChange={() => handleCheckboxChange('Part-Time')}
              className={`form-check-input ${styles.checkBoxHover}`}
            />
          </label>
        </div>
      
    </div>
  );
};
