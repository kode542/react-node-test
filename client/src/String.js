import React from 'react';
// import './App.css';
import axios from 'axios';

class String extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            string: '',
            textLabel: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({string: event.target.value});
    }

    handleSubmit(event) {
        axios.post('/api', {
            text: this.state.string
        })
            .then(response => {
                this.setState({textLabel: response['data']})
            }).catch(function (error) {
            console.log(error.response);
            });
        event.preventDefault();
        console.log(this.state.string + " has been POSTED to /api")
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Enter your text here:
                        <input type="text" value={this.state.string} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>

                <label>
                    {this.state.textLabel}
                </label>
            </React.Fragment>
        );
    }
}

export default String;