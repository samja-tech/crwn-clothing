import React from 'react';
import SignIn from '../../components/signIn/signIn.components'
import SignUp from '../../components/sign-up/sign-up.components';
import './sign-in-and-sign-up-page.styles.scss';

const SigninandSiginupPage = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
)

export default SigninandSiginupPage;