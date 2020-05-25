import React from'react';
import  {CustomButtonContainer} from './custom-button.styles';

const CustomButton = ({children,...otherprops}) => (
    <CustomButtonContainer {...otherprops}>{children}</CustomButtonContainer>
)

export default CustomButton;