import React from 'react';

import { Wrapper } from './CartPage.styled';
import { PromoComponent } from 'components/PromoComponent/PromoComponent';
import { UserCartComponent } from 'components/UserCartComponent/UserCartComponent';

export const CartPage = () => {
  return (
    <Wrapper>
      <UserCartComponent />
      <PromoComponent />
    </Wrapper>
  );
};
