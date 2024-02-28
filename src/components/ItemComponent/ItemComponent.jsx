import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from './ItemComponent.styled';
import { Icon } from 'components/Icon/Icon';
import { getAllCartProducts } from 'redux/cart/operations';
import img from 'images/Rectangle.jpg';
import { ItemQuantity } from 'components/UserCartComponent/UserCartComponent';

export const ItemComponent = ({ description, price, size, article }) => {
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const a = useSelector(getAllCartProducts);
  console.dir(a);

  return (
    <Container>
      <div>
        <img src={img} alt={'HELLO'} width={'180px'} height={'162px'} />
      </div>
      <div>
        <ul>
          <li>
            <ul>
              <li>{description}</li>
              <li>{`${price} ₴`}</li>
            </ul>
          </li>
          <li>{`Артикул ${article}`}</li>
          <li>{`Розмір ${size}`}</li>
          <ul>
            <li>
              <ItemQuantity>
                <li>
                  <div>
                    <Icon
                      id={'plus'}
                      width={'24px'}
                      height={'24px'}
                      style={{ fill: 'black' }}
                    />
                  </div>
                </li>
                <li>
                  <span>{quantity}</span>
                </li>
                <li>
                  <Icon
                    id={'minus'}
                    width={'24px'}
                    height={'24px'}
                    style={{ fill: 'black' }}
                  />
                </li>
              </ItemQuantity>
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
