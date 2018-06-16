import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import css from './login.css';

const formStyle={
    width: "400px"
}

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            user:'',
            password:'',
            section: 'manage'
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        axios.post("/api/manage/login",
            {
                user: this.state.user,
                password: this.state.password
            })
            .then((resp) => {
                window.localStorage.setItem("token", resp.data.token);
                this.props.history.push("/manage");
                
            })
            .catch((err) => {
                console.error(err);
            })
    }
    
    render(){
        return(
            <div className='row'>
                <div className='col-md-12' >
                        <form className="login-form text-center" onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className='col-md-5 mx-auto'>
                                    <h3>Admin Login</h3>
                                </div>
                            </div>
                            <div className="row">    
                                <div className="col-md-5 mx-auto">
                                    <label>
                                        Username/Email:
                                    <input name="user" type="text" value={this.state.value} onChange={this.handleChange} />
                                    </label>
                                    <label>
                                        Password:
                                    <input name="password" type="password" value={this.state.value} onChange={this.handleChange} />
                                    </label>
                                    <br></br>
                                </div>
                            </div>
                            <div className="row">
                                <input className="submit btn btn-primary mx-auto" type="submit" value="Submit" />
                            </div>
                        </form>
                </div>    
            </div>
        )
    }
}

export default Login;