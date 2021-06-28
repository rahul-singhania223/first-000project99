import React from 'react';
import Styled from 'styled-components';

function CartTotal(props) {
    return (
        <Container>
            <Header>cart total</Header>

            <MainContainer>
                <Items>
                    <Title>items:</Title>
                    <Value>{props.totalItems}</Value>
                </Items>

                <Shipping>
                    <Title>shipping:</Title>
                    <Value>4</Value>
                </Shipping>

                <Shipping>
                    <Title>discount:</Title>
                    <Value>- $40</Value>
                </Shipping>

                <Total>
                    <TotalTitle>total:</TotalTitle>
                    <TotalPrice>${props.totalPrice}</TotalPrice>
                </Total>

                                
            </MainContainer>

            <ActionBtn>checkout</ActionBtn>
            
        </Container>
    );
}

export default CartTotal;

const Container = Styled.div`
    padding: 22px;
    background-color: #dddd;
    border-radius: 5px;
`;

const Header = Styled.h2`
    text-transform: uppercase;
    font-size: 1.4rem;
    border-bottom: solid 1px;
    padding: 9px 0;    
`;

const MainContainer = Styled.div`
    padding: 40px;
`;

const Items = Styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 22px 0;    
`;

const Title = Styled.h4`
    text-transform: capitalize;
    font-size: 1.3rem;    
`;

const Value = Styled.h4``;

const Shipping = Items;

const Total = Items;

const TotalTitle = Styled.h4`
    text-transform: capitalize;
    font-size: 1.6rem;    
`;

const TotalPrice = Styled.h4`
    font-size: 1.5rem;
`;

const ActionBtn = Styled.button`
    width: 100%;
    height: 50px;
    text-transform: capitalize;
    background: black;
    border: none;
    color: #e7e7e7;
    font-weight: 700;
    font-size: 0.9rem;
    cursor: pointer;
    margin: 45px 0;

`;
