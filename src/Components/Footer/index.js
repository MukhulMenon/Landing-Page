import React from 'react'
import { FooterContainer,FooterWrap,FooterLinksContainer,FooterLinksWrapper,FooterLinkItems,FooterLinkTitle,FooterLink,FooterRef } from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> About the project </FooterLinkTitle>
                                <FooterRef href='https://github.com/MukhulMenon/Landing-Page'> Github</FooterRef>
                                <FooterRef href='https://reactjs.org/docs/getting-started.html'>React JS</FooterRef>
                                <FooterRef href='https://firebase.google.com/'>Firebase</FooterRef>
                                <FooterLink to="/signup">Signup</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
