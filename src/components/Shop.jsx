import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from './actions/cartActions.js';
import styled from 'styled-components';

import Header from './Header';

import {IoIosClose, IoIosSearch} from 'react-icons/io';


class Shop extends React.Component {

  state = {
    buyButtonVisible: false,
    itemToShowId: 0,
    photoPreview: false,
    photoToShow: null,
    showPopup: false,
    buyAuthor: null,
    buyPhotoPrev: null,
    buyItemNumber: null,
    buyItemPrice: null,
    filterVal: '',
    filterTag: '',
    selectedOption: 'JPG',
  }


   handleShowBuyPopup = (item) => {
     this.setState({
       buyAuthor: item.author,
       buyPhotoPrev: item.img,
       showPopup: true,
       buyItemNumber: item.id,
       buyItemPrice: item.price,
     })
   }

   handleHideBuyPopup = () => {
     this.setState({
       showPopup: false,
       selectedOption: 'JPG',
     })
   }

   handleBuy = () => {
     if(this.state.selectedOption === 'JPG'){
       this.props.addToCart(this.state.buyItemNumber);
     } else {
       this.props.addToCart(this.state.buyItemNumber + this.state.selectedOption);
     }

     this.setState({
       selectedOption: 'JPG',
     })
   }

   handleBuyButtonShow = (id) => {
     this.setState({
       itemToShowId: id
     })
   }

   handleBuyButtonHide = () => {
     this.setState({
       itemToShowId: 0
     })
   }

   handlePhotoPreview = (img) => {
     this.setState({
       photoToShow: img,
       photoPreview: true,
     })
   }

   handlePreviewHide = () => {
     this.setState({
       photoPreview: false,
       photoToShow: null,
     })
   }

   handleFilterChange = (e) => {

     this.setState({
       filterVal: e.target.value,
     })

     if (this.state.filterVal === '') {
       this.setState({
         filterTag: '',
       })
     }

   }

   handleFilterButtonClick = () => {
     this.setState({
       filterTag: this.state.filterVal
     })
   }


   handleFilterEnterPress = (e) => {
     if(e.key === 'Enter') {
       this.setState({
         filterTag: this.state.filterVal
       })
     }
   }

   handleTagButtonClick = (e) => {
     if(e.target.innerText !== 'All'){
       this.setState({
         filterVal: e.target.innerText.toLowerCase(),
         filterTag: e.target.innerText.toLowerCase()
       })
     } else {
       this.setState({
         filterVal: '',
         filterTag: ''
       })
     }
   }

   handleOptionChange = changeEvent => {
     this.setState({
       selectedOption: changeEvent.target.value
     })
   }


   render(){

     let filterTag = this.state.filterTag;
     let imageTags;

     const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);


       let itemList = this.props.items.map(item=>{

           imageTags = item.tag.split(',');

           if (imageTags.indexOf(filterTag) > -1 && typeof item.id === 'number') {
             return(
                 <ShopItem key={item.id} onMouseEnter={() => {this.handleBuyButtonShow(item.id)}} onMouseLeave={() => {this.handleBuyButtonShow()}}>
                   <div>
                     <Img src={item.img} alt={item.tag} onClick={() => {this.handlePhotoPreview(item.img)}}/>
                   </div>
                   <div>
                     <p>Author: {item.author}</p>
                     {item.id === this.state.itemToShowId || isMobile ? <Div><Button to='/' onClick={()=>{this.handleShowBuyPopup(item)}}>Buying Options</Button></Div> : <Div>Buy from {item.price} $</Div>}
                   </div>
                 </ShopItem>
             )
           } else if ((this.state.filterTag === '' || this.state.filterVal === '') && typeof item.id === 'number') {
             return(
                 <ShopItem key={item.id} onMouseEnter={() => {this.handleBuyButtonShow(item.id)}} onMouseLeave={() => {this.handleBuyButtonShow()}}>
                   <div>
                     <Img src={item.img} alt={item.tag} onClick={() => {this.handlePhotoPreview(item.img)}}/>
                   </div>
                   <div>
                     <p>Author: {item.author}</p>
                     {item.id === this.state.itemToShowId || isMobile ? <Div><Button to='/' onClick={()=>{this.handleShowBuyPopup(item)}}>Buying Options</Button></Div> : <Div>Buy from {item.price} $</Div>}
                   </div>
                 </ShopItem>
             )
           } else {
             return null
           }


        })

