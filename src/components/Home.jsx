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
               <Info1Background>
                 <Info>If this was a real site, some some of most interesting news would be presented here.</Info></Info1Background>
             </InfoWrapper>
             <InfoWrapper>
               <Info2Background>
                 <Info>For now, let's just say that all the photos on this site are from the Lorem Picsum, and of course they are free.</Info>
               </Info2Background>
             </InfoWrapper>
             <InfoWrapper>
               <Info3Background><Info>Interesting fact no 2: All photographers' names are true (feel free to check on Lorem Picsum database).</Info></Info3Background>
             </InfoWrapper>
             <InfoWrapper>
               <Info4Background><Info>The layout and style are an attempt to copy the FontShop page.</Info></Info4Background>
             </InfoWrapper>
             <InfoWrapper>
               <Info5Background><Info>This slider is a personalized version of react slick carousel.</Info></Info5Background>
             </InfoWrapper>
             <InfoWrapper>
               <Info6Background><Info>And this diagonal background is just for fun.</Info></Info6Background>
             </InfoWrapper>
           </SliderElement>
         </SliderSection>
         <OffersSection>
           <OffersSctTitle>Special photo deals</OffersSctTitle>
           <OffersTagsContainer>
             <Offer>
               <H3>10% off</H3>
               <Span>A special deal would go here.</Span>
             </Offer>
             <Offer>
               <H3>50% off</H3>
               <Span>Even bigger discount? Certainly here.</Span>
             </Offer>
             <Offer>
               <H3>50% off</H3>
               <Span>WOW. That's really cheap! I'm buying.</Span>
             </Offer>
           </OffersTagsContainer>
         </OffersSection>
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

  @media (min-width: 769px) {
    width: 80%;
  }
`

const InfoWrapper = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2em;
  height: 350px;
  background-color: rgb(168, 168, 168);
  color: black;
`

const Info = styled.span`
  display: inline-block;
  padding: 0 3em;

  @media (min-width: 768px) {
    padding: unset;
    font-size: 2em;
  }
`

const Info1Background = styled.div`
  text-shadow: 0px 0px 1px rgb(0, 0, 0);
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(135deg, rgb(255, 255, 255) 50%, rgb(255, 222, 0) 50%);
`

const Info2Background = styled.div`
  color: white;
  text-shadow: 0px 0px 8px rgb(0, 0, 0);
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(45deg, rgb(255, 222, 0) 50%, rgb(0, 0, 0) 50%);
`

const Info3Background = styled.div`
  color: white;
  text-shadow: 0px 0px 8px rgb(0, 0, 0);
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(135deg, rgb(0, 0, 0) 50%, rgb(255, 222, 0) 50%);
`

const Info4Background = styled.div`
  text-shadow: 0px 0px 1px rgb(0, 0, 0);
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(45deg, rgb(255, 222, 0) 50%, rgb(255, 255, 255) 50%);
`

const Info5Background = styled.div`
  color: rgb(255, 222, 0);
  text-shadow: 1px  1px 2px black, 1px -1px 2px black, -1px  1px 2px black, -1px -1px 2px black;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(135deg, rgb(255, 255, 255) 50%, rgb(0, 0, 0) 50%);
`

const Info6Background = styled.div`
  color: rgb(255, 222, 0);
  text-shadow: 1px  1px 2px black, 1px -1px 2px black, -1px  1px 2px black, -1px -1px 2px black;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(45deg, rgb(0, 0, 0) 50%, rgb(255, 255, 255) 50%);
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

const OffersSection = styled.section`
  width: 100%;
  padding: 2em 0;

  @media (min-width: 768px) {
    max-width: 1200px;
    width: 100%;
  }
 `

const OffersSctTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2em;
  text-align: left;
  padding: 0 10px;

  ${'' /* @media (min-width: 768px) {
    padding: 0 0;
  } */}
`

const OffersTagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const Offer = styled.div`
  height: 300px;
  width: 100%;
  background-color: rgba(237, 237, 237, 1);
  border-top: solid 5px rgb(221, 60, 0);
  margin: 1em 0;
  position: relative;

  &:hover {
    background-color: rgba(237, 237, 237, .5);
    transition: 500ms;
    cursor: pointer;
  }


  @media (min-width: 415px) and (max-width: 768px) {
    flex: 1 1 calc(50% - 20px);
    margin: 30px 10px;
    padding: 0 20px;
    ${'' /* max-width: calc(50% - 20px); */}
  }

  @media (min-width: 769px) {
    margin: 20px 10px;
    padding: 0 20px;
    flex: 1 1 calc(33% - 20px);
    ${'' /* max-width: calc(33% - 20px); */}
  }
`

const H3 = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-weight: lighter;
  background-color: rgb(221, 60, 0);
  display: inline-block;
  padding-left: .5em;
  padding-right: .5em;
  padding-bottom: 5px;
  color: white;
`

const Span = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5em;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
