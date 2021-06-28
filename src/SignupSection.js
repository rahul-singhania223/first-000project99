import React from 'react';
import Styled from 'styled-components';

function SignupSection(props) {
    return (
        <Container>
            <TextContainer>
                <h1>sign up to our newsletter</h1>
                <p>get 30% disscount on each product on your first order after sign up. do signup now.</p>
            </TextContainer>

            <FormContainer>
                <form>
                    <input type='text' placeholder='Enter your email address' />
                    <button>subscribe</button>
                </form>
            </FormContainer>
            
        </Container>
    );
}

export default SignupSection;

const Container = Styled.div`
    background-color: #e7e7e7;
    padding: 80px 0;
`;


const TextContainer = Styled.div`
   text-align: center;
   display: flex;
   flex-direction: column;
   align-items: center;



   h1 {
       text-transform: uppercase;
       font-size: 1.9rem;
       letter-spacing: 3px;
       font-weight: 900; 
       
       @media(max-width: 768px) {
           font-size: 1.5rem;
       }
   }

   p {
       font-size: 1rem;
       text-transform: capitalize;
       font-weight: 700;
       letter-spacing: 1px;
       line-height: 1.9rem;
       padding: 2% 0;
       width: 50%;

       @media(max-width: 1080px) {
            width: 70%;
        }

       @media(max-width: 768px) {
           padding: 30px 0;
           width: 90%;
       }

       
   }

`;

const FormContainer = Styled.div`
   text-align: center;
   margin: 30px 0;
     

   form {
    border: solid 2px;
    height: 55px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    margin: 0 auto;
    padding-left: 24px;

    @media(max-width: 1080px) {
        width: 90%;
        max-width: 700px;
    }
    
   }

   input {
       height: 100%;
       flex: 1;
       background: none;
       border: none;
       font-size: 1.3rem;

       :focus{
           outline: none;
       }
   }

   button {
       height: 100%;       
       border: none;
       background: #000;
       color: #e7e7e7;
       width: 120px;
       text-transform: uppercase;
       cursor: pointer;
   }
   
`;
