import React, { Component } from 'react';
import StyledIcon from './StyledIcon'
class Icon extends Component {
    render(){
        return (
            <StyledIcon>
            <i class={this.props.name} aria-hidden="true"></i>
            </StyledIcon>
        )
    }
}

export default Icon;