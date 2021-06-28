import React from 'react';
import Styled from 'styled-components';

function Header(props) {
    return (
        <Container>
           <MainContainer>
            <HelpContainer>
                    <CallUs>
                        <i class="fas fa-phone-alt"></i>
                    +91 9939878713
                    </CallUs>
                </HelpContainer>

                <PersonalContainer>
                    <MyAccount>
                        <i class="far fa-user"></i>
                        my account
                    </MyAccount>

                    <LanguageChanger>
                        english
                        <i class="fas fa-angle-down"></i>
                    </LanguageChanger>
                </PersonalContainer>
           </MainContainer>
            
        </Container>
    );
}

export default Header;

const Container = Styled.div`
    height: 40px;    
    color: #AFB9C8;
    background-color: black;    
    @media (max-width: 1024px) {
        display: none;        
    }

    padding: 0 4%;
    
       
`;

const MainContainer = Styled.div`
   
    max-width: 1300px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
`;

const HelpContainer  = Styled.div`
    flex: 1;
    font-size: 0.9em;
    
`;

const CallUs = Styled.div`
    padding: 0 2%;
    border-left: solid 1px #fff;
    cursor: pointer;

    i {
        margin: 0 2%;
    }
    
`;

const PersonalContainer = Styled.div`
    display: flex;
    align-items: center;
    text-transform: capitalize;
    font-size: 0.9rem;

   
`;

const MyAccount = Styled.div`
    padding: 0 26px;
    border-right: solid 1px #fff;
    cursor: pointer;
    
    i {
        margin: 0 14px;
        
    }
`;

const LanguageChanger = Styled.div`
    cursor: pointer;
    padding: 0 26px;
    i {
        margin-left: 14px;
    }
`;