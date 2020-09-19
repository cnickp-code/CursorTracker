import React from 'react';
import { useEffect, useState, useContext } from 'react';
import CatApiService from '../services/cat-api-service';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import MainContext from '../contexts/MainContext';

const catNames = ['Percy', 'Mittens', 'Jasper', 'Muffin', 'Spag', 'Pebbles'];

function AppModal(props) {
    const [catImage, setCatImage] = useState();
    const [catName, setCatName] = useState();
    const [loading, setLoading] = useState(false);
    const {
        showModal,
        handleShowModal
    } = useContext(MainContext);

    useEffect(() => {
        setLoading(true);
        randCatName();

        CatApiService.getCat()
            .then(cat => {
                setCatImage(cat[0].url);
                setLoading(false);
            })
    }, [])

    const handleClose = () => {
        handleShowModal(false);
        setLoading(true);
        randCatName();

        CatApiService.getCat()
            .then(cat => {
                setCatImage(cat[0].url);
                setLoading(false);
            })
    }

    const randCatName = () => {
        const randIndex = Math.floor(Math.random() * Math.floor(catNames.length));
        setCatName(catNames[randIndex]);
    }

    return (
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {loading && <p>Purr...</p>}
                {!loading &&
                    <div className="modal-container">
                        <img src={catImage} className="modal-image" alt="kitty" />
                    </div>
                }
                <p className="modal-text">Please stayyyyy! {catName} said so!</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AppModal;