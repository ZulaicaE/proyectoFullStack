import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

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
  
export const CardEmployee: React.FC<CardEmployeeProps> = ({candidato}) => {
    return (
        <Card>
            <Image src={candidato.img} roundedCircle fluid />
            <Card.Body>
                <Card.Title>{candidato.nombre}, {candidato.apellido}</Card.Title>
                <Card.Text>
                    Edad: {candidato.edad},
                    Full Time: {candidato.fulltime},
                    movilidad: {candidato.movilidad}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}