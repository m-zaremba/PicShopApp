import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from './actions/cartActions.js';
import styled from 'styled-components';
import Header from './Header';
import {IoIosClose, IoIosSearch} from 'react-icons/io';


class Shop extends React.Component {

  state = {
    itemToShowId: null,
    photoPreview: false,
    photoToShow: null,
    buyAuthor: null,
    buyPhotoPrev: null,
    buyItemNumber: null,
    buyItemPrice: null,
    filterVal: '',
    filterTag: '',
    selectedOption: 'JPG',
    buyButtonVisible: false,
    showBuyPopup: false
  }


   handleShowBuyPopup = (item) => {
     this.setState({
       buyAuthor: item.author,
       buyPhotoPrev: item.img,
       buyItemNumber: item.id,
       buyItemPrice: item.price,
       showBuyPopup: true,
     })
   }

   handleHideBuyPopup = () => {
     this.setState({
       showBuyPopup: false,
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

   //display buy button on mouse enter for selected photo
   handleBuyButtonShow = (id) => {
     this.setState({
       itemToShowId: id,
     })
   }

   //hide buy button on mouse leave
   handleBuyButtonHide = () => {
     this.setState({
       itemToShowId: null,
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

   //handle filter actions
   handleFilterChange = (e) => {

     this.setState({
       filterVal: e.target.value,
     })
     /* display all photos in the store if input field is empty - connected to item rendering conditions */
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

     let filterTag = this.state.filterTag; //variable containing phrase from filter input
     let imageTags;
     const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent); //checking if the page is displayed on mobile device


/* Creating items in the store

typeof item.id === 'number' - condition to render an image preview for each photo only once (3 id numbers exist for the same photo in the database of which only one is a number)

imageTags.indexOf(filterTag) > -1 - condition to display only photos that match a specified phrase from the filter input

this.state.filterTag === '' || this.state.filterVal === '' - if no filter phrase is specified, display all photos

 */

       let itemList = this.props.items.map(item=>{

           imageTags = item.tag.split(','); //create an array of strings (made of tags) for each photo

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

        let photoPreview; //variable for conditional rendering of fullscreen photo preview

        if (this.state.photoPreview) {
          photoPreview = <><PreviewMainContainer><StyledCloseIcon onClick={this.handlePreviewHide}/><PhotoWrapper><img src={this.state.photoToShow} alt='enlarged preview'/></PhotoWrapper></PreviewMainContainer></>;
        } else {
          photoPreview = null;
        }

        let buyPopup = null; //variable containing script for conditional rendering of purchase options/buy button window

        if(this.state.showBuyPopup) {
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
                  <BuyButton to='/' onClick={()=>{this.handleBuy(); this.setState({showBuyPopup: false})}}>Buy</BuyButton>
                </OptionsWrapper>
              </BuyImgOptionsWrapper>
            </BuyPopupBackgroundWrapper>
          </BuyPopupMainContainer>
        }


        //Custom text for Header component
        const shopHeaderText = <>
          <HeaderBig><div>S</div><div>E</div><div>A</div><div>R</div><div>C</div><div>H</div></HeaderBig>
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


/* --------------- STYLES --------------- */

//Main styles

const ShopMainContainer = styled.div`
  width: 100%;
  background-color: white;
  margin-top: 2em;
`

const ShopItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`

const ShopWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  min-height: calc(100vh - (500px + 1em));
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

//Photo preview styles

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

const PhotoWrapper = styled.div`
  height: 70%;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
`

//Buy pop-up window styles

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

const ImgBuyPreview = styled.img`
  width: 100%;

  @media (min-width: 769px) {
    height: 35vh;
    width: auto;
  }
`

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
    background: rgb(190, 190, 190);
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 5px;
      background: rgb(238, 238, 238);
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


// Shop item styles

const ShopItem = styled.div`
  font-family: 'Montserrat', sans-serif;
  display: inline-block;

  &:hover{
    background-color: rgb(248, 248, 245);
  }

  @media (max-width: 414px) {
    width: 100%;
    margin: 30px 0;
    padding: 0 0;
    flex: unset;
  }

  @media (min-width: 415px) and (max-width: 768px) {
    flex: 1 1 calc(50% - 20px);
    margin: 30px 0;
    padding: 30px 20px;
  }

  @media (min-width: 769px) {
    margin: 20px 10px;
    padding: 30px 20px;
    flex: 1 1 calc(33% - 20px);
    max-width: calc(33% - 20px);
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

const Div = styled.div`
  padding: 10px 0;
  height: 1.5em;
  font-size: .8em;
`

//Images filter section styles

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

  &:hover {
    cursor: pointer;
  }
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

//Shop component Header styles

const HeaderBig = styled.span`
  font-size: 2.2em;
  font-weight: bold;
  display: flex;
  justify-content: space-around;
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
