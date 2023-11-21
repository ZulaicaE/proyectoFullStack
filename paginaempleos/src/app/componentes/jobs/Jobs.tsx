import styles from './Jobs.module.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { CardJobs } from "../cardJobs/CardJobs";

interface Candidato {
    id: string;
    empleo: string;
    empresa: string;
    rubro: string;
    descripcion: string;
    requisitos: string;
    cargaHoraria: string;
    img: string;
  }
  
  interface EmpleosFiltradosProps {
    empleosFiltrados: Candidato[];
  }
  
export const Jobs: React.FC<EmpleosFiltradosProps> = ({empleosFiltrados}) => {
    return (
        <div className={styles.divEmpleos}>
            <Row xs={1} md={2} lg={2} xl={4} className="g-4">
                {empleosFiltrados.map((empleo, index) => (
                    <Col key={index}>
                        <CardJobs empleo={empleo} />
                    </Col>
                ))}
            </Row>
        </div>
    );
};
