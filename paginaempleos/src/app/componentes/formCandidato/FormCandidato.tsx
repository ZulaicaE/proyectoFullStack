import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { ListGroup } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import './FormCandidato.css'


//
function FormCandidato({ onSubmitCandidato }: { onSubmitCandidato: (nuevoCandidato: any) => void }) {
    const { handleSubmit, register, formState: { errors }, getValues } = useForm();
    const [file, setFile] = useState<any>();
    const [fulltimeYes, setFulltimeYes] = useState<boolean>(false);
    const [fulltimeNo, setFulltimeNo] = useState<boolean>(false);
    const [movilidadYes, setMovilidadYes] = useState<boolean>(false);
    const [movilidadNo, setMovilidadNo] = useState<boolean>(false);

    const onSubmit = (form: any) => {

        const formData = {
            id: "0",
            nombre: getValues("validationName"),
            apellido: getValues("validationApellido"),
            edad: getValues("validationEdad"),
            linkCV: getValues("validationLinkedIn"),
            skills: getValues("validationSkills"),
            fulltime: fulltimeYes ? 'Si' : fulltimeNo ? 'No' : '',
            movilidad: movilidadYes ? 'Si' : movilidadNo ? 'No' : '',
            img: file,
            puesto: getValues("validationProfesion")
        };

        onSubmitCandidato(formData);

        Swal.fire({
            title: '¡Éxito!',
            text: 'Su tarjeta se ha publicado',
            icon: 'success',
            showConfirmButton: true,
            confirmButtonText: 'Listo'
        });
    };

    const validateSkills = (value: string) => {
        const skillsArray = value.split(',').map(skill => skill.trim());
        const skillsCount = skillsArray.length;
    
        if (skillsCount < 3 || skillsCount > 5) {
          return 'Por favor ingresa entre 3 y 5 habilidades separadas por comas.';
        }
    
        return true;
      };

    const handleOnChangeImg = (e: any) => {
        setFile(URL.createObjectURL(e.target.files[0]));
    }

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
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Row className="mb-3">
                <Form.Group as={Col} md="6">
                    <Form.Label>Nombres:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        defaultValue=""
                        className='inputForm'
                        {...register('validationName', {
                            required: 'Este campo es obligatorio.',
                            pattern: {
                                value: /^([a-zA-Z]+\s?)+$/,
                                message: 'Ingrese un nombre valido'
                            },
                          })}
                    />
                    <Form.Control.Feedback>Parece bien!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6">
                    <Form.Label>Apellido:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        defaultValue=""
                        className='inputForm'
                        {...register('validationApellido', 
                        { required: 'Este campo es obligatorio.',
                        pattern: {
                            value: /^([a-zA-Z]+\s?)+$/,
                            message: 'Ingrese un apellido valido.'
                        }, 
                    })}
                    />
                    <Form.Control.Feedback>Parece bien!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="8">
                    <Form.Label>LinkedIn:</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="linkedin.com/SuPerfil" 
                        required 
                        className='inputForm'
                        {...register('validationLinkedIn', {
                            required: 'Este campo es obligatorio.',
                            pattern: {
                              value: /^(www\.)?linkedin\.com\/[a-zA-Z]+$/,
                              message: 'Ingrese un enlace de perfil de LinkedIn válido',
                            },
                          })}
                    />
                    <Form.Control.Feedback type="invalid">
                        Debe ingresar su LinkedIn
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4">
                    <Form.Label>Edad:</Form.Label>
                    <Form.Control 
                        type="number" 
                        required 
                        className='inputForm'
                        {...register('validationEdad', { required: 'Este campo es obligatorio.' })}
                    />
                    <Form.Control.Feedback type="invalid">
                        Debe ser mayor de edad
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="8">
                    <Form.Label>Profesión:</Form.Label>
                    <Form.Control 
                        type="text"  
                        required 
                        className='inputForm'
                        {...register('validationProfesion', {
                            required: 'Este campo es obligatorio.',
                          })}
                    />
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
                                className='fulltimeMovilidadPointer form-check-input'
                            />
                            <span className='fulltimeMovilidadPointer'> Si </span>
                        </label>
                        <p />
                        <label>
                            <input
                                type="checkbox"
                                checked={fulltimeNo}
                                onChange={() => handleCheckboxChange('No', 'Si')}
                                className='fulltimeMovilidadPointer form-check-input'
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
                                className='fulltimeMovilidadPointer form-check-input'
                            />
                            <span className='fulltimeMovilidadPointer'> Si </span>
                        </label>
                        <p />
                        <label>
                            <input
                                type="checkbox"
                                checked={movilidadNo}
                                onChange={() => handleCheckboxChange('No', 'No')}
                                className='fulltimeMovilidadPointer form-check-input'
                            />
                            <span className='fulltimeMovilidadPointer'> No </span>
                        </label>
                    </ListGroup.Item>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="auto">
                    <Form.Label>Skills:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="min. 3, max. 5"
                        defaultValue=""
                        className='inputForm'
                        {...register('validationSkills', {
                            required: 'Este campo es obligatorio.',
                            validate: validateSkills
                          })}
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
                        onChange={handleOnChangeImg}
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