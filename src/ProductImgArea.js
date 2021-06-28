import React from 'react';
import Styled from 'styled-components';
import productimg from './imgs/product-preview.png';
import productImg1 from './imgs/product-img1.png';
import productImg2 from './imgs/product-img2.png'
import productImg3 from './imgs/product-img3.png'
import productImg4 from './imgs/product-img4.png'


function ProductImgArea(props) {
    return (
        <Container>
            <PreviewImgContainer>
                <img src={props.src} alt='product' />
            </PreviewImgContainer>

            <OptionImgContainer>
                <Img><img src={productImg1} alt='product' /></Img>
                <Img><img src={productImg2} alt='product' /></Img>
                <Img><img src={productimg} alt='product' /></Img>
                <Img><img src={productImg4} alt='product' /></Img>
            </OptionImgContainer>
        </Container>
    );
}

export default ProductImgArea;

const Container = Styled.div`
    flex-basis: 48%;

    @media(max-width: 768px) {
        flex-basis: 100%;
    }
    
`;

const PreviewImgContainer = Styled.div`
    background-color: #e7e7e7;
    width: 100%;
    height: 70%;
    padding: 20px;
    text-align: center;

    img {
        max-width: 100%;
        max-height: 100%;
    }
`;

const OptionImgContainer = Styled.div`
    width: 100%;
    height: 23.5%;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;

    @media(max-width: 768px) {
        max-height: 130px;
    }
`;

const Img = Styled.div`
    background: #e7e7e7;
    width: 23%;
    height: 100%;
    padding:15px;

    img {
        max-width: 100%;
        max-height: 100%;
    }
`;