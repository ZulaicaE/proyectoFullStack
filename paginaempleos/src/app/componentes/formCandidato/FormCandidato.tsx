import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { ListGroup } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import './FormCandidato.css'


//
function FormCandidato({ onSubmitCandidato }: { onSubmitCandidato: (nuevoCandidato: any) => void }) {
    const [validated, setValidated] = useState(false);
    const [fulltimeYes, setFulltimeYes] = useState<boolean>(false);
    const [fulltimeNo, setFulltimeNo] = useState<boolean>(false);
    const [movilidadYes, setMovilidadYes] = useState<boolean>(false);
    const [movilidadNo, setMovilidadNo] = useState<boolean>(false);

    const handleFormSubmit = (event: any) => {
        const form = event.currentTarget;

        const formData = {
            id: "0",
            nombre: form.elements["validationName"].value,
            apellido: form.elements["validationApellido"].value,
            edad: form.elements["validationEdad"].value,
            linkCV: form.elements["validationLinkedIn"].value,
            skills: form.elements["validationSkills"].value,
            fulltime: fulltimeYes ? 'Si' : fulltimeNo ? 'No' : '',
            movilidad: movilidadYes ? 'Si' : movilidadNo ? 'No' : '',
            img: form.elements["formFile"].value.split('\\').pop(),
            puesto: form.elements["validationProfesion"].value
        };

        console.log(formData);

        event.preventDefault();
        event.stopPropagation();

        onSubmitCandidato(formData);

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
                        className='inputForm'
                    />
                    <Form.Control.Feedback>Parece bien!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationApellido">
                    <Form.Label>Apellido:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        defaultValue=""
                        className='inputForm'
                    />
                    <Form.Control.Feedback>Parece bien!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="8" controlId="validationLinkedIn">
                    <Form.Label>LinkedIn:</Form.Label>
                    <Form.Control type="text" placeholder="" required className='inputForm'/>
                    <Form.Control.Feedback type="invalid">
                        Debe ingresar su LinkedIn
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationEdad">
                    <Form.Label>Edad:</Form.Label>
                    <Form.Control type="number" placeholder="" required className='inputForm'/>
                    <Form.Control.Feedback type="invalid">
                        Debe ser mayor de edad
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="8" controlId="validationProfesion">
                    <Form.Label>Profesión:</Form.Label>
                    <Form.Control type="text" placeholder="" required className='inputForm'/>
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
                                className='fulltimeMovilidadPointer'
                            />
                            <span className='fulltimeMovilidadPointer'> Si </span>
                        </label>
                        <p />
                        <label>
                            <input
                                type="checkbox"
                                checked={fulltimeNo}
                                onChange={() => handleCheckboxChange('No', 'Si')}
                                className='fulltimeMovilidadPointer'
                            />
                            <span className='fulltimeMovilidadPointer'> No </span>
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
                                className='fulltimeMovilidadPointer'
                            />
                            <span className='fulltimeMovilidadPointer'> Si </span>
                        </label>
                        <p />
                        <label>
                            <input
                                type="checkbox"
                                checked={movilidadNo}
                                onChange={() => handleCheckboxChange('No', 'No')}
                                className='fulltimeMovilidadPointer'
                            />
                            <span className='fulltimeMovilidadPointer'> No </span>
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
                        className='inputForm'
                    />
                    <Form.Control.Feedback>Parece bien!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group controlId="formFile">
                    <Form.Label>Foto Perfil:</Form.Label>
                    <Form.Control
                        type="file"
                        accept=".jpg, .jpeg, .png"
                    />
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
            <Button type="submit" className='btnCargarOff'>Cargar Tarjeta</Button>
        </Form>
    );
}

export default FormCandidato;