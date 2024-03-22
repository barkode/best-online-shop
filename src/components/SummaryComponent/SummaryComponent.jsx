import { ButtonComponent } from 'components/ButtonComponent/ButtonComponent';
import { PromoInputComponent } from 'components/PromoInputComponent/PromoInputComponent';
import {
  Container,
  PromoInputContainer,
  SummarySectionItemComponent,
  SummarySectionItem,
  SummarySectionItemTotal,
  Title,
} from './SummaryComponent.styled';

export const SummaryComponent = () => {
  return (
    <Container>
      <Title>У вас є промокод на знижку?</Title>
      <PromoInputContainer>
        <PromoInputComponent />
      </PromoInputContainer>
      <ul>
        <li>
          <SummarySectionItemComponent>
            <SummarySectionItem>Вартість замовлення</SummarySectionItem>
            <SummarySectionItemTotal>1800</SummarySectionItemTotal>
            <SummarySectionItemTotal>₴</SummarySectionItemTotal>
          </SummarySectionItemComponent>
        </li>
        <li>
          <SummarySectionItemComponent>
            <SummarySectionItem>Знижка</SummarySectionItem>
            <SummarySectionItemTotal>0</SummarySectionItemTotal>
            <SummarySectionItemTotal>₴</SummarySectionItemTotal>
          </SummarySectionItemComponent>
        </li>
        <li>
          <SummarySectionItemComponent>
            <SummarySectionItemTotal>Разом до сплати</SummarySectionItemTotal>
            <SummarySectionItemTotal>1800</SummarySectionItemTotal>
            <SummarySectionItemTotal>₴</SummarySectionItemTotal>
          </SummarySectionItemComponent>
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
