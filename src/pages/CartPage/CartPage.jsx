import React from 'react';

import { Container, Wrapper } from './CartPage.styled';
import { PromoComponent } from 'components/PromoComponent/PromoComponent';
import { UserCartComponent } from 'components/UserCartComponent/UserCartComponent';

export const CartPage = () => {
  return (
    <Wrapper>
      <Container>
        <UserCartComponent />
        <PromoComponent />
      </Container>
    </Wrapper>
  );
};
