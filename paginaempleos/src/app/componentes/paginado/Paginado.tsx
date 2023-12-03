import React from 'react';
import { Pagination } from 'react-bootstrap';

interface PaginadoProps {
  paginaActual: number;
  paginasTotales: number;
  onPaginaChange: (pagina: number) => void;
}

export const Paginado: React.FC<PaginadoProps> = ({
  paginaActual,
  paginasTotales,
  onPaginaChange,
}) => {
  return (
    <Pagination>
      {Array.from({ length: paginasTotales }).map((_, index) => (
        <Pagination.Item
          key={index + 1}
          active={index + 1 === paginaActual}
          onClick={() => onPaginaChange(index + 1)}
        >
          {index + 1}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};
