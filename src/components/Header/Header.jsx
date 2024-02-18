import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  HeaderIconMenuButton,
  HeaderIconMenuItem,
  HeaderIconMenuNav,
  HeaderMenuNavLink,
  HeaderStoreNavItem,
  HeaderStoreNavMenu,
  LogoText,
  Wrapper,
} from './Header.styled';
import { SearchBarComponent } from 'components/SearchBarComponent/SearchBarComponent';
import { Icon } from 'components/Icon/Icon';
import { PopUp } from 'components/Modal/PopUp';

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleIsActive = e => {
    e.stopPropagation();
    setIsActive(true);
  };

  const openPopUp = () => {
    setIsModalOpen(true);
  };

  const openUserCart = () => {
    console.log('HELLO');
  };

  return (
    <Wrapper>
      <Container>
        <LogoText>
          <Link to={'/'}>SportSvit</Link>
        </LogoText>
        <div>
          <nav>
            <HeaderStoreNavMenu>
              <HeaderStoreNavItem>
                <HeaderMenuNavLink to={'/catalog/novelty'}>
                  Новинки
                </HeaderMenuNavLink>
              </HeaderStoreNavItem>
              <HeaderStoreNavItem>
                <HeaderMenuNavLink to={'/catalog'}>Каталог</HeaderMenuNavLink>
              </HeaderStoreNavItem>
              <HeaderStoreNavItem>
                <HeaderMenuNavLink to={'/catalog/women'}>
                  Жінки
                </HeaderMenuNavLink>
              </HeaderStoreNavItem>
              <HeaderStoreNavItem>
                <HeaderMenuNavLink to={'/catalog/man'}>
                  Чоловіки
                </HeaderMenuNavLink>
              </HeaderStoreNavItem>
              <HeaderStoreNavItem>
                <HeaderMenuNavLink to={'/deals'}>Знижки</HeaderMenuNavLink>
              </HeaderStoreNavItem>
            </HeaderStoreNavMenu>
          </nav>
        </div>
        <div>
          <HeaderIconMenuNav>
            <HeaderIconMenuItem>
              <HeaderIconMenuButton
                onClick={handleIsActive}
                type="button"
                aria-label="Search"
                disabled={isActive}
              >
                <Icon id={'search'} width={'24px'} height={'24px'} />
              </HeaderIconMenuButton>
            </HeaderIconMenuItem>
            <HeaderIconMenuItem>
              <HeaderIconMenuButton onClick={openPopUp} aria-label="User">
                <Icon id={'user'} width={'24px'} height={'24px'} />
              </HeaderIconMenuButton>
            </HeaderIconMenuItem>
            <HeaderIconMenuItem>
              <HeaderIconMenuButton type="button" aria-label="User favorites">
                <Icon id={'heart'} width={'24px'} height={'24px'} />
              </HeaderIconMenuButton>
            </HeaderIconMenuItem>
            <HeaderIconMenuItem>
              <Link to={'cart'}>
                <HeaderIconMenuButton
                  type="button"
                  aria-label="Shopping cart"
                  onClick={openUserCart}
                >
                  <Icon id={'shopping-cart'} width={'24px'} height={'24px'} />
                </HeaderIconMenuButton>
              </Link>
            </HeaderIconMenuItem>
            <HeaderIconMenuItem>
              <HeaderIconMenuButton type="button" aria-label="Language">
                {/* <Icon id={'shopping-cart'} width={'24px'} height={'24px'} /> */}
                UA
              </HeaderIconMenuButton>
            </HeaderIconMenuItem>
          </HeaderIconMenuNav>
        </div>
      </Container>
      {isActive ? <SearchBarComponent setIsActive={setIsActive} /> : null}
      {isModalOpen ? (
        <PopUp modalIsOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      ) : null}
    </Wrapper>
  );
};
