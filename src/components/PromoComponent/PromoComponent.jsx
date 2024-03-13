import React from 'react';
import { Container, Input } from './PromoComponent.styled';
import { ButtonComponent } from 'components/ButtonComponent/ButtonComponent';
import { Title } from './PromoComponent.styled';

export const PromoComponent = () => {
  return (
    <Container>
      <Title>У вас є промокод на знижку?</Title>
      <Input placeholder="Введіть промокод" />
      <ul>
        <li>
          <ul>
            <li>Вартість замовлення</li>
            <li>1800</li>
            <li>₴</li>
          </ul>
        </li>
        <li>
          <ul>
            <li>Знижка</li>
            <li>0</li>
            <li>₴</li>
          </ul>
        </li>
        <li>
          <ul>
            <li>Разом до сплати</li>
            <li>1800</li>
            <li>₴</li>
          </ul>
        </li>
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
