import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import backgroundImg from '../images/backgroung.jpg';
import LogoImg from '../images/logo 2.png';

const HomePage = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <Container>
            <Header position="static">
                <TopInfo>
                    <InfoItem>📞 +1 234 567 890</InfoItem>
                    <InfoItem>📧 contact@expocryptolink.com</InfoItem>
                    <InfoItem>🌍 www.expocryptolink.com</InfoItem>
                </TopInfo>
                <Toolbar>
                    <Logo>
                        <LogoImage src={LogoImg} alt="Expo Crypto Link Logo" />
                        <LogoText>Expo Crypto Link</LogoText>
                    </Logo>
                    <NavDesktop>
                        <NavItem>Home</NavItem>
                        <NavItem>Speakers</NavItem>
                        <NavItem>Sponsors</NavItem>
                        <NavItem>Agenda</NavItem>
                        <NavItem>Floor Plan</NavItem>
                    </NavDesktop>
                    <ButtonsDesktop>
                        <StyledButton component={Link} to="/login" variant="contained" color="secondary">
                            Login
                        </StyledButton>
                        <StyledButton component={Link} to="/registration" variant="contained" color="secondary">
                            SignUp
                        </StyledButton>
                    </ButtonsDesktop>
                    <MenuButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleMenu}
                    >
                        <MenuIcon />
                    </MenuButton>
                </Toolbar>
            </Header>
            <Drawer anchor="left" open={menuOpen} onClose={closeMenu}>
                <DrawerContent>
                    <CloseButton onClick={closeMenu}>
                        <CloseIcon />
                    </CloseButton>
                    <List>
                        {['Home', 'Speakers', 'Sponsors', 'Agenda', 'Floor Plan'].map((text) => (
                            <ListItem button key={text} onClick={closeMenu}>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                        <ListItem button component={Link} to="/login" onClick={closeMenu}>
                            <ListItemText primary="Login" />
                        </ListItem>
                        <ListItem button component={Link} to="/registration" onClick={closeMenu}>
                            <ListItemText primary="Registration" />
                        </ListItem>
                    </List>
                </DrawerContent>
            </Drawer>
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
                        <Label>Days</Label>
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
    min-height: 100vh;
    color: #fff;
    display: flex;
    flex-direction: column;
`;

const Header = styled(AppBar)`
    background-color: transparent !important;
    box-shadow: none !important;
`;

const TopInfo = styled.div`
    display: flex;
    justify-content: center;
    background: rgba(0, 0, 0, 0.7);
    padding: 5px;
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
        margin: 2px 0;
        font-size: 10px;
    }
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    flex-grow: 1;
`;

const LogoImage = styled.img`
    height: 60px;
    @media (max-width: 768px) {
        height: 40px;
    }
`;

const LogoText = styled.h1`
    font-family: cursive;
    font-size: 16px;
    color: #ffff;
    @media (max-width: 768px) {
        font-size: 18px;
    }
`;

const NavDesktop = styled.nav`
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
        display: none;
    }
`;

const NavItem = styled.a`
    margin: 0 15px;
    cursor: pointer;
    font-family: 'Rubik', sans-serif;
    color: #ffffff;
`;

const ButtonsDesktop = styled.div`
    display: flex;
    @media (max-width: 768px) {
        display: none;
    }
`;

const StyledButton = styled(Button)`
    margin-left: 10px !important;
`;

const MenuButton = styled(IconButton)`
    display: none !important;
    @media (max-width: 768px) {
        display: block !important;
    }
`;

const DrawerContent = styled.div`
    width: 250px;
    background-color: #000;
    height: 100%;
    color: #fff;
`;

const CloseButton = styled(IconButton)`
    color: #fff !important;
    position: absolute !important;
    right: 10px !important;
    top: 10px !important;
`;

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 30px;
    flex-grow: 1;
`;

const EventDetails = styled.div`
    max-width: 800px;
    margin-bottom: 50px;
    background: rgba(0, 0, 0, 0.7);
    padding: 20px;
    border-radius: 10px;
    @media (max-width: 768px) {
        padding: 15px;
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
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    max-width: 600px;
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
    margin-bottom: 5px;
`;

const Number = styled.span`
    font-family: 'Press Start 2P', cursive;
    font-size: 24px;
    color: black;
`;

const Label = styled.span`
    font-family: 'Rubik', sans-serif;
    font-size: 14px;
    color: #ffffff;
`;

export default HomePage;
