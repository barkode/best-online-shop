import React from 'react';
import { Wrapper } from './UserCartComponent.styled';
import { ItemComponent } from 'components/ItemComponent/ItemComponent';
import { styled } from 'styled-components';
import products from '../../data/products.js';

export const UserCartComponent = () => {
  console.log(products);
  const list = products.content.map(({ id, description, price, sizes }) => (
    <ItemComponent
      key={id}
      description={description}
      price={price}
      size={sizes[0].international}
      article={id}
    />
  ));
  console.log(list);
  return <Wrapper>{list}</Wrapper>;
};

export const ItemQuantity = styled.ul`
  display: flex;
  width: 106px;
  height: 40px;
  padding: 8px;
  border: 1px solid ${props => props.theme.colors.stateGray};
  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;