        let photoPreview;

        if (this.state.photoPreview) {
          photoPreview = <><PreviewMainContainer><StyledCloseIcon onClick={this.handlePreviewHide}/><PhotoWrapper><img src={this.state.photoToShow} alt='enlarged preview'/></PhotoWrapper></PreviewMainContainer></>;
        } else {
          photoPreview = null;
        }

        let buyPopup = null;

        if(this.state.showPopup) {
          buyPopup = <BuyPopupMainContainer>
            <BuyPopupBackgroundWrapper>
              <StyledCloseIcon onClick={this.handleHideBuyPopup}/>
              <BuyImgOptionsWrapper>
                <ImgBuyPreview src={this.state.buyPhotoPrev} alt='none'/>
                <OptionsWrapper>
                  <Span>Choose filetype</Span>
                  <Option>
                    <RadioButton
                      type='radio'
                      name='pic-options'
                      value='JPG'
                      checked={this.state.selectedOption === 'JPG'}
                      className='form-check-input'
                      onChange={this.handleOptionChange}
                    />
                    <RadioButtonLabel />
                    <RadioButtonSpan>JPG ({this.state.buyItemPrice} $)</RadioButtonSpan>
                  </Option>

                  <Option>
                    <RadioButton
                      type='radio'
                      name='pic-options'
                      value='TIFF'
                      checked={this.state.selectedOption === 'TIFF'}
                      className='form-check-input'
                      onChange={this.handleOptionChange}
                    />
                    <RadioButtonLabel />
                    <RadioButtonSpan>TIFF (+2$)</RadioButtonSpan>
                  </Option>

                  <Option>
                    <RadioButton
                      type='radio'
                      name='pic-options'
                      value='RAW'
                      checked={this.state.selectedOption === 'RAW'}
                      className='form-check-input'
                      onChange={this.handleOptionChange}
                    />
                    <RadioButtonLabel />
                    <RadioButtonSpan>RAW (+4$)</RadioButtonSpan>
                  </Option>
                  <BuyButton to='/' onClick={()=>{this.handleBuy(); this.setState({showPopup: false})}}>Buy</BuyButton>
                </OptionsWrapper>
                {/* <BuyButtonWrapper>
                  <BuyButton to='/' onClick={()=>{this.handleBuy(); this.setState({showPopup: false})}}>Buy</BuyButton>
                </BuyButtonWrapper> */}
              </BuyImgOptionsWrapper>
            </BuyPopupBackgroundWrapper>
          </BuyPopupMainContainer>
        }

        const shopHeaderText = <>
          <HeaderBig>SEARCH</HeaderBig>
          <HeaderSubTextWrapper>
            <HeaderSmall>Choose.</HeaderSmall>
            <HeaderSmall>Click.</HeaderSmall>
            <HeaderSmall>Buy.</HeaderSmall>
          </HeaderSubTextWrapper>
        </>;

        return(
          <>
            <Header headerText={shopHeaderText}/>
            <ShopMainContainer>
              {photoPreview}
              {buyPopup}
              <ShopWrapper>
                <FilterWrapper>
                  <StyledSearchIcon onClick={this.handleFilterButtonClick}>Find</StyledSearchIcon>
                  <Input type='text' name='filer' placeholder='Search photos' value={this.state.filterVal} onChange={this.handleFilterChange} onKeyPress={this.handleFilterEnterPress}/>
                </FilterWrapper>
                <ButtonsWrapper>
                  <FilterButton onClick={this.handleTagButtonClick}>All</FilterButton>
                  <FilterButton onClick={this.handleTagButtonClick}>Nature</FilterButton>
                  <FilterButton onClick={this.handleTagButtonClick}>People</FilterButton>
                  <FilterButton onClick={this.handleTagButtonClick}>Animal</FilterButton>
                  <FilterButton onClick={this.handleTagButtonClick}>Urban</FilterButton>
                  <FilterButton onClick={this.handleTagButtonClick}>Advertisement</FilterButton>
                </ButtonsWrapper>
                <ShopItemWrapper>
                  {itemList}
                </ShopItemWrapper>
              </ShopWrapper>
            </ShopMainContainer>
          </>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    items: state.items
     }
  }

