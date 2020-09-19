import React, { Component } from 'react';

const MainContext = React.createContext({
    showModal: false,
    handleShowModal: () => {}
})

export default MainContext;

export class MainContextProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false
        }
    }

    handleShowModal = (showModal) => {
        this.setState({
            showModal
        })
    }

    render() {
        const value = {
            showModal: this.state.showModal,

            handleShowModal: this.handleShowModal
        }
        return (
            <MainContext.Provider value={value}>
                {this.props.children}
            </MainContext.Provider>
        );
    }
}