import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectHiddenCart } from '../../redux/cart/cart.selector';
import { signOutStart } from '../../redux/user/user.actions';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.components';
import CartDropDown from '../cart-dropdown/cart-dropdown.components';

import {HeaderContainer,LogoContainer,OptionContainer,OptionContainerLink} from './header.styles'

const Header = ({ currentUser,hidden,signOutStart }) => (

    <HeaderContainer>
        <LogoContainer to="/" >
            <Logo className="logo" />
        </LogoContainer>
        <OptionContainer>
            <OptionContainerLink to="/shops">SHOP</OptionContainerLink>
            <OptionContainerLink to='/' >CONTACT</OptionContainerLink>
            {
                currentUser ?
                    <OptionContainerLink as='div' onClick={signOutStart}>SIGN OUT</OptionContainerLink>
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
const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStatetoProps,mapDispatchToProps)(Header);