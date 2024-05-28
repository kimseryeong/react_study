import React, { Component } from 'react';
import './ValidationSample.css';
import MyComponent from './MyComponent';

const name = 'seryeong';

class validationSample extends Component{
    state = {
        password: ''
        ,clicked: false
        ,validated: false
    }

    handleChange = e => {
        this.setState({
            password: e.target.value
        });
    }

    handleButtonClick = () => {
        this.setState({
            clicked: true
            ,validated: this.state.password === '0000'
        });
        this.input.focus();
    }

    
    render(){
        return (
            <div>
                <input 
                    ref={(ref) => this.input = ref}
                    type='password'
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
                />
                <button onClick={this.handleButtonClick}>검증하기</button>
                <MyComponent 
                    ref={(ref) => this.myComponent=ref} 
                    name={name}
                >[짜식]</MyComponent>
            </div>
        );
    }
}

export default validationSample;