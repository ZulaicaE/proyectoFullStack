import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import './CardEmployee.css'

interface CardEmployeeProps {
    candidato: {
        id: string;
        nombre: string;
        apellido: string;
        edad: string;
        fulltime: string;
        movilidad: string;
        img: string;
    };
}

export const CardEmployee: React.FC<CardEmployeeProps> = ({ candidato }) => {
    return (
        <Card  className='h-100 d-flex flex-column cardEmployee'>
            <Image src={candidato.img} roundedCircle fluid className='imgCardEmployee' />
            <Card.Body className='d-flex flex-column justify-content-between'>
                <Card.Title>{candidato.nombre}, {candidato.apellido}</Card.Title>
                <Card.Text>
                    Edad: {candidato.edad}<br />
                    Link a cv o linkedin: <br />
                    Skills (5 max): <br />
                    Full Time: {candidato.fulltime}<br />
                    Movilidad: {candidato.movilidad}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}