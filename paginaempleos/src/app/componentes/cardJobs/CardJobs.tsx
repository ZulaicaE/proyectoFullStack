import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Collapse } from 'react-collapse';
import './CardJobs.css';
import { PopUp } from '../aplicarCV/AplicarCV';

interface CardJobsProps {
    empleo: {
        id: string;
        empresa: string;
        empleo: string;
        rubro: string;
        descripcion: string;
        requisitos: string;
        cargaHoraria: string;
        img: string;
    };
}

export const CardJobs: React.FC<CardJobsProps> = ({ empleo }) => {

    const [showModal, setShowModal] = useState(false);
    const [collapseAbierto, setCollapse] = useState(false);

    const botonCollapse = () => {
        setCollapse (!collapseAbierto) 
    };

    return (
        <Card className="cardJobs">
            <Card.Img className="jobsImg img-fluid" variant="top" src={empleo.img} />
            <Card.Body>
                <Card.Title className="tituloCardJobs">{empleo.empleo}</Card.Title>
                <p><strong>{empleo.empresa}</strong></p>
                <div className={collapseAbierto ? "d-flex justify-content-center botonCVnopadd" : "d-flex justify-content-center botonCV"}>
                
                </div>
                <Collapse isOpened={collapseAbierto}>
                    <div>
                        <Card.Text>
                            <u>Rubro</u>: <span>{empleo.rubro}</span><br />
                            <u>Descripción</u>: <span>{empleo.descripcion}</span><br />
                            <u>Carga Horaria</u>: <span>{empleo.cargaHoraria}</span><br />
                            <u>Requisitos</u>: <span>{empleo.requisitos}</span>
                        </Card.Text>
                    </div>
                </Collapse>
                <div className="d-flex justify-content-center botonCV" >
                <Button variant="outline-dark" onClick={botonCollapse}>
                    {collapseAbierto ? 'Ocultar Detalles' : 'Mostrar Detalles'}
                </Button>
                <Button variant="outline-dark" onClick={() => setShowModal(true)}>
                    Aplicar
                </Button>
            </div>
            </Card.Body>
            
            <PopUp showModal={showModal} empleo={empleo.empleo} onClose={() => setShowModal(false)} />
        </Card>
    );
};