import React from 'react';
import Styled from 'styled-components';
import NavigationBar from './Navigationbar'
import title from './imgs/title2.png'

function Title(props) {

   
    
    return (
        <Container>
            <NavigationBar />

            <MainContainer>
                <TitleContainer >
                    <TitleText>
                        <h2>featured</h2>
                        <h1>polo t-shirt</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu</p>
                    <button>shop now</button>
                    </TitleText>

                    <TitleImg src={title} id='title-img' />                        
                    
                </TitleContainer>
            </MainContainer>
            
        </Container>
    );
}

export default Title;

const Container = Styled.div`
    height: 100vh;
    width: 100%;
    background-color: #dddd;
    box-sizing: border-box;
`;

const MainContainer = Styled.div`
    padding: 0 4%;
    height: 100%;    
    max-height: 90%;
   
    
`;

const TitleContainer = Styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    max-width: 1300px;
    margin: 0 auto;
    
      
   

`;

const TitleText = Styled.div`
    text-transform: capitalize;
    flex-basis: 50%;
    

    @media(max-width: 768px) {
        flex-basis: 100%;
        margin-top: -30%;
        z-index: 1;
    }
   
    
    h2 {
        font-size: 1.7rem;
        letter-spacing: 2px;
        color: #5b5b5b;

        @media(max-width: 580px) {
            font-size: 1.5rem;
        }
        
    }

    h1 {
        font-size: 3.6rem;
        padding: 1.5% 0;

        @media(max-width: 580px) {
            font-size: 3rem;
        }
    }

    p {
        font-size: 1.1rem;
        color: #5b5b5b;
        letter-spacing: 1px;
        line-height: 1.9rem;
        padding: 3% 0;

        @media(max-width: 580px) {
            font-size: 1rem;
            line-height: 1.7rem;
            
        }
    }

    button {
        background: none;
        text-transform: capitalize;
        font-weight: 700;
        letter-spacing: 1px;
        border: solid 2px;
        width: 250px;
        height: 55px;
        transition: background 0.4s;
        margin: 4% 0;
        cursor: pointer;

        :hover {
            background-color: #000;
            color: #dddd;
            border: none;
        }
    }
`;

const TitleImg = Styled.img`   
   margin-top: auto;
   margin-left: 50px;
   max-width: 30%;
   min-width: 300px;

   @media(max-width: 768px) {
        position: absolute;
        min-width: 230px;
        grow: 0;
        right: 0;
        bottom: 0;
        z-index: 0;
  
    }

    

    
`;