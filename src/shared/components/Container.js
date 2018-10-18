import styled from 'styled-components'
import bgimg from '../../assets/images/bg-01.jpg'
const Container = styled.div`
margin: 0 auto;
display: flex;
min-height: 100vh;
width:100%;
padding: 16px;
flex-wrap: wrap;
background: url(${bgimg});
background-repeat:no-repeat;
background-size:cover;
justify-content: center;
align-items: center;
`
export default Container;