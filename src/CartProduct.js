import React, { useState } from 'react';
import Styled from 'styled-components';
import product1 from './imgs/product-img1.png';
import { db } from './firebase';

function CartProduct(props) {

    let firstPrice = props.price;
    let qty = props.qty;
    let price = qty * props.price

    function increaseQty() {        
        db.collection('cartItem').doc(props.id).update({
            qty: qty + 1
        
        })                   
                
    }

    function decreaseQty() {

        if(qty > 1) {
            db.collection('cartItem').doc(props.id).update({
                qty: qty - 1
            
            })                       
        }        
       
    }    

    // db.collection('cartItem').doc(props.id).update({
    //     realPrice: qty * price
    // })

    function removeItem() {
        db.collection('cartItem').doc(props.id).delete();
    }

    return (
        <Container>
            <ImgContainer><img src={product1} /></ImgContainer>
            <InfoContainer>
                <Name>{props.name}</Name>
                <Info>
                    <Details>
                        <Color>Color: <span>blue</span></Color>
                        <Size>size: <span>m</span></Size>
                        <RemoveBtn onClick={removeItem}>remove</RemoveBtn>
                    </Details>

                    <PriceInfo>
                        <QtyCotrol>
                            <Plus onClick={increaseQty}><i class="fas fa-plus"></i></Plus>
                            <Qty>{qty}</Qty>
                            <Minus onClick={decreaseQty}><i class="fas fa-minus"></i></Minus>
                        </QtyCotrol>
                        <Price>${price}</Price>
                    </PriceInfo>
                </Info>
            </InfoContainer>
            
        </Container>
    );
}

export default CartProduct;

const Container = Styled.div`   
    display: flex;
    border-bottom: solid 1px #686D76;
    padding: 24px 0;
    
`;

const ImgContainer = Styled.div`
    width: 160px;
    height: 160px;
    background-color: #fff;
    text-align: center;
    padding: 6px;
    border-radius: 5px; 
    
    img {
        max-height: 100%;
        max-width: 100%;
    }

    @media(max-width: 768px) {
        max-width: 120px;
        max-height: 120px;
        
    }

    
`;

const InfoContainer = Styled.div`
   padding: 2px ;
   text-transform: capitalize;
   width: 100%;
   flex: 1; 
   margin-left: 2% ;  
`;


const Name = Styled.h2`
    padding-bottom: 2%; 
    font-size: 1.3rem;
    
    @media(max-width: 768px) {
        font-size: 1.1rem;
    }
    
`;

const Info = Styled.div`
   display: flex; 
   width: 100%;
    

`;

const Price = Styled.h3`    
    font-size: 1.4rem;
    font-weight: 400;

    @media(max-width: 768px) {
        font-size: 1.2rem;
        font-weight: 700;
        margin-left: 12px;
    }
`;

const Color = Styled.div`
    margin: 3% 0;
    

    span{
        margin-left: 16px;
        padding-top: 6px;
    }
`;

const Size = Color;

const Details = Styled.div`
    flex-basis: 90%;   
`;

const RemoveBtn = Styled.div`
    cursor: pointer;
    max-width: fit-content;
    :hover{
        color: #5b5b5b;
        transition: 0.5s;
    }
`;

const PriceInfo = Styled.div`
    display: flex;
    align-items: center;
   

    @media(max-width: 768px) {
        flex-wrap: wrap;
        margin-left: 80px;
    }
`;

const QtyCotrol = Styled.div`
      display: flex;
      padding-right: 80px;

    @media(max-width: 768px) {
        padding-right: 0;
    }

      
`;

const Qty = Styled.div`
    border: solid 1px;
    width: 27px;
    height: 27px;
    display: grid;
    place-items: center;
    margin: 0 16px
`;

const Plus = Styled.div`
    i {
        font-size: 0.8rem;
    }
    cursor: pointer;
`;

const Minus = Plus