import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';
import Product from './Product';
import product1 from './imgs/product-img1.png';
import product2 from './imgs/product-img2.png';
import product3 from './imgs/product-img3.png';
import product4 from './imgs/product-img4.png';
import { db } from './firebase';



function ProductCategorySection(props) {

    const [products, setProducts] = useState([]);

    const getItem = () => {
        db.collection('HomeProducts').onSnapshot((snapshot) => {
            let tempData = [];
            tempData = snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    product: doc.data()
                }
            ))

            setProducts(tempData);
        })
    }

    useEffect(() => {
        getItem()
    }, [])

    console.log(products);

    

    return (
        <Container>
            <MainContainer>
                <Header>
                    <NewArrival>new arrival</NewArrival>
                    <MostPopular className='active-category'>most popular</MostPopular>
                    <BestSeller>best seller</BestSeller>

                    <IconContainer>
                        <img src='https://image.flaticon.com/icons/png/512/271/271210.png' />
                    </IconContainer>
                </Header>

                <ProductContainer>
                    {products.map((data) => (
                        <Product
                            src={data.product.img}
                            name={data.product.name}
                            realPrice={data.product.realPrice}
                            fakePrice={data.product.fakePrice}
                            sizes={data.product.sizes}
                            colors={data.product.colors}
                        />
                        
                    ))}

                    {products.map((data) => (
                        <Product
                            src={data.product.img}
                            name={data.product.name}
                            realPrice={data.product.realPrice}
                            fakePrice={data.product.fakePrice}
                            sizes={data.product.sizes}
                            colors={data.product.colors}
                           
                        />
                        
                    ))}
                </ProductContainer>            
            </MainContainer>
        </Container>
    );
}

export default ProductCategorySection;

const Container = Styled.div`
    padding: 0 4%;
`;

const MainContainer = Styled.div`
    max-width: 1300px;
    margin: 0 auto;

`;

const Header = Styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-weight: 900;
    letter-spacing: 2px;
    background-color: #e7e7e7e7;
    height: 60px;
`;

const NewArrival = Styled.div`
    padding: 0 3%;
    cursor: pointer;

    :hover {
        color: #5b5b5b;
    }

    @media(max-width: 768px) {
        display: none;
    }
`;

const MostPopular = Styled.div`
    padding: 0 3%;
    border-left: solid 2px #AFB9C8;
    border-right: solid 2px #AFB9C8;
    cursor: pointer;

    :hover {
        color: #5b5b5b;
    }

    @media(max-width: 768px) {
        display: none;
    }
`;

const BestSeller = Styled.div`
    padding: 0 3%;
    cursor: pointer;

    :hover {
        color: #5b5b5b;
        transition: 0.3s;
    }
`;

const IconContainer = Styled.div`
    display: none;
    width: 18px;
    height: 18px;
    margin-left: 16px;
    margin-right: -12px;

    img {
        max-width: 100%;
        max-height: 100%
    }

    @media(max-width: 768px) {
        display: block;
    }
`;

const ProductContainer = Styled.div`
    margin: 40px 0;
    display: flex;
    justify-content: space-between;

    @media(max-width: 1280px) {
        flex-wrap: wrap;
        justify-content: space-between;
    }
    
    @media(max-width: 924px) {
        flex-wrap: wrap;
        justify-content: space-between;
    } 

    @media(max-width: 768px) {
        flex-wrap: wrap;
        justify-content: space-between;
    }

   @media(max-width: 580px) {
       flex-wrap: wrap;
       justify-content: center;
   }
  
`;