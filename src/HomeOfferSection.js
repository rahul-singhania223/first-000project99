import React from 'react';
import Styled from 'styled-components';
import offerImg from './imgs/offer-img.png';
import product1 from './imgs/product1.png'
import product2 from './imgs/product2.png'
import product3 from './imgs/product3.png'

function HomeOfferSection(props) {
    return (
        <Container>
            <SuperContainer>
                <Header>
                    men's skin care <span> products </span>
                </Header>

                <MainContainer>
                    <OfferContainer>
                        <OfferText>
                            <h3>special offer</h3>
                            <h1>sale upto <span>35%</span><br /> off</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
                            <button>see all</button>
                        </OfferText>

                        <OfferImg>
                            <img src={offerImg} />
                        </OfferImg>
                        
                    </OfferContainer>

                    <OtherContainer>
                        <ProductContainer>
                            <TextContainer>
                                <h3>hot product</h3>
                                <h2>proffesional super cutter trimmer</h2>
                                <button>shop now</button>
                            </TextContainer>

                            <Img src={product1} />                        
                        </ProductContainer>

                        <Product>
                            <Product1>
                                <img src={product2} alt='product-img' />
                            </Product1>

                            <Product2>
                                <img src={product3} alt='product-img' />
                            </Product2>
                        </Product>

                        
                    </OtherContainer>
                </MainContainer>            
            </SuperContainer>
        </Container>
    );
}

export default HomeOfferSection;

const Container = Styled.div`   
   margin: 150px auto;
   padding: 0 4%;  
   
`;

const SuperContainer = Styled.div`
    max-width: 1300px;
    margin: 0 auto;
`;

const Header = Styled.div`
    height: 60px;
    background-color: #e7e7e7e7;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    word-spacing: 5px;
    letter-spacing: 1px;
    

    span {
        padding-left: 9px;
    }

    @media(max-width: 768px) {
        span{
            display: none;
        }
    }
    
`;

const MainContainer = Styled.div`
    margin: 80px auto;
    height: 600px;
    display: flex;
    
    
    @media(max-width: 768px) {
        flex-wrap: wrap;
        height: auto;
    }
   
   
`;

const OfferContainer = Styled.div`
    width: 50%;
    height: 100%;
    min-width: 445px;
    background: #e7e7e7;
    padding: 25px;
    cursor: pointer;
    box-sizing: border-box;
    margin-bottom: 40px;
    margin-right: 20px;
    
    @media(max-width: 768px) {
        min-width: 100%;
        max-height: 600px;
    }

    
`;

const OfferImg = Styled.div`
   width: 100%;
   text-align: right;
   margin-top: -12%;
      
   img {
       max-width: 63%;       
   }

   @media(max-width: 580px) {
       img {
           min-width: 80%;
           margin-top: 23px;
       }      
   }

   @media(max-width: 768px) {
       img{

       }
   }

  

    
`;

const OfferText = Styled.div`
   
    
    h3{
        font-size: 1.3rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: #5b5b5b;
        

        @media(max-width: 580px) {
            font-size: 1.1rem;
        }
    }

    h1 {
        text-transform: uppercase;
        font-size: 3rem;
        padding: 18px 0;

        span {
            color: red;
        }

        @media(max-width: 580px) {
            font-size: 2.4rem
        }
    }

    p {
        font-size: 1.2rem;
        line-height: 2rem;
        text-transform: capitalize;
        color: #5b5b5b;
        padding: 1% 0;

        @media(max-width: 580px) {
            font-size: 1.1rem;
        }
    }

    button {
        background: none;
        border: solid 2px;
        width: 170px;
        height: 50px;        
        text-transform: capitalize;
        font-weight: 700;
        letter-spacing: 2px;
        margin: 20px 0;
        cursor: pointer;
        transition: background 0.5s;

        :hover {
            background: #000;
            color: #dddd;
            border: none;
            transition: 0.2s;
        }
    }
`;

const Img = Styled.img`
    max-width: 100%;
    max-height: 68%;

    min-width: 50%;
    min-height: 68%;
    
`;

const OtherContainer = Styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    
    @media(max-width: 768px) {
        width: 100%;
        height: 600px;        
    }
  
   
`;


const ProductContainer  = Styled.div`
    width: 50%;
    min-width: 235px;
    height: 100%;
    background: #e7e7e7;
    padding: 20px;
    cursor: pointer;



    h3 {
        text-transform: uppercase;
        font-size: 1rem;
        color: #5b5b5b;
    }

    h2 {
        text-transform: uppercase;
        padding: 3% 0;
        line-height: 2.3rem;

    }

    button {
        width: 130px;
        height: 40px;
        background: none;
        border: none;
        border-bottom: solid 2px;
        font-size: 0.8rem;
        font-weight: 900;
        letter-spacing: 1px;
        text-transform: uppercase;
        margin: 2% 0;
        cursor: pointer;

        :hover {
            border: none;
            
        }
        

    }
`;

const TextContainer = Styled.div`

`;

const Product = Styled.div`
    width: 50%;
    min-width: 200px;
    height: 100%;
    margin-left: 18px;

    @media(max-width: 768px) {
        flex-basis: 70%;       
    }
`;

const Product1 = Styled.div`
    width: 100%;
    height: 50%;
    max-height: 48.5%;
    background: #e7e7e7;
    margin-bottom: 18px;
    display: flex;
    cursor: pointer;
    justify-content: center;

    img {
        max-width: 100%;
        max-height: 100%;
        margin-top: auto;
    }
`;

const Product2 = Product1;