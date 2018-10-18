import React, { Component } from 'react';
import styled from 'styled-components';
import InputWrapper from './Wrapper'
import Label from './Label'
import Icon from './Icon'


class Input extends Component {
    render(){
        const StyledInput = styled.input`
        outline: none;
        border: none;
        font-size: 16px;
        color: #333333;
        line-height: 1.2;
        display: block;
        width: 100%;
        height: 55px;
        background: transparent;
        padding: 0 7px 0 43px;
        :focus{ color:#333; background: transparent }
        `

        const StyledInputNoIcon = styled.input`
        outline: none;
        border: none;
        font-size: 16px;
        color: #333333;
        line-height: 1.2;
        display: block;
        width: 100%;
        height: 35px;
        background: transparent;
        padding: 0 7px 0 3px;
        :focus{ color:#333; background: transparent }
        `
        const showlabel = this.props.showlabel;
        const showicon = this.props.showicon;
        let iconelement;
        let labelelement;
        let input;
        if(showlabel){ 
            labelelement = <Label>{this.props.label}</Label> 
        }
        if(showicon){ 
            iconelement = <Icon iconname={this.props.iconname}/>
            input = <StyledInput placeholder={this.props.placeholder}/>
        }else{
            input = <StyledInputNoIcon placeholder={this.props.placeholder}/>
        }
        return (
            <InputWrapper>
                     {labelelement}
                {input}
                <span className="focus-input"/>
                {iconelement}
            </InputWrapper>
        )
    }
}

export default Input;