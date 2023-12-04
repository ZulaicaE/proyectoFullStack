import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm, SubmitHandler } from 'react-hook-form';
import Swal from 'sweetalert2';

interface FormData {
    pdfFile: FileList;
}

interface CargarCVProps {
    onClose: () => void;
}

export const CargarCV: React.FC<CargarCVProps> = ({onClose}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<FormData>();

    
      const handleFileUploadSubmit: SubmitHandler<FormData> = (data: any) => {
        console.log('Archivo enviado:', data);
        const validationSuccessful = true;
        if (validationSuccessful) {
          onClose();
          
          Swal.fire({
            confirmButtonColor: '#61d2b4',
            icon: "success",
            title: "Archivo enviado con exito.",
            showConfirmButton: true,
            confirmButtonText: 'Listo'
          });
        }
        onClose();
      };

return (
        <>
            <Form onSubmit={handleSubmit(handleFileUploadSubmit)}>
                <Form.Group controlId="formFile">
                  <Form.Label>Seleccionar Archivo PDF</Form.Label>
                  <Form.Control type="file" accept='.pdf' {...register('pdfFile',  {
                      required: 'Este campo es obligatorio.',
                    })} />
                    <Form.Text className="text-danger">{errors.pdfFile?.message}</Form.Text>
                </Form.Group>
                <p />
                <Button variant="primary" type="submit">
                  Enviar
                </Button>
            </Form>
        </>
);
}