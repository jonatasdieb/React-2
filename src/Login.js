import React, { Component } from 'react';
import api from './Services/Api';

const espaco = {
    'margin-top': '100px'
};

class Login extends Component {

    login = () => {
        const user = {
            username: this.refs.username,
            password: this.refs.password
        }

        api.Login(user)
            .then(res => console.log(res));

    }


    render() {
        return (
            <div style={espaco}>
                <form>
                    <input type='text' ref='username' placeholder='Username' />
                    <input type='password' ref='password' placeholder='Password' />
                    <button type="button" className="btn btn-primary" onClick={this.login} value="Login" />
                </form>
            </div>
        )
    }
}

export default Login;