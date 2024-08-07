import React, { useState } from 'react';
import styled from 'styled-components';
import backgroundImg from '../images/backgroung.jpg';
import { FaBars } from 'react-icons/fa';

const HomePage = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <Container>
            <Header>
                <TopInfo>
                    <InfoItem>📞 +1 234 567 890</InfoItem>
                    <InfoItem>📧 contact@expocryptolink.com</InfoItem>
                    <InfoItem>🌍 www.expocryptolink.com</InfoItem>
                </TopInfo>
                <NavBar>
                    <Logo>Expo Crypto Link</Logo>
                    <Hamburger onClick={toggleMenu}>
                        <FaBars />
                    </Hamburger>
                    <Nav menuOpen={menuOpen}>
                        <NavItem>Home</NavItem>
                        <NavItem>Speakers</NavItem>
                        <NavItem>Sponsors</NavItem>
                        <NavItem>Agenda</NavItem>
                        <NavItem>Floor plan</NavItem>
                    </Nav>
                    <Buttons>
                        <Button>Login</Button>
                        <Button>Registration</Button>
                    </Buttons>
                </NavBar>
            </Header>
            <Main>
                <EventDetails>
                    <EventTitle>25th of September, 2024 at 6:30 pm, Dubai, ATLANTIS, THE PALM</EventTitle>
                    <EventName>Expo Crypto Link</EventName>
                    <EventDescription>
                        Expo Crypto Link is the blockchain conference network bringing together the key players of the crypto industry and experts to redefine the future of finance. The edition of the Expo Crypto Link will take place during on 25th of September, 2024 in Dubai with the world's top crypto companies and blockchain entrepreneurs. Today, UAE, specifically Dubai is gearing up to become a global crypto hub. Thus, Expo Crypto Link will be the gathering in the region on behalf of the world of blockchain and cryptocurrency, with a wide range of topics focused on the financial technologies of the future, extensive networking opportunities and participation from more than 40 countries.
                    </EventDescription>
                </EventDetails>
                <Countdown>
                    <CountdownItem>
                        <CountdownBox>
                            <Number>231</Number>
                        </CountdownBox>
                        <Label>Day</Label>
                    </CountdownItem>
                    <CountdownItem>
                        <CountdownBox>
                            <Number>20</Number>
                        </CountdownBox>
                        <Label>Hours</Label>
                    </CountdownItem>
                    <CountdownItem>
                        <CountdownBox>
                            <Number>15</Number>
                        </CountdownBox>
                        <Label>Minutes</Label>
                    </CountdownItem>
                    <CountdownItem>
                        <CountdownBox>
                            <Number>25</Number>
                        </CountdownBox>
                        <Label>Seconds</Label>
                    </CountdownItem>
                </Countdown>
            </Main>
        </Container>
    );
};

const Container = styled.div`
    background-image: url(${backgroundImg});
    background-size: cover;
    background-position: center;
    height: 100vh;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 768px) {
        height: auto;
    }
`;

const Header = styled.header`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const TopInfo = styled.div`
    display: flex;
    justify-content: center;
    background: rgba(0, 0, 0, 0.7);
    padding: 10px;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

const InfoItem = styled.span`
    margin: 0 10px;
    font-family: 'Rubik', sans-serif;
    font-size: 12px;
    @media (max-width: 768px) {
        margin: 5px 0;
    }
`;

const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px 50px;
    background: rgba(0, 0, 0, 0.5);
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 10px 20px;
    }
`;

const Logo = styled.h1`
    font-family: 'Press Start 2P', cursive;
    font-size: 24px;
    color: #a051fc;
    @media (max-width: 768px) {
        font-size: 18px;
    }
`;

const Hamburger = styled.div`
    display: none;
    font-size: 24px;
    cursor: pointer;
    color: white;
    @media (max-width: 768px) {
        display: block;
    }
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: column;
        margin-top: 10px;
        display: ${({ menuOpen }) => (menuOpen ? 'flex' : 'none')};
    }
`;

const NavItem = styled.a`
    margin: 0 15px;
    cursor: pointer;
    font-family: 'Rubik', sans-serif;
    color: #cc5fff;
    @media (max-width: 768px) {
        margin: 5px 0;
    }
`;

const Buttons = styled.div`
    display: flex;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        margin-top: 10px;
    }
`;

const Button = styled.button`
    margin-left: 10px;
    padding: 10px 20px;
    background-color: #8e44ad;
    border: none;
    border-radius: 5px;
    color: white;
    font-family: 'Rubik', sans-serif;
    cursor: pointer;
    @media (max-width: 768px) {
        margin: 5px 0;
    }
`;

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 50px;
`;

const EventDetails = styled.div`
    max-width: 800px;
    margin-bottom: 50px;
    background: rgba(0, 0, 0, 0.7);
    padding: 20px;
    border-radius: 10px;
    @media (max-width: 768px) {
        margin: 20px;
        padding: 10px;
    }
`;

const EventTitle = styled.h2`
    font-family: 'Rubik', sans-serif;
    font-size: 24px;
    margin-bottom: 20px;
    color: #4c168a;
    @media (max-width: 768px) {
        font-size: 18px;
    }
`;

const EventName = styled.h1`
    font-family: 'Press Start 2P', cursive;
    font-size: 48px;
    margin-bottom: 20px;
    color: #7500e3;
    @media (max-width: 768px) {
        font-size: 24px;
    }
`;

const EventDescription = styled.p`
    font-family: 'Rubik', sans-serif;
    font-size: 16px;
    color: #ffffff;
    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

const Countdown = styled.div`
    display: flex;
    justify-content: space-between;
    width: 400px;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

const CountdownItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
`;

const CountdownBox = styled.div`
    background: white;
    padding: 10px;
    border-radius: 5px;
`;

const Number = styled.div`
    font-family: 'Press Start 2P', cursive;
    font-size: 32px;
    color: #a051fc;
    @media (max-width: 768px) {
        font-size: 24px;
    }
`;

const Label = styled.div`
    font-family: 'Rubik', sans-serif;
    font-size: 16px;
    color: #cc5fff;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

export default HomePage;
