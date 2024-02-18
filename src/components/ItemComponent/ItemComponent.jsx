import React from 'react';
import { Container } from './ItemComponent.styled';
import { Icon } from 'components/Icon/Icon';

import img from 'images/Rectangle.jpg';

export const ItemComponent = props => {
  return (
    <Container>
      <div>
        <img src={img} alt={'HELLO'} width={'180px'} height={'164px'} />
      </div>
      <div>
        <ul>
          <li>
            <ul>
              <li>Спортивний топ чорного кольору</li>
              <li>940 ₴</li>
            </ul>
          </li>
          <li>Артикул 34950-5</li>
          <li>Розмір М</li>
          <ul>
            <li>
              <ul>
                <li>
                  <Icon
                    id={'plus'}
                    width={'24px'}
                    height={'24px'}
                    style={{ fill: 'black' }}
                  />
                  plus
                </li>
                <li>quantity</li>
                <li>
                  <Icon
                    id={'minus'}
                    width={'24px'}
                    height={'24px'}
                    style={{ fill: 'black' }}
                  />
                  minus
                </li>
              </ul>
            </li>
            <li>
              <Icon
                id={'heart'}
                width={'24px'}
                height={'24px'}
                style={{ fill: 'black' }}
              />
              У вибране
            </li>
            <li>
              <Icon
                id={'delete'}
                width={'24px'}
                height={'24px'}
                style={{ fill: 'black' }}
              />
              Видалити
            </li>
          </ul>
        </ul>
      </div>
    </Container>
  );
};
