import React from 'react';
import FormInput from '../form-input/form-input.components';
import CustomButton from '../custom-button/custom-button.components';
import { signInWithGoogle } from '../../firebase/firebase.utils'
import './signIn.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            email: '',
            password: ''
        })
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }


    render() {
        return (
            <div className="sign-in">
                <h1 className="title">I already have an account</h1>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        label='Email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        label='Password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required
                    />
                    <div className="buttons">
                        <CustomButton type="submit" >Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                    </div>

                </form>

            </div>
        )
    }
}

export default SignIn;