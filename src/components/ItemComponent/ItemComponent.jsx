import { Icon } from 'components/Icon/Icon';
import img from 'images/Rectangle.jpg';
import { useState } from 'react';
import { Container, ItemQuantity } from './ItemComponent.styled';

export const ItemComponent = ({ description, price, size, article }) => {
  const [quantity, setQuantity] = useState(1);
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
               <button type="button" onClick={() => setQuantity(quantity + 1)}>
                 У вибране
               </button>
             </li>
             <li>
               <Icon
                 id={'delete'}
                 width={'24px'}
                 height={'24px'}
                 style={{ fill: 'black' }}
               />
               <button type="button" onClick={() => setQuantity(quantity - 1)}>
                 Видалити
               </button>
             </li>
           </ul>
         </ul>
       </div>
     </Container>
   );
};
