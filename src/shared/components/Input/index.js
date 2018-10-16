import React, { Component } from 'react';
import StyledInput from './Input'
import InputWrapper from './Wrapper'
import Label from './Label'
import Icon from './Icon'

class Input extends Component {
    render(){
        return (
            <InputWrapper>
                     <Label>{this.props.label}</Label>
                <StyledInput placeholder={this.props.placeholder}/>
                <span className="focus-input"/>
                <Icon name={this.props.name}/>
            </InputWrapper>
        )
    }
}

export default Input;