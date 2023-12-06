import React from 'react';
import { Modal, Tab, Tabs } from 'react-bootstrap';
import { Formulario } from './Formulario';
import { CargarCV } from './CargarCV';
import './AplicarCV.css';

interface PopUpProps {
  showModal: boolean;
  empleo: string;
  onClose: () => void;
}

export const PopUp: React.FC<PopUpProps> = ({showModal, empleo, onClose}) => {
  return (
    <>
      <Modal show={showModal} onHide={onClose} className='containerAplicar'>
        <Modal.Header className='headerAplicar' closeButton>
          <Modal.Title>Aplicar a {empleo}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bodyAplicar'>
          <Tabs variant="underline" defaultActiveKey="personalInfo" id="popup-tabs">
            <Tab eventKey="personalInfo" title="Formulario">
            <p />
              <Formulario onClose={onClose}></Formulario>
            </Tab>

            <Tab eventKey="fileUpload" title="Cargar CV">
              <p />
              <CargarCV onClose={onClose}></CargarCV>
            </Tab>
          </Tabs>
        </Modal.Body>
        
      </Modal>
    </>
  );
};
