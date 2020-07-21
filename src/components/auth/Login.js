import React from "react";
import '../main/font-awesome-icons/Font-awesome-icons'
import {auth} from "../../services/Database";
import SignIn from "./Sign-in";
import {Link, Route} from "react-router-dom";
import SignUp from "./Sign-up";
import SnackBar from "../main/Snack-bar";

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isError: false,
            errorText: ''
        }
    }

    signIn = (e) => {
        const {email, password} = this.state
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password).then(res => {
            this.setState({isError: false})
        }).catch(err => {
            this.setState({
                isError: true,
                errorText: err.message
            })
        }).finally(() => {
            this.setState({email: '', password: ''})
        })
    }

    signUp = (e) => {
        const {email, password} = this.state
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, password).catch(err => console.log(err.message))
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            isError: false
        })
    }

    render() {
        const {isError, email, password, errorText} = this.state
        return (
            <div className="login-page">
                <h1>Login</h1>
                <form>
                    <SignIn isError={isError}
                            email={email}
                            password={password}
                            onChange={this.handleChange}
                            signIn={this.signIn}/>
                </form>
                <Link to="/auth/sign-up">
                    <button className="btn">Sign up</button>
                </Link>
                <Route exact path="/auth/sign-up">
                    <div className="auth-container sign-up-container">
                        <SignUp/>
                    </div>
                </Route>
                {isError && errorText && <SnackBar errorText={errorText}/>}
            </div>
        )
    }
}
