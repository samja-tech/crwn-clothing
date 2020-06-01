import React from 'react';
import {connect} from 'react-redux';
import CustomButton from '../custom-button/custom-button.components';
import { signUpStart } from '../../redux/user/user.actions';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.components';

class SignUp extends React.Component {

    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { signUpStart } = this.props;
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("Password don't match");
            return;
        }
       signUpStart({ displayName,email,password });
    }
    handleChange = event => {
        const {name,value} = event.target;
        this.setState({[name]:value});
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h1 className="title">I do not have an account</h1>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        label="Display Name"
                        value={displayName}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type="email"
                        name="email"
                        label="email"
                        value={email}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        label="password"
                        value={password}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        label="confirm Password"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        required
                    />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>

            </div>
        )
    }
}
const mapDispatchToProps = dispatch =>({
    signUpStart: userCredential => dispatch(signUpStart(userCredential))
})
export default connect(null,mapDispatchToProps)(SignUp);