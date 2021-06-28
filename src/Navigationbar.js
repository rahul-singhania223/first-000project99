import React from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';
import Logo from './imgs/logo.png'

function Navigationbar(props) {
    return (
        <Container>
            <MainContainer>
                <NavBar>
                    <Link to='/'>
                        <NavBrand>
                            logo
                        </NavBrand>
                    </Link>                    

                    <MenuIcon>
                        <img src='https://image.flaticon.com/icons/png/512/130/130918.png' alt='icon' />
                    </MenuIcon>

                    <NavMenu>
                        <NavOption className='first active-page'>home</NavOption>
                        <NavOption>shop</NavOption>
                        <NavOption>blog</NavOption>
                        <NavOption>about</NavOption>
                        <NavOption className='last'>contact</NavOption>
                    </NavMenu>
                    
                    <NavMainMenu>
                        <HeaderOption className='first'><i className='fas fa-search' /></HeaderOption>
                        <HeaderOptionCart className='last'>
                            <Link to='/cart'><Cart><i className='fas fa-shopping-cart' /></Cart></Link>
                            <CarCounter>3</CarCounter>
                        </HeaderOptionCart>
                    </NavMainMenu>
                </NavBar>
            </MainContainer>                        
        </Container>
    );
}

export default Navigationbar;

const Container = Styled.div`     
    background-color: #fff;
    height: 80px;
    padding: 0 4%;    
   
    

`;

const MainContainer = Styled.div`
    max-width: 1300px;
    margin: 0 auto;
    height: 100%;
    
    
`;

const NavBar = Styled.nav`
    display: flex;
    align-items: center;
    height: 100%;
    align-items: center;
    
`;

const NavBrand = Styled.h2`
     text-transform: capitalize;
     font-size: 2rem;
     flex: 0.2;
     cursor: pointer;
    
`;

const MenuIcon = Styled.div`
     display: none;     
     margin-left: auto;
     cursor: pointer;

     img {
        max-width: 35px;
        max-height: 35px;
     }

     
     @media(max-width: 1024px) {
         display: block;
     }

`;

const NavMenu = Styled.ul`
   margin: 0 auto 0 auto;
   text-transform: uppercase;
   font-weight: 600;

   @media(max-width: 1024px) {
        display: none;
    }
  
`;

const NavOption = Styled.li`
    list-style: none;
    display: inline-block;
    margin: 0 29px;
    cursor: pointer;
    padding: 1% 0;
    :hover {
        border-bottom: solid 2px #000;
        padding: 0
    }

      
`;

const NavMainMenu = Styled.div`
    font-size: 1.4rem;
    color: #232323;
    display: flex;
    padding: 0 2%;

    @media(max-width: 1024px) {
        display: none;
    }
    
`;

const HeaderOption = Styled.div`
    list-style: none;
    display: inline-block;
    margin: 0 42px;
    cursor: pointer;

    :hover {
        font-size: 1.7rem;
        transition: 0.2s;
        margin: 0 37px;
    }
`;

const HeaderOptionCart = Styled.div`
    display: flex;
    cursor: pointer;

    :hover {
        font-size: 1.7rem;
        transition: 0.2s;
        margin: 0 -5px;
    }

`;

const Cart = Styled.div``;

const CarCounter = Styled.p`
    font-size: 0.9rem;
    background: #F54748;
    color: #fff;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    text-align: center;
    position: relative;
    z-index: 1;
    right: 12%;
    bottom: 18%;    
`;