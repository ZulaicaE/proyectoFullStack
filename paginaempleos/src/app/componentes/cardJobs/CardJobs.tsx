import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './CardJobs.css';

interface CardJobsProps {
    empleo: {
        id: string;
        empleo: string;
        rubro: string;
        descripcion: string;
        requisitos: string;
        cargaHoraria: string;
        img: string;
    };
}

export const CardJobs: React.FC<CardJobsProps> = ({ empleo }) => {
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={empleo.img} />
                <Card.Body>
                    <Card.Title>{empleo.empleo}</Card.Title>
                    <Card.Text>
                        Rubro: {empleo.rubro}<br />
                        Descripción: {empleo.descripcion}<br />
                        Carga Horaria: {empleo.cargaHoraria}<br />
                        Requisitos: {empleo.requisitos}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}

