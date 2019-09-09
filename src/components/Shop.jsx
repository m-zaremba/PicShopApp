import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from './actions/cartActions.js';
import styled from 'styled-components';

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
    filterVal: '',
    filterTag: '',
    selectedOption: 'option1',
  }


   handleShowBuyPopup = (item) => {
     this.setState({
       buyAuthor: item.author,
       buyPhotoPrev: item.img,
       showPopup: true,
       buyItemNumber: item.id,
     })
   }

   handleHideBuyPopup = () => {
     this.setState({
       showPopup: false,
     })
   }

   handleBuy = () => {
     this.props.addToCart(this.state.buyItemNumber);
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

       let itemList = this.props.items.map(item=>{

         //let filterTag = this.state.filterTag;
         imageTags = item.tag.split(',');

         //console.log(imageTags);

         if (imageTags.indexOf(filterTag) > -1) {
           return(
               <ShopItem key={item.id} onMouseEnter={() => {this.handleBuyButtonShow(item.id)}} onMouseLeave={() => {this.handleBuyButtonShow()}}>
                 <div>
                   <Img src={item.img} alt={item.tag} onClick={() => {this.handlePhotoPreview(item.img)}}/>
                 </div>
                 <div>
                   <p>Author: {item.author}</p>
                   {item.id === this.state.itemToShowId ? <Div><Button to='/' onClick={()=>{this.handleShowBuyPopup(item)}}>Buying Options</Button></Div> : <Div>Buy from {item.price} $</Div>}
                 </div>
               </ShopItem>
           )
         } else if (this.state.filterTag === '' || this.state.filterVal === '') {
           return(
               <ShopItem key={item.id} onMouseEnter={() => {this.handleBuyButtonShow(item.id)}} onMouseLeave={() => {this.handleBuyButtonShow()}}>
                 <div>
                   <Img src={item.img} alt={item.tag} onClick={() => {this.handlePhotoPreview(item.img)}}/>
                 </div>
                 <div>
                   <p>Author: {item.author}</p>
                   {item.id === this.state.itemToShowId ? <Div><Button to='/' onClick={()=>{this.handleShowBuyPopup(item)}}>Buying Options</Button></Div> : <Div>Buy from {item.price} $</Div>}
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
            <BuyPopupWrapper>
              <StyledCloseIcon onClick={this.handleHideBuyPopup}/>
              <div>
                <img src={this.state.buyPhotoPrev} alt='none'/>
                <div>
                  <div className='form-check'>
                    <label>
                      <input
                        type='radio'
                        name='pic-options'
                        value='JPG'
                        checked={this.state.selectedOption === 'JPG'}
                        className='form-check-input'
                        onChange={this.handleOptionChange}
                      />
                      JPG
                    </label>
                  </div>

                  <div className='form-check'>
                    <label>
                      <input
                        type='radio'
                        name='pic-options'
                        value='TIFF'
                        checked={this.state.selectedOption === 'TIFF'}
                        className='form-check-input'
                        onChange={this.handleOptionChange}
                      />
                      TIFF
                    </label>
                  </div>

                  <div className='form-check'>
                    <label>
                      <input
                        type='radio'
                        name='pic-options'
                        value='RAW'
                        checked={this.state.selectedOption === 'RAW'}
                        className='form-check-input'
                        onChange={this.handleOptionChange}
                      />
                      RAW
                    </label>
                  </div>
                </div>
                <div>
                  <Button to='/' onClick={()=>{this.handleBuy(); this.setState({showPopup: false})}}>Buy</Button>
                </div>
              </div>
            </BuyPopupWrapper>
          </BuyPopupMainContainer>
        }

        return(
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

  &:hover {
    cursor: pointer;
  }
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
`

const BuyPopupWrapper = styled.div`
  background-color: white;
  width: 50%;
  padding: 2em 2em;
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
  width: 90%;

  @media (max-width: 768px) {
    width: 100%;
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

const StyledCloseIcon = styled(IoIosClose)`
  color: rgb(255, 222, 0);
  position: fixed;
  right: 25px;
  top: 25px;
  font-size: 3em;
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
