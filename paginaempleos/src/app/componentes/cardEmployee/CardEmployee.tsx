import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import './CardEmployee.css'

interface CardEmployeeProps {
    candidato: {
        id: string;
        nombre: string;
        apellido: string;
        edad: string;
        linkCV: string;
        skills: string;
        fulltime: string;
        movilidad: string;
        img: string;
        puesto: string;
    };
}

export const CardEmployee: React.FC<CardEmployeeProps> = ({ candidato }) => {
    return (
        <Card  className='h-100 d-flex flex-column cardEmployee'>
            <div className='d-flex justify-content-center'>
             <Image src={candidato.img} roundedCircle fluid className='imgCardEmployee' />
            </div>            
            <Card.Body className='d-flex flex-column justify-content-between'>
                <Card.Title className='tituloCardEmployee'>{candidato.nombre} {candidato.apellido}</Card.Title>
                <p><strong>{candidato.puesto}</strong></p>
                <Card.Text>
                    <u>Edad</u>: <span className='cardTextInfo'>{candidato.edad}</span> <br />
                    <u>LinkedIn</u>: <span className='cardTextInfo'>{candidato.linkCV}</span> <br />
                    <u>Skills</u>: <span className='cardTextInfo'>{candidato.skills}</span> <br />
                    <u>Full Time</u>: <span className='cardTextInfo'>{candidato.fulltime}</span><br />
                    <u>Movilidad</u>: <span className='cardTextInfo'>{candidato.movilidad}</span>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}