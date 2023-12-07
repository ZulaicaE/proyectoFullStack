import React from 'react';
import { Button, Form, Col, Row } from 'react-bootstrap';
import { useForm, SubmitHandler } from 'react-hook-form';
import Swal from 'sweetalert2';

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    url: string;
  }

interface FormularioProps {
    onClose: () => void;
}

export const Formulario: React.FC<FormularioProps> = ({onClose}) => {
    
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<FormData>();

    const handlePersonalInfoSubmit: SubmitHandler<FormData> = (data: any) => {
        console.log('Información personal enviada:', data);
        const validationSuccessful = true;
        if (validationSuccessful) {
          onClose();
          
          Swal.fire({
            confirmButtonColor: '#61d2b4',
            icon: "success",
            title: "Formulario enviado con exito.",
            showConfirmButton: true,
            confirmButtonText: 'Listo'
          });
        }
        onClose();
    };
    
return (
        <>
            <Form onSubmit={handleSubmit(handlePersonalInfoSubmit)}>
                <Row>
                  <Form.Group as={Col} controlId="formFirstName">
                    <Form.Label>Nombre:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingrese su nombre"
                      {...register('firstName', {
                        required: 'Este campo es obligatorio.',
                        minLength: { value: 2, message: 'El nombre debe tener al menos 2 caracteres' },
                      })}
                      className='inputForm'
                    />
                    <Form.Text className="text-danger">{errors.firstName?.message}</Form.Text>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formLastName">
                    <Form.Label>Apellido:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingrese su apellido"
                      {...register('lastName', { required: 'Este campo es obligatorio.' })}
                      className='inputForm'
                    />
                    <Form.Text className="text-danger">{errors.lastName?.message}</Form.Text>
                  </Form.Group>
                </Row>  
                <p />
                  <Form.Group as={Col} controlId="formEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Ingrese su email"
                      {...register('email', {
                        required: 'Este campo es obligatorio.',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: 'Dirección de correo electrónico no válida',
                        },
                      })}
                      className='inputForm'
                    />
                    <Form.Text className="text-danger">{errors.email?.message}</Form.Text>
                    <p />
                    <Form.Label>LinkedIn:</Form.Label>
                    <Form.Control
                      type='url'
                      placeholder='https://www.linkedin.com/in/ejemplo'
                      {...register('url', {
                        required: 'Este campo es obligatorio.',
                        pattern: {
                          value: /^(https?:\/\/)?(www\.)?linkedin\.com\/(in|pub)\/.+/i,
                          message: 'Ingresa un enlace de perfil de LinkedIn válido',
                        },
                      })}
                      className='inputForm'
                    />
                    <Form.Text className="text-danger">{errors.url?.message}</Form.Text>
                  </Form.Group>
                  <p />
                <Button variant="primary" type="submit" className='btnEnviar'>
                  Enviar
                </Button>
              </Form>
            </>
);
}