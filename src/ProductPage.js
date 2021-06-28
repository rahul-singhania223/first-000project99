import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';
import Header from './Header'
import Navigationbar from './Navigationbar'
import ProductImgArea from './ProductImgArea';
import ProductInfoArea  from './ProductInfoArea';
import Product from './Product';
import product1 from './imgs/product-img1.png';
import product2 from './imgs/product-img2.png'
import product3 from './imgs/product-img3.png'
import Footer from './Footer'
import productimg from './imgs/product-preview.png';
import { db } from './firebase';



function ProductPage(props) {

    const [product, setProduct] = useState({})

    const getProduct = () => {
        db.collection('productPage').onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
                setProduct({
                    name: doc.data().name,
                    realPrice: doc.data().realPrice,
                    fakePrice: doc.data().fakePrice,
                    img: doc.data().img,
                    qty: doc.data().qty,
                    colors: doc.data().colors,
                    sizes: doc.data().sizes
                    
                })
                
            })
        })
    }

    useEffect(() => {
        getProduct();
    }, [])

    
   

    return (
        <div>
            <Header />
            <Navigationbar />
            <Container>
                <MainContainer>
                    <ProductImgArea src={product.img} />
                    <ProductInfoArea
                        product={product}
                    />
                </MainContainer>

                <RelatedProductContainer>
                    <HeaderText>
                        <hr />
                        <p>related products</p>
                        <hr />
                    </HeaderText>

                    <ProductContainer>
                        <Product src={product1} />
                        <Product  src={product2} />
                        <Product  src={product3} />
                        <Product  src={product3} />

                        <Product  src={product2} />
                        <Product src={product1} />
                        <Product  src={product2} />
                        <Product  src={product3} />
                    </ProductContainer>
                </RelatedProductContainer>

               
            </Container> 
            <Footer />
        </div>
    );
}

export default ProductPage;

const Container = Styled.div`
    padding: 4%;
`;

const MainContainer = Styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1300px;
    margin: 0 auto;
    height: 900px;
    box-sizing: border-box;

    @media(max-width: 768px) {
        flex-wrap: wrap;
        height: auto;
       
    }
`;

const RelatedProductContainer = Styled.div`
    max-width: 1300px;
    margin: 0 auto;
    padding: 120px 0;
`;

const HeaderText = Styled.div`
    display: flex;
    align-items: center;
    text-transform: capitalize;
    
    p {
        padding: 0 9px;
        font-weight: 700;
        font-size: 1.1rem;
    }
    
    hr {
        flex: 1;
        border: solid 1px;
    }
   
`;

const ProductContainer = Styled.div`
    display: flex;
    justify-content: space-between;
    margin: 60px 0;
    flex-wrap: wrap;

    @media(max-width: 580px) {
        justify-content: center;
    }
`;


