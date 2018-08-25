import React, { Component } from 'react';
import './App.css';
import Method from './Method';
import String from './String';

class App extends Component {


    render() {
        return (
            <React.Fragment>
                <String/>
                <Method/>
            </React.Fragment>
        );
    }
}

export default App;