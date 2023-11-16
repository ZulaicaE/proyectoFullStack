'use state'
import styles from './Employees.module.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import DataCandidatos from '../dataCanditatos/DataCandidatos';
import { CardEmployee } from "../cardEmployee/CardEmployee";


export const Employees = () => {
    return (
        <div className={styles.divCandidatos}>
            <Row xs={1} md={3} lg={4} className="g-4">
                {DataCandidatos.map((candidato, index) => (
                    <Col key={index}>
                        <CardEmployee candidato={candidato} />
                    </Col>
                ))}
            </Row>
        </div>
    );
}

