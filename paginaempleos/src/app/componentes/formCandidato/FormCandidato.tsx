import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { ListGroup } from "react-bootstrap";
import Row from 'react-bootstrap/Row';

function FormCandidato() {
    const [validated, setValidated] = useState(false);
    const [fulltimeYes, setFulltimeYes] = useState<boolean>(false);
    const [fulltimeNo, setFulltimeNo] = useState<boolean>(false);
    const [movilidadYes, setMovilidadYes] = useState<boolean>(false);
    const [movilidadNo, setMovilidadNo] = useState<boolean>(false);

    const handleFormSubmit = (event: any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    const handleCheckboxChange = (type: 'Si' | 'No', secondType: 'Si' | 'No') => {
        if (type === 'Si') {
            if (secondType === 'Si') {
                setFulltimeYes(!fulltimeYes);
                if (!fulltimeYes) {
                    setFulltimeNo(false);
                }
            } else if (secondType === 'No') {
                setMovilidadYes(!movilidadYes);
                if (!movilidadYes) {
                    setMovilidadNo(false);
                }
            }
        } else if (type === 'No') {
            if (secondType === 'Si') {
                setFulltimeNo(!fulltimeNo);
                if (!fulltimeNo) {
                    setFulltimeYes(false);
                }
            } else if (secondType === 'No') {
                setMovilidadNo(!movilidadNo);
                if (!movilidadNo) {
                    setMovilidadYes(false);
                }
            }
        }
    };

    

    return (
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationName">
                    <Form.Label>Nombre/s:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        defaultValue=""
                    />
                    <Form.Control.Feedback>Parece bien!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationApellido">
                    <Form.Label>Apellido:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        defaultValue=""
                    />
                    <Form.Control.Feedback>Parece bien!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="8" controlId="validationLinkedIn">
                    <Form.Label>LinkedIn:</Form.Label>
                    <Form.Control type="text" placeholder="" required />
                    <Form.Control.Feedback type="invalid">
                        Debe ingresar su LinkedIn
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationEdad">
                    <Form.Label>Edad</Form.Label>
                    <Form.Control type="number" placeholder="" required />
                    <Form.Control.Feedback type="invalid">
                        Debe ser mayor de edad
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="8" controlId="validationProfesion">
                    <Form.Label>Profesión:</Form.Label>
                    <Form.Control type="text" placeholder="" required />
                    <Form.Control.Feedback type="invalid">
                        Debe ingresar una Profesión
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationFullTime">
                    <ListGroup.Item>
                        <p>Fulltime:</p>
                        <label>
                            <input
                                type="checkbox"
                                checked={fulltimeYes}
                                onChange={() => handleCheckboxChange('Si', 'Si')}
                            />
                            <span> Si </span>
                        </label>
                        <p />
                        <label>
                            <input
                                type="checkbox"
                                checked={fulltimeNo}
                                onChange={() => handleCheckboxChange('No', 'Si')}
                            />
                            <span> No </span>
                        </label>
                    </ListGroup.Item>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationMovilidad">
                    <ListGroup.Item>
                        <p>Movilidad:</p>
                        <label>
                            <input
                                type="checkbox"
                                checked={movilidadYes}
                                onChange={() => handleCheckboxChange('Si', 'No')}
                            />
                            <span> Si </span>
                        </label>
                        <p />
                        <label>
                            <input
                                type="checkbox"
                                checked={movilidadNo}
                                onChange={() => handleCheckboxChange('No', 'No')}
                            />
                            <span> No </span>
                        </label>
                    </ListGroup.Item>
                </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group as={Col} md="auto" controlId="validationSkills">
                    <Form.Label>Skills:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="min 3, max 5"
                        defaultValue=""
                    />
                    <Form.Control.Feedback>Parece bien!</Form.Control.Feedback>
            </Form.Group>
            </Row>
            <Row>
            <Form.Group controlId="formFile">
                  <Form.Label>Foto Perfil:</Form.Label>
                  <Form.Control type="file" accept='.jpg, .jpeg, .png'  />
                    <Form.Text className="text-danger"></Form.Text>
                </Form.Group>
            </Row>
            <Form.Group className="mb-3">
                <Form.Check
                    required
                    label="Acepto los terminos y condiciones de Futurama"
                    feedback="Debe aceptar antes de continuar"
                    feedbackType="invalid"
                />
            </Form.Group>
            <Button type="submit">Cargar Tarjeta</Button>
        </Form>
    );
}

export default FormCandidato;