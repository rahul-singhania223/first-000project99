import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import product from './imgs/timeline-product.png';

function TimelineOfferSection(props) {

    var countDownDate = new Date("June 20, 2021 08:37:25").getTime();

    setInterval(function() {

        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;
      
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        console.log();
    }, 1000)

    return (
        <Container>
            
            <MainContainer>
                <TextContainer>
                    <h3>today's offer</h3>
                    <h1>stylish metal watches<br /> just <span>$39</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    <Timer>11 : 32 : 44</Timer>
                    <button>shop now</button>
                </TextContainer>

                <ImgContainer>
                    <img src={product} alt='img' />
                </ImgContainer>
            </MainContainer>
        </Container>
    );
}

export default TimelineOfferSection;

const Container = Styled.div`
    padding: 4%;
    width: 100%;
    box-sizing: border-box;
    background-color: #e7e7e7;
    margin: 120px 0;

`;


const MainContainer = Styled.div`
   max-width: 1300px;
   margin: 0 auto;
    display: flex;
    height: 100%;

    @media(max-width: 1024px) {
        flex-wrap: wrap;
    }
    
   
`;

const TextContainer = Styled.div`
    
    flex-basis: 50%;
    
    @media(max-width: 1024px) {
        flex-basis: 100%;
    }

    h3{
        text-transform: uppercase;
        font-size: 1.3rem;
        font-weight: 700;
        color: #5b5b5b;

       
    }

    h1 {
        text-transform: uppercase;
        font-size: 2.8rem;
        line-height: 3.5rem;
        padding: 1% 0;
        font-weight: 900;
        letter-spacing: 2px;

        span {
            color: red;
        }

        @media(max-width: 580px) {
            font-size: 2.3rem;
        }
    }

    p{
        font-size: 1.1rem;
        text-transform: capitalize;
        letter-spacing: 1px;
        line-height: 2rem;
        margin: 2.5% 0;
    }

    button {
        width: 180px;
        height: 50px;
        background: none;
        border: solid 2px;
        font-size: 0.9rem;
        font-weight: 700;
        letter-spacing: 2px;
        text-transform: uppercase;
        cursor: pointer;

        :hover {
                       
            background: #000;
            color: #fff;
            transition: 0.3s;

            
        }

       

    }
`;

const Timer = Styled.h1`
   margin-bottom: 6%;
`;

const ImgContainer = Styled.div`
    margin-left: auto;
    text-align: center;
    width: 40%;
    

    img {
        min-height: 100%;
    }

    @media(max-width: 580px) {
        position: relative;        
        max-height: fit-content;
        width: 100%;
        text-align: right;

        img{
            min-width: 220px
        }       
    }

    @media(max-width: 1024px) {
        width: fit-content;
        text-align: right;
        img{
            min-width: 250px;
            
        }

        margin-top: -15%;
    }
`;