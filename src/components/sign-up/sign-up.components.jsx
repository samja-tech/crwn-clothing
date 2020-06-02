import React, { useState } from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.components';
import { signUpStart } from '../../redux/user/user.actions';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.components';

const SignUp = ({ signUpStart }) => {

    const [userCredentials, setCredential] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Password don't match");
            return;
        }
        signUpStart({ displayName, email, password });
    }
    const handleChange = event => {
        const { name, value } = event.target;
        setCredential({ ...userCredentials, [name]: value });
    }


    return (
        <div className="sign-up">
            <h1 className="title">I do not have an account</h1>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    name="displayName"
                    label="Display Name"
                    value={displayName}
                    onChange={handleChange}
                    required
                />
                <FormInput
                    type="email"
                    name="email"
                    label="email"
                    value={email}
                    onChange={handleChange}
                    required
                />
                <FormInput
                    type="password"
                    name="password"
                    label="password"
                    value={password}
                    onChange={handleChange}
                    required
                />
                <FormInput
                    type="password"
                    name="confirmPassword"
                    label="confirm Password"
                    value={confirmPassword}
                    onChange={handleChange}
                    required
                />
                <CustomButton type="submit">SIGN UP</CustomButton>
            </form>

        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredential => dispatch(signUpStart(userCredential))
})
export default connect(null, mapDispatchToProps)(SignUp);