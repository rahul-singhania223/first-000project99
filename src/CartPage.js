import React, { useEffect, useState } from 'react';
import Header from './Header'
import Navigaionbar from './Navigationbar';
import Styled from 'styled-components';
import CartTotal from './CartTotal';
import CartProduct from './CartProduct';
import { db } from './firebase';

function CartPage(props) {
    const [products, setProducts] = useState([])
    let totalItems = 0;
    let totalPrice = 0;

   

    const getItem = () => {
        db.collection('cartItem').onSnapshot((snapshot) => {
            let tempData = [];
            tempData = snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    product: doc.data()
                }
            ))

            setProducts(tempData)
        })
    }

    useEffect(() => {
        getItem()
    }, [])

    products.map((data) => {
        totalItems = totalItems + data.product.qty;
        totalPrice = totalPrice + (data.product.qty * data.product.realPrice)        
    })

    console.log(totalItems);

    return (
        <div>
            <Header />
            <Navigaionbar />

            <Container>
                <MainContainer>
                    <HeaderText>shopping cart</HeaderText>
                    <CartContainer>
                        <CartArea>
                           {products.map((data) => (
                               <CartProduct 
                                price={data.product.realPrice}
                                name={data.product.name}
                                qty={data.product.qty}
                                id={data.id}

                               />
                           ))}
                        </CartArea>

                        <CartTotalArea>
                           <CartTotal
                            totalItems={totalItems}
                            totalPrice={totalPrice}
                            />
                        </CartTotalArea>                      
                                                
                    </CartContainer>
                </MainContainer>
            </Container>

            
        </div>
    );
}

export default CartPage;

const Container = Styled.div`    
    padding: 4%;
`;

const MainContainer = Styled.div`
    max-width: 1300px;
    margin: 0 auto;
`;

const HeaderText = Styled.h1`
    text-transform: capitalize;
    font-size: 2rem;
    padding: 13px 0;
    border-bottom: solid 2px #5b5b5b;

    @media(max-width: 768px) {
        font-size: 1.7rem;
    }
    
`;

const CartContainer = Styled.div`
    display: flex;
    margin: 40px 0;   
    background-color: #e7e7e7;
    border-radius: 5px;
    
    @media(max-width: 768px) {
        flex-wrap: wrap;
    }
`;

const CartArea = Styled.div`
    flex-basis: 70%;
    padding: 41px;

    @media(max-width: 768px) {
        padding: 41px 22px;
    }
`;

const CartTotalArea = Styled.div`
    flex-basis: 30%;

    @media(max-width: 768px) {
        flex-basis: 100%;
        margin-top: 20px;
    }
`;