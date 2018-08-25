import React from 'react';
import axios from 'axios';


class Method extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            method: 'get',
            url: '',
            resText: ''
        };
// Bind this keyword on these methods
        this.handleChangeMethod = this.handleChangeMethod.bind(this);
        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

// When the method changes re-set its state
    handleChangeMethod(event) {
        this.setState({method: event.target.value});
    }

// When url input changes re-set its state
    handleChangeInput(event) {
        this.setState({url: event.target.value});
    }

// Handle the submission of the form
    handleSubmit(event) {
        axios.post('/api', {
            method: this.state.method,
            url: this.state.url
        })
            .then(response => {
                console.log(response);
                this.setState({resText: response['data']})
            }).catch(function (error) {
            console.log(error.response);
            });
        event.preventDefault();
    }


    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>

                    {/*Dropdown list*/}
                    <label>
                        Select HTTP Method:
                        <select value={this.state.method} onChange={this.handleChangeMethod}>
                            <option value="get">GET</option>
                            <option value="post">POST</option>
                        </select>
                    </label>

                    {/*URL input*/}
                    <label>
                        Enter the URL:
                        <input type="text" value={this.state.url} onChange={this.handleChangeInput} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <label>
                    {this.state.resText}
                </label>

            </React.Fragment>
        );
    }
}

export default Method;