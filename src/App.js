import React from 'react';
import { useContext } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppModal from './components/AppModal'
import MainContext from './contexts/MainContext';

function App(props) {
  const {
    handleShowModal
  } = useContext(MainContext)

  const toggleModal = () => {
    handleShowModal(true);
  }

  return (
    <div>
      <h1>Click for modal</h1>
      <button onClick={toggleModal}>Click me</button>

      <AppModal />
    </div>
  );
}

export default App;
