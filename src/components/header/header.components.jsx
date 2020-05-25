import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectHiddenCart } from '../../redux/cart/cart.selector';
import { auth } from '../../firebase/firebase.utils'
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.components';
import CartDropDown from '../cart-dropdown/cart-dropdown.components';

import {HeaderContainer,LogoContainer,OptionContainer,OptionContainerLink} from './header.styles'

const Header = ({ currentUser,hidden }) => (

    <HeaderContainer>
        <LogoContainer to="/" >
            <Logo className="logo" />
        </LogoContainer>
        <OptionContainer>
            <OptionContainerLink to="/shops">SHOP</OptionContainerLink>
            <OptionContainerLink to='/' >CONTACT</OptionContainerLink>
            {
                currentUser ?
                    <OptionContainerLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionContainerLink>
                    : <OptionContainerLink to="/signin">SIGN IN</OptionContainerLink>
            }
            <CartIcon />
        </OptionContainer>
        {
            hidden?null:<CartDropDown />
        }
        
    </HeaderContainer>
);
const mapStatetoProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectHiddenCart
});

export default connect(mapStatetoProps)(Header);