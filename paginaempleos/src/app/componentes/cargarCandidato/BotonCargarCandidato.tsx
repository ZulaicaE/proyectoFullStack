import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import FormCandidato from '../formCandidato/FormCandidato';
import "./BotonCargarCandidato.css"

function BotonCargarCadidato({ onSubmitCandidato }: { onSubmitCandidato: (nuevoCandidato: any) => void }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} className='btnCargar'>
        Cargar Tarjeta
      </Button>

      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Candidato:</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <FormCandidato onSubmitCandidato={onSubmitCandidato}/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default BotonCargarCadidato;