import React, { Component } from 'react';

const MainContext = React.createContext({
    showModal: false,
    permitModal: false,

    handleShowModal: () => {},
    handlePermitModal: () => {}
})

export default MainContext;

export class MainContextProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            permitModal: false,
        }
    }

    handleShowModal = (showModal) => {
        this.setState({
            showModal
        })
    }

    handlePermitModal = (permitModal) => {
        this.setState({
            permitModal
        })
    }

    render() {
        const value = {
            showModal: this.state.showModal,
            permitModal: this.state.permitModal,

            handleShowModal: this.handleShowModal,
            handlePermitModal: this.handlePermitModal,
        }
        return (
            <MainContext.Provider value={value}>
                {this.props.children}
            </MainContext.Provider>
        );
    }
}