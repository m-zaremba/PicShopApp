import React from 'react';
import Header from './Header';
import styled from 'styled-components';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle, IoIosArrowRoundForward, IoIosArrowRoundBack} from 'react-icons/io';

function NextArrowButton(props) {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const {onClick} = props;
  return (
    isMobile ? <NextArrowMobile onClick={onClick} /> : <NextArrow onClick={onClick} />
  );
}

function PreviousArrowButton(props) {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const {onClick} = props;
  return (
    isMobile ? <PrevArrowMobile onClick={onClick} /> : <PrevArrow onClick={onClick} />
  );
}

class Home extends React.Component {

   render(){

     const homeHeaderText = <>
       <HeaderBig>BEST</HeaderBig>
       <HeaderSubTextWrapper>
         <HeaderSmall>Photos.</HeaderSmall>
         <HeaderSmall>Photogrphers.</HeaderSmall>
         <HeaderSmall>All.</HeaderSmall>
       </HeaderSubTextWrapper>
     </>;

     const settings = {
      dots: true,
      nextArrow: <NextArrowButton />,
      prevArrow: <PreviousArrowButton />,
      infinite: true,
      speed: 500,
      autoplaySpeed: 6000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };


     return (
       <>
         <Header headerText={homeHeaderText}/>
         <SliderSection>
           <SliderElement {...settings}>
             <InfoWrapper>
               <H3>If this was a real site, some some of most interesting news would be presented here.</H3>
             </InfoWrapper>
             <InfoWrapper>
               <H3>For now, let's just say that all the photos on this site are from the Lorem Picsum, and of course they are free.</H3>
             </InfoWrapper>
             <InfoWrapper>
               <H3>Interesting fact no 2: All photographers' names are true (feel free to check on Lorem Picsum database).</H3>
             </InfoWrapper>
             <InfoWrapper>
               <H3>The layout and style are an attempt to copy the FontShop page.</H3>
             </InfoWrapper>
             <InfoWrapper>
               <H3>This slider is a personalized version of react slick carousel.</H3>
             </InfoWrapper>
           </SliderElement>
         </SliderSection>

       </>
         )
   }
 }

export default Home;

const SliderSection = styled.section`
  width: 100%;
  padding: 2em 0;

  @media (min-width: 768px) {
    max-width: 1200px;
    width: 100%;
  }
`

const SliderElement = styled(Slider)`
  width: 100%;

  @media (min-width: 768px) {
    width: 80%;
  }
`

const InfoWrapper = styled.div`
  height: 350px;
  background-color: rgb(168, 168, 168);
  color: black;
  display: flex !important;
  justify-content: center;
  align-items: center;
  padding: 0 3em;

  @media (min-width: 768px) {
    padding: unset;
  }
`

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
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: .5em;
`
const PrevArrowMobile = styled(IoIosArrowDropleftCircle)`
  background-color: rgb(255, 222, 0);
  border-radius: 50%;
  font-size: 3em;
  color: black;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  cursor: pointer;
`

const PrevArrow = styled(IoIosArrowRoundBack)`
  font-size: 4em;
  color: black;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  cursor: pointer;

  @media (min-width: 768px) {
    left: -1em;
  }
`

const NextArrowMobile = styled(IoIosArrowDroprightCircle)`
  background-color: rgb(255, 222, 0);
  border-radius: 50%;
  font-size: 3em;
  color: black;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`

const NextArrow = styled(IoIosArrowRoundForward)`
  font-size: 4em;
  color: black;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;

  @media (min-width: 768px) {
    right: -1em;
  }
`

const H3 = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2em;

  @media (min-width: 768px) {
    font-size: 2em;
  }
`
