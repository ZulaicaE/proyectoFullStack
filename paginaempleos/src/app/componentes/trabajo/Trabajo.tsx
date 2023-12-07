'use client'
import styles from './trabajo.module.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import InfoEmpleos from '../infoEmpleos/InfoEmpleos';
import { CardJobs } from '../cardJobs/CardJobs';




export const Trabajo = () => {
    return (
        <div className={styles.divEmpleos}>
            <Row xs={1} md={3} lg={4} className="g-4">
                {InfoEmpleos.map((empleo, index) => (
                    <Col key={index}>
                        <CardJobs empleo={empleo} />
                    </Col>
                ))}
            </Row>
        </div>
    );
}

