import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Container from '../../shared/components/Container';
import Wrapper from './Wrapper.js'
import Section from './Section.js'
import Input from '../../shared/components/Input/index'
import Button from '../../shared/components/Button/index'
import styled from 'styled-components'

const Signup = styled.span`
color:#666666;
text-align:center;
margin-top:-15px;
cursor:pointer;
:hover{
  color:#a64bf4
}
`

class Register extends Component {
    render() {
      return (
        <Container>
          <Wrapper>
            <Section>
         <h1 style={{textAlign:'center', marginBottom:50}}>Register</h1>
         <Input placeholder="Type your firstname" showicon={false} iconname="fa fa-user-o" label="Firstname"/>
         <Input placeholder="Type your lastname" showicon={false} iconname="fa fa-user-o" label="Lastname"/>
         <Input placeholder="Type your email" showicon={false} iconname="fa fa-email" label="Email"/>
         <Input placeholder="Type your phone" showicon={false} iconname="fa fa-user-o" label="Firstname"/>
         <Button text="Register"/>
         <div style={{textAlign:'center'}}>
         <Signup><Link to='/'>Login</Link></Signup>
         </div>
         </Section>
         </Wrapper>
        </Container>
      );
    }
  }

export default Register