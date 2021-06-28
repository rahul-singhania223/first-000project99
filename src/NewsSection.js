import React from 'react';
import Styled from 'styled-components';

function NewsSection(props) {
    return (
        <Container>
            <Header>latest news</Header>
            <MainContainer>
                <NewsContainer className='first'>
                    <ImgContainer></ImgContainer>
                    <News>
                        <Date>12 December 2021</Date>
                        <Headline>South American fashion show</Headline>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <a href='#' >read more</a>
                    </News>

                </NewsContainer>

                <NewsContainer className='last'>
                    <ImgContainer></ImgContainer>
                        <News>
                            <Date>12 December 2021</Date>
                            <Headline>South American fashion show</Headline>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <a href='#' >read more</a>
                        </News>
                </NewsContainer>
            </MainContainer>
            
        </Container>
    );
}

export default NewsSection;

const Container = Styled.div`
    padding: 4% 8%;

`;

const Header = Styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    background-color: #e7e7e7;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1px;
    margin: 4% 0;
`;

const MainContainer = Styled.div`
    display: flex;
`;

const NewsContainer = Styled.div`
    display: flex;   
    margin: 0 4%;
`;

const ImgContainer = Styled.div`
    background-image: url('https://image.freepik.com/free-photo/stylish-fashionable-man_102671-6217.jpg');
    background-size: cover;
    background-position: center;
    width: 50%;
    height: 100%;
    margin-right: 5%;
`;

const News = Styled.div`
    width: 50%;

    p{
        line-height: 1.5rem;
        font-size: 1.1rem;
        padding: 5% 0;
    }

    a {
        text-transform: uppercase;
        font-weight: 700;
        color: #000;
        text-decoration: none;
        :hover {
            border-bottom: solid 2px;
        }
        
    }
`;


const Date = Styled.h3`
    text-transform: capitalize;
    font-size: 1rem;
    color: #5b5b5b;
`;

const Headline = Styled.h2`
    text-transform: capitalize;
    font-size: 1.6rem;
    padding: 5% 0;
`;

