import React, { useState, useEffect } from 'react';
import DataCandidatos from '../dataCanditatos/DataCandidatos';

interface FiltroEmployeeProps {
  cambiosCandidatosFiltrados: (candidatos: any[]) => void;
}

export const FiltroEmployee: React.FC<FiltroEmployeeProps> = ({ cambiosCandidatosFiltrados }) => {
  const [filtro, setFiltro] = useState<string>('');

  const filtrarCandidatos = (filtrado: string) => {
    setFiltro(filtrado);
  };

  useEffect(() => {
    const candidatosFiltrados = DataCandidatos.filter((candidato: any) => {
      return (
        candidato.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
        candidato.apellido.toLowerCase().includes(filtro.toLowerCase()) ||
        candidato.edad.toLowerCase().includes(filtro.toLowerCase()) ||
        candidato.fulltime.toLowerCase().includes(filtro.toLowerCase()) ||
        candidato.movilidad.toLowerCase().includes(filtro.toLowerCase())
      );
    });

    cambiosCandidatosFiltrados(candidatosFiltrados);
  }, [filtro]);

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar"
        value={filtro}
        onChange={(e) => filtrarCandidatos(e.target.value)}
      />
    </div>
  );
};