const mapDispatchToProps= (dispatch) => {

  return {
    addToCart: (id)=>{dispatch(addToCart(id))}
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(Shop);

const ShopMainContainer = styled.div`
  width: 100%;
  background-color: white;
  margin-top: 2em;
`

const PreviewMainContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 401;
`

const BuyPopupMainContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 401;
`

const BuyPopupBackgroundWrapper = styled.div`
  background-color: white;
  width: 100%;
  padding: 2em 1em;
  position: relative;
`

const PhotoWrapper = styled.div`
  height: 70%;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
`

const ShopWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  min-height: calc(100vh - 30px);
`

const ShopItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`
const ShopItem = styled.div`
  font-family: 'Montserrat', sans-serif;
  display: inline-block;

  @media (min-width: 769px) {
    margin: 20px 10px;
    padding: 30px 20px;
    flex: 1 1 calc(33% - 20px);
    max-width: calc(33% - 20px);
  }

  &:hover{
    background-color: rgb(248, 248, 245);
  }

  @media (min-width: 415px) and (max-width: 768px) {
    flex: 1 1 calc(50% - 20px);
    margin: 30px 0;
    padding: 30px 20px;
  }

  @media (max-width: 414px) {
    width: 100%;
    margin: 30px 0;
    padding: 0 0;
    flex: unset;
  }
`

const Img = styled.img`
  width: 100%;

  @media (min-width: 769px) {
    width: 90%;
  }

  &:hover {
    cursor: pointer;
  }
`

const ImgBuyPreview = styled.img`
  width: 100%;

  @media (min-width: 769px) {
    height: 35vh;
    width: auto;
  }
`

const Button = styled.button`
  border: none;
  background-color: rgb(255, 222, 0);
  padding: 5px 20px;
  outline: none;

  &:hover {
    transition: .3s;
    color: white;
    background-color: black;
    cursor: pointer;
  }
`

// const BuyButtonWrapper = styled.div`
//   width: 100%;
// `

const BuyButton = styled.button`
  border: none;
  background-color: rgb(255, 222, 0);
  padding: 10px 20px;
  outline: none;
  width: 100%;

  &:hover {
    transition: .3s;
    color: white;
    background-color: black;
    cursor: pointer;
  }

  @media (min-width: 769px) {
    width: 40%;
  }
`

const Div = styled.div`
  padding: 10px 0;
  height: 1.5em;
  font-size: .8em;
`

const StyledCloseIcon = styled(IoIosClose)`
  color: rgb(255, 222, 0);
  position: fixed;
  right: 25px;
  top: 25px;
  font-size: 3em;

  &:hover {
    cursor: pointer;
  }
`

const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: .2em 1em;
  border: solid lightgray 1px;
  margin: 1em 2em;
`

const Input = styled.input`
  border: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5em;
  font-weight: 100;
  padding: 1em 1em;
  width: 100%;
  margin: 0 0;
  outline: none;
`

const StyledSearchIcon = styled(IoIosSearch)`
  font-size: 3em;
  margin: 0 0;
`

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 27px;
  flex-wrap: wrap;
`

const FilterButton = styled.button`
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
  letter-spacing: 2px;
  border: none;
  background-color: rgb(255, 222, 0);
  padding: .8em 20px;
  outline: none;
  flex: 1;
  margin: 5px 5px;

  &:hover {
    transition: .3s;
    color: white;
    background-color: black;
    cursor: pointer;
  }
`

const HeaderBig = styled.span`
  font-size: 2.2em;
  font-weight: bold;
  letter-spacing: .15em;
  text-indent: .15em;
  display: inline-block;

  @media (min-width: 321px) and (max-width: 415px) {
    letter-spacing: .3em;
    text-indent: .3em;
  }

  @media (min-width: 416px) {
    letter-spacing: 9vw;
    text-indent: 9vw;
  }
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

const BuyImgOptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`

const Option = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
`

const RadioButtonLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 1px solid #bebebe;
`

const RadioButton = styled.input`
  position: absolute;
  left: 4px;
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  &:hover ~ ${RadioButtonLabel} {
    background: #bebebe;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 5px;
      background: #eeeeee;
    }
  }
  &:checked + ${RadioButtonLabel} {
    background: rgb(255, 222, 0);
    border: 1px solid rgb(255, 222, 0);
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 5px;
      box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
      background: white;
    }
  }
`

const RadioButtonSpan = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-weight: normal;
  margin: 0 0;
  padding-left: 2.2em;
`

const OptionsWrapper = styled.div`
  width: 60%;
  padding: 1em 2em;

  @media (min-width: 769px) {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`

const Span = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
`
