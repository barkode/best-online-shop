import React from 'react';
import { Wrapper } from './UserCartComponent.styled';
import { ItemComponent } from 'components/ItemComponent/ItemComponent';


export const UserCartComponent = () => {
  return (
    <Wrapper>
      <ItemComponent
        key={''}
        description={''}
        price={''}
        size={''}
        article={''}
      />
    </Wrapper>
  );
};
