import styles from './Employees.module.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { CardEmployee } from "../cardEmployee/CardEmployee";

interface Candidato {
    id: string;
    nombre: string;
    apellido: string;
    edad: string;
    fulltime: string;
    movilidad: string;
    img: string;
  }
  
  interface CandidatosFiltradosProps {
    candidatosFiltrados: Candidato[];
  }
  
export const Employees: React.FC<CandidatosFiltradosProps> = ({candidatosFiltrados}) => {
    return (
        <div className={styles.divCandidatos}>
            <Row xs={1} md={2} lg={2} xl={4} className="g-4">
                {candidatosFiltrados.map((candidato, index) => (
                    <Col key={index}>
                        <CardEmployee candidato={candidato} />
                    </Col>
                ))}
            </Row>
        </div>
    );
};
