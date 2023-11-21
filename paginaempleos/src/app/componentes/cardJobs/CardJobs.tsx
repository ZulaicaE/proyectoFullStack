import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './CardJobs.css';

interface CardJobsProps {
    empleo: {
        id: string;
        empresa: string;
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
            <Card className="h-100 cardJobs">
                <Card.Img className="jobsImg img-fluid" variant="top" src={empleo.img}/>
                <Card.Body>
                    <Card.Title className="tituloCardJobs">{empleo.empleo}</Card.Title>
                    <p><strong>{empleo.empresa}</strong></p>
                    <Card.Text>
                        <u>Rubro</u>: <span>{empleo.rubro}</span><br />
                        <u>Descripción</u>: <span>{empleo.descripcion}</span><br />
                        <u>Carga Horaria</u>: <span>{empleo.cargaHoraria}</span><br />
                        <u>Requisitos</u>: <span>{empleo.requisitos}</span>
                    </Card.Text>

                </Card.Body>
                <div className="d-flex justify-content-center botonCV">
                        <Button variant="outline-dark">Aplicar</Button>
                    </div>   
            </Card>
    );
}

