import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import FormCandidato from '../formCandidato/FormCandidato';

function BotonCargarCadidato() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Cargar Tarjeta
      </Button>

      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Candidato:</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <FormCandidato/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default BotonCargarCadidato;