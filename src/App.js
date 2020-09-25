import React from 'react';
import { useState, useContext, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppModal from './components/AppModal'
import MainContext from './contexts/MainContext';
import useCursorPos  from './hooks/useCursorPos';
import CatApiService from './services/cat-api-service';

function App(props) {
  const [catImage, setCatImage] = useState();

  const {
    showModal,
    permitModal,
    handlePermitModal,
    handleShowModal
  } = useContext(MainContext)

  useEffect(() => {
    handleCatApi();

    setTimeout(() => {
      handlePermitModal(true);
    }, 5000)
  }, [])

  const handleCatApi = () => {
    CatApiService.getCat()
      .then(cat => {
        setCatImage(cat[0].url);
      })
  }

  const { x, y } = useCursorPos();

  const hasMovedCursor = typeof x === "number" && typeof y === "number";

  const toggleModal = () => {
    handleShowModal(true);
    handleCatApi();
  }

  if (y === 0 && permitModal && !showModal) {
    toggleModal();
    handlePermitModal(false);

    setTimeout(() => {
      handlePermitModal(true);
    }, 5000);
  }

  return (
    <div className="App">
      <h1>Random site title!</h1>
      <p>Random site body!</p>
      {/* <button onClick={toggleModal}>Click me</button> */}
      {/* <h1>
        {hasMovedCursor
          ? `Cursor is at ${x}, ${y}.`
          : "Move mouse."}
      </h1> */}

      <AppModal catImage={catImage} setCatImage={setCatImage} />
    </div>
  );
}

export default App;
