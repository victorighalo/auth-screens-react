import React, { Component } from 'react';
import styled from 'styled-components';
import Wrapper from './Wrapper.js'
import Styledbutton from './Styledbutton'

const Btnbg = styled.div`
position: absolute;
z-index:-1;
width: 300%;
height: 100%;
background: #a64bf4;
background: -webkit-linear-gradient(right, #00dbde, #fc00ff, #00dbde, #fc00ff);
background: -o-linear-gradient(right, #00dbde, #fc00ff, #00dbde, #fc00ff);
background: -moz-linear-gradient(right, #00dbde, #fc00ff, #00dbde, #fc00ff);
background: linear-gradient(right, #00dbde, #fc00ff, #00dbde, #fc00ff);
top: 0;
left: -100%;
-webkit-transition: all 0.4s;
-o-transition: all 0.4s;
-moz-transition: all 0.4s;
transition: all 0.4s;
:hover {
    left:0
}
`
class Button extends Component {
    render() {
      return (
        <Wrapper className="btn-wrap">
            <Btnbg className="btn-bg"/>
          <Styledbutton>{this.props.text}</Styledbutton>
        </Wrapper>
      );
    }
  }

export default Button;