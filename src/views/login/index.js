import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Container from '../../shared/components/Container';
import Wrapper from './Wrapper.js'
import Section from './Section.js'
import Input from '../../shared/components/Input/index'
import Button from '../../shared/components/Button/index'
import styled from 'styled-components'
const Forgotpsw = styled.span`
color:#666666;
float:right;
margin-top:-15px;
font-size:12px;
cursor:pointer;
:hover{
  color:#a64bf4
}
`
const Signup = styled.span`
color:#666666;
text-align:center;
margin-top:-15px;
cursor:pointer;
:hover{
  color:#a64bf4
}
`

class Login extends Component {
    render() {
      return (
        <Container>
          <Wrapper>
            <Section>
         <h1 style={{textAlign:'center', marginBottom:50}}>Login</h1>
         <Input placeholder="Type your username" showicon="true" iconname="fa fa-user-o" label="Username" showlabel="true"/>
         <Input placeholder="Type your password" showicon="true" iconname="fa fa-lock" label="Password" showlabel="true" className="input"/>
         <Forgotpsw>Forgot password?</Forgotpsw>
         <Button text="Login"/>
         <div style={{textAlign:'center'}}>
         <Signup><Link to='/register'>Register</Link></Signup>
         </div>
         </Section>
         </Wrapper>
        </Container>
      );
    }
  }

export default Login