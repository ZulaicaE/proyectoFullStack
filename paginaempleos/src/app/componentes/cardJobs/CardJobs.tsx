import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './cardJobs.css';

interface CardJobsInfo {
    empleo: {
        id: string;
        empleador: string;
        cargaHoraria: string;
        rubro: string;
        descripcion: string;
        requisitos: string;
    };
}

export const CardJobs: React.FC<CardJobsInfo> = ({ empleo }) => {
    return (

        <Col>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>{empleo.empleador}</Card.Title>
                    <Card.Text>
                        Rubro: {empleo.rubro}<br />
                        Descripción: {empleo.descripcion}<br />
                        Carga Horaria: {empleo.cargaHoraria}<br />
                        Requisitos: {empleo.requisitos}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        // <Row xs={1} md={2} className="g-4">
        //     {Array.from({ length: 4 }).map((_, idx) => (
        //         <Col key={idx}>
        //             <Card>
        //                 <Card.Body>
        //                     <Card.Title>{empleo.empleador}</Card.Title>
        //                     <Card.Text>
        //                         Rubro: {empleo.rubro}<br />
        //                         Descripción:   {empleo.descripcion}<br />
        //                         Carga Horaria: {empleo.cargaHoraria}<br />
        //                         Requisitos: {empleo.requisitos}
        //                     </Card.Text>
        //                 </Card.Body>
        //             </Card>
        //         </Col>
        //     ))}
        // </Row>
    );
}

