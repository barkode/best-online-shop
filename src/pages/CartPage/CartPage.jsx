import { SummaryComponent } from 'components/SummaryComponent/SummaryComponent';
import { UserCartComponent } from 'components/UserCartComponent/UserCartComponent';
import { Container, Wrapper } from './CartPage.styled';

export const CartPage = () => {
  return (
    <Wrapper>
      <Container>
        <UserCartComponent />
        <SummaryComponent />
      </Container>
    </Wrapper>
  );
};
