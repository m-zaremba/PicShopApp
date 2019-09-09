import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {FaFacebookSquare, FaTwitterSquare, FaPinterestSquare, FaInstagram} from 'react-icons/fa';

const Footer = (props) => {


     return (
       <FooterMainContainer>
         <FooterWrapper>
           <FooterMotto>Not by chance. By choice.</FooterMotto>
           <SocialIcons>
             <StyledAnchor href='https://www.facebook.com'><FaFacebookSquare/></StyledAnchor>
             <StyledAnchor href='https://www.twitter.com'><FaTwitterSquare/></StyledAnchor>
             <StyledAnchor href='https://www.pinterest.com'><FaPinterestSquare/></StyledAnchor>
             <StyledAnchor href='https://www.instagram.com'><FaInstagram/></StyledAnchor>
           </SocialIcons>
           <FooterCreditsWrapper>
             <CopyrightSpan>&copy;2019 Warsaw Silvergraph Studio</CopyrightSpan>
             <StyledLink to='/contact'>Contact</StyledLink>
             <StyledLink to='/faq'>FAQ</StyledLink>
             <StyledLink to='/sitemap'>Sitemap</StyledLink>
           </FooterCreditsWrapper>
         </FooterWrapper>
       </FooterMainContainer>


     )

 }

 export default Footer;

const FooterMainContainer = styled.footer`
  background-color: black;
  height: auto;
  text-align: center;
  padding: 15px 10px;
  color: rgb(255, 222, 0);
`

const FooterWrapper = styled.div`
  max-width: 1200px;
  width: 100%;

  @media (max-width: 768px) {
    max-width: unset;
  }
`

const FooterMotto = styled.span`
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 3em;
  letter-spacing: .4rem;

  @media (max-width: 768px) {
    font-size: 2em;
  }
`

const SocialIcons = styled.div`
  max-width: 300px;
  font-size: 2em;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
`

const FooterCreditsWrapper = styled.div`
  font-family: 'Open Sans Condensed', sans-serif;
  flex-direction: column;
  align-items: flex-start;
`

const CopyrightSpan = styled.span`
  display: inline-block;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  align-items: center;
  cursor: pointer;
  margin: 10px 10px;
  padding-left: 10px;
  border-left: 1px solid rgba(255, 223, 6, .7);

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
    color: rgb(255, 222, 0);
  };
`

const StyledAnchor = styled.a`
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
    color: rgb(255, 222, 0);
  };
`
