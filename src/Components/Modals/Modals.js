

import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const Modals = (props) => {
    console.log(props.products);
 const { title,image,id,description,price} = props.products;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Button variant="primary" onClick={handleShow}>
          Details 
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
             
              <img className='w-50 m-auto' src={image} alt="" />
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <h6 className='m-2 p-2'>Price: {price}</h6>
          <Modal.Body > {description}</Modal.Body>
          <h2> id: {id}</h2>
        
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
};

export default Modals;