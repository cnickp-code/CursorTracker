import React, { Component } from 'react';

const MainContext = React.createContext({

})

class MainContext extends Component {
    constructor(props) {
        super(props)
        const state = {

        }
    }

    render() {
        const value = {

        }
        return (
            <MainContext.Provider value={value}>
                {this.props.children}
            </MainContext.Provider>
        );
    }
}

export default MainContext;