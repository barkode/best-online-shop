import React from 'react';
import { Container } from './PromoComponent.styled';

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
      <button>оформити замовлення</button>
    </Container>
  );
};
