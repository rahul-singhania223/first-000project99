import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';
import { db } from './firebase';

function Product(props) {

    const [myId, setId] = useState('')

    const getId = () => {
        db.collection('productPage').onSnapshot((snapshot) => {
          snapshot.docs.map((doc) => {
              setId(doc.id)
          })
        })
    }

    useEffect(() => {
       getId()
    }, []) 
    
    const updateProduct = () => {
        db.collection('productPage').doc(myId).update({
            name: props.name,
            realPrice: props.realPrice,
            fakePrice: props.fakePrice,
            img: props.src,
            colors: props.colors,
            sizes: props.sizes
            
        })
    } 
    

   

    return (
        
        <Container>
            <Link to='/product'>
                <ImgContainer onClick={updateProduct}>
                    <img src={props.src} alt='img' />
                </ImgContainer>
            </Link>
            <InfoContainer>
                <hr />
                <Link to='/product'><Name>{props.name}</Name></Link>
                <Main>
                    <Price>${props.realPrice}</Price>
                    <Rating>⭐⭐⭐⭐⭐</Rating>
                </Main>
                <Action>
                    <AddToCart>add to cart</AddToCart>
                    <AddToFavourite><i class="far fa-heart"></i></AddToFavourite>
                </Action>
            </InfoContainer>
            
        </Container>
    );
}

export default Product;

const Container = Styled.div`
    flex-basis: 23.5%;
    min-width: 260px;

    @media(min-width: 1280px) {
        max-width: 23.5%;
        min-width: 23.5%;
    }

    @media(max-width: 1280px) {
        flex-basis: 31%;
    }    

    @media(max-width: 924px) {
        flex-basis: 48%;
    }

    @media(max-width: 768px) {
        flex-basis: 48%;
     }

    
    
`;

const ImgContainer = Styled.div`
    width: 100%;
    height: 300px;
    background-color: #e7e7e7;
    text-align: center;

    img {
        max-width: 100%;
        max-height: 100%;
        
    }
`;

const InfoContainer = Styled.div`
    padding: 40px 0;

    hr {
        border: solid 1px;
        border-radius: 30px;
        width: 20%;
    }
`;

const Name = Styled.h3`
    text-transform: capitalize;
    font-size: 1.3rem;
    padding: 4% 0;
`;

const Main = Styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2% 0;
`;

const Price = Styled.div`
    font-size: 1.3rem;
    font-weight: 700;

`;

const Rating = Styled.div``;

const Action = Styled.div`
    padding: 4% 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const AddToCart = Styled.button`
    background: #000;
    border: none;
    color: #fff;
    text-transform: uppercase;
    font-weight: 700;
    padding: 1%;
    font-size: 0.7rem;
    width: 120px;
    height: 34px;
    cursor: pointer;

    :hover {
        width: 140px;
        transition: 0.3s;
    }
        
`;

const AddToFavourite = Styled.div`
    font-size: 1.4rem;
    cursor: pointer;
`;