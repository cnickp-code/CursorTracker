import React from 'react';
import { useState, useContext, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppModal from './components/AppModal'
import MainContext from './contexts/MainContext';
import useMousePosition from './hooks/useMousePosition';

function App(props) {

  const {
    permitModal,
    handlePermitModal,
    handleShowModal
  } = useContext(MainContext)

  useEffect(() => {
    setTimeout(() => {
      handlePermitModal(true);
    }, 5000)
  }, [])

  const { x, y } = useMousePosition();

  const hasMovedCursor = typeof x === "number" && typeof y === "number";

  const toggleModal = () => {
    handleShowModal(true);
  }

  if(y === 0 && permitModal) {
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
      <h1>
        {hasMovedCursor
          ? `Cursor is at ${x}, ${y}.`
          : "Move mouse."}
      </h1>

      <AppModal />
    </div>
  );
}

export default App;
