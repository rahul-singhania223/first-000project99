import React, { useState } from 'react';
import Styled from 'styled-components';
import { db } from './firebase';

function ProductInfoArea(props) {

    const [colors, setColors] = useState(props.product.colors)

    function addToCart() {
        db.collection('cartItem').add(props.product)
    }
    

    return (
        <Container>
            <Name>{props.product.name}</Name>
            <Ratings>
                <ul>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star-half-alt"></i></li>
                </ul>
            </Ratings>
            <PriceContainer>
                <Real>${props.product.realPrice}</Real>
                <Fake>${props.product.fakePrice}</Fake>
            </PriceContainer>
            <ColorSelector>
                <HeaderText>color:</HeaderText>
                <Colors>
                    {}
                </Colors>
                
            </ColorSelector>

            <SizeSelector>
                <HeaderText>size:</HeaderText>
                <Sizes>
                    <Size>s</Size>
                    <Size>m</Size>
                    <Size>l</Size>
                    <Size>xl</Size>
                </Sizes>            
            </SizeSelector>

            <ActionContainer>
                <AddToCart onClick={addToCart}>add to cart</AddToCart>
                <Favourite>
                    <i class="far fa-heart"></i>
                    <div>add to Favourite</div>
                </Favourite>
            </ActionContainer>

            <AboutItem>
                <HeaderText>about item:</HeaderText>
                <ul>
                    <li>this is Rahul singhania a self made billionaire and the biggest hacker of the world</li>
                    <li>this is Rahul singhania a self made billionaire and the biggest hacker of the world</li>
                    <li>this is Rahul singhania a self made billionaire and the biggest hacker of the world</li>
                    <li>this is Rahul singhania a self made billionaire and the biggest hacker of the world</li>
                </ul>
            </AboutItem>
        </Container>
    );
}

export default ProductInfoArea;

const Container  = Styled.div`
    flex-basis: 48%;

    @media(max-width: 768px) {
        flex-basis: 100%;
    }
`;

const Name = Styled.h2`
    font-size: 2rem;
    text-transform: capitalize;
    letter-spacing: 1px;
`;

const Ratings = Styled.div`
    li {
        list-style: none;
        display: inline-block;
        padding: 1px;
        color: #EBA83A;
    }
    margin: 24px 0;


`;

const PriceContainer = Styled.div`
    display: flex;
    align-items: center;
    
`;

const Real = Styled.h3`
    font-size: 1.5rem;
`;

const Fake = Styled.p`
    font-size: 0.9rem;
    padding-left: 20px;
    text-decoration: line-through;
`;

const ColorSelector = Styled.div`    
    padding-top: 35px;
`;

const HeaderText = Styled.div`
    text-transform: capitalize;
    font-size: 1.2rem;
    font-weight: 700;
`;

const Colors = Styled.div`
    display: flex;
    padding: 10px 0;
`;

const Color = Styled.div`
    width: 39px;
    height: 39px;
    margin-right: 11px;
    cursor: pointer;
`;

const SizeSelector = ColorSelector;

const Sizes = Colors;

const Size = Styled.div`
    width: 39px;
    height: 39px;
    border: solid 1px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 11px;
    font-weight: 700;
    cursor: pointer;
`;

const ActionContainer = Styled.div`
    display: flex;
    align-items: center;
    padding: 34px 0;

    @media(max-width: 768px) {
        flex-wrap: wrap;
    }
`;

const AddToCart = Styled.div`
    width: 160px;
    height: 45px;
    border: solid 2px;
    display: grid;
    place-items: center;
    text-transform: capitalize;
    font-weight: 700;
    background-color: #000;
    color: #fff;
    cursor: pointer;
    
    :hover {
        width: 200px;
        transition: 0.5s;
    }

    @media(max-width: 768px) {
        flex-basis: 100%;
        height: 55px;
    }
`;

const Favourite = Styled.div`
    font-size: 2rem;
    margin-left: 60px;
    cursor: pointer;

    div{
        display: none;
    }

    button{
        display: none;
    }
    
   @media(max-width: 768px) {
       flex-basis: 100%;
       margin: 0;

       i{
           display: none;
       }

       div {
           display: grid;
           place-items: center;
           background: #5b5b5b;
           color: #fff;
           font-size: 1rem;
           text-transform: capitalize;
           font-weight: 700;
           height: 45px;
           margin: 13px 0;
       }

   }
`;

const AboutItem = Styled.div`
    li {
        text-transform: capitalize;
        font-weight: 700;
        margin: 20px 40px;
        line-height: 1.8rem;
    }
    
`;