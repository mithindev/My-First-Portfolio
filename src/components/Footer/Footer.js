import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:999-88-77-44">999-88-77-44</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>email</LinkTitle>
          <LinkItem href="mailto:mithindev1@gmail.com">mithindev1@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Draft|MIHTIN DEV|</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://linkedin.com">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://instagram.com">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
