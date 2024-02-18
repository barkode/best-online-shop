import React from 'react';
import { Container } from './PromoComponent.styled';
import { ButtonComponent } from 'components/ButtonComponent/ButtonComponent';

export const PromoComponent = () => {
  return (
    <Container>
      <h2>У вас є промокод на знижку?</h2>
      <input />
      <ul>
        <li>Вартість замовлення</li>
        <li>Знижка</li>
        <li>Разом до сплати</li>
      </ul>
      <ButtonComponent
        $style={{ padding: '20px 33px', lineHeight: '1.26' }}
        $styleActive={{}}
        $width={'284px'}
        $height={'60px'}
      >
        <span>оформити замовлення</span>
      </ButtonComponent>
    </Container>
  );
};
