import React from 'react';
import Header from './Header';
import styled from 'styled-components';

class Home extends React.Component {

   render(){

     let headerText = <>
       <HeaderBig>BEST</HeaderBig>
       <HeaderSubTextWrapper>
         <HeaderSmall>Photos.</HeaderSmall>
         <HeaderSmall>Photogrphers.</HeaderSmall>
         <HeaderSmall>All.</HeaderSmall>
       </HeaderSubTextWrapper>
     </>;


     return (
       <>
         <Header headerText={headerText}/>


         <div style={{height: '500px'}}></div>
       </>
         )
   }
 }

export default Home;

const HeaderBig = styled.span`
  font-size: 2.2em;
  font-weight: bold;
  letter-spacing: 10vw;
  text-indent: 10vw;
  display: inline-block;
`

const HeaderSubTextWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const HeaderSmall = styled.span`
  ${'' /* font-family: 'Montserrat', sans-serif; */}
  font-size: .5em;
`
