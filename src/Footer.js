import React, { useState } from 'react';
import Styled from 'styled-components';

function Footer(props) {
 

    return (
        <Container>
            <MainContainer>
                <Personal>
                    <Header>logo</Header>
                    <Main>
                        <p>234 dist. road new york, USA</p>
                        <p>(+91) 9939878713</p>
                    </Main>
                </Personal>
                <QuickLinks>
                    <Header>quick links</Header>
                    <Links>
                        <ul>
                            <li>shopping cart</li>
                            <li>site map</li>
                            <li>affiliate program</li>
                            <li>track order</li>
                            <li>about us</li>
                        </ul>
                    </Links>
                </QuickLinks>
                <Policy>
                    <Header>privay & Policy</Header>
                </Policy>
                <Instagram>
                    <Header>instagram</Header>
                </Instagram>
            </MainContainer>
            <Copyright>©2021 all copyrights reserved. Designed and Developed by <span>Rahul Singhania</span></Copyright>            
        </Container>
    );
}

export default Footer;

const Container = Styled.div`
    background-color: #444444;
    color: #fff;    
    padding: 4% 8%
`;

const MainContainer = Styled.div`
    display: flex;
    justify-content: space-between;
`;

const Copyright = Styled.div`
    text-align: center;
    font-size: 1.1rem;
    letter-spacing: 1px;
    text-transform: capitalize;
    padding: 2% 0;

    span {
        font-weight: 700;
    }
`;

const Header = Styled.div`
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1px;
    font-size: 1.2rem;
`;

const Main = Styled.div`
    padding: 20% 0;
        
    p{
        padding: 4% 0
    }
`;

const Personal = Styled.div`
    text-transform: capitalize;
`;

const QuickLinks = Styled.div`

`;

const Links = Styled.div`
    ul {
        margin: 20% 0;
    }
    li {
        list-style: none;
        text-transform: capitalize;
        font-size: 1.2rem;
        padding: 8% 0;
        cursor: pointer;
        :hover {
           text-decoration: underline;
        }
    }
`;

const Policy = Styled.div`

`;

const Instagram = Styled.div`

`;