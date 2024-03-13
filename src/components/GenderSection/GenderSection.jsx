import {
  Btn,
  Container,
  ForHer,
  ForHim,
  HiddenTitle,
  List,
  Section,
  Title,
  WinterForHer,
  WinterForHim,
} from './GenderSection.styled';

export const GenderSection = ({ type }) => {
  return (
    <Section>
      <Container>
        {type === 'winter' ? (
          <>
            <Title>Зимова колекція</Title>
            <List>
              <WinterForHer>
                <Btn to={'/catalog/women'}>Для неї</Btn>
              </WinterForHer>
              <WinterForHim>
                <Btn to={'/catalog/man'}>Для нього</Btn>
              </WinterForHim>
            </List>
          </>
        ) : (
          <>
            <HiddenTitle>Для неї / Для нього</HiddenTitle>
            <List>
              <ForHer>
                <Btn to={'/catalog/women'}>Для неї</Btn>
              </ForHer>
              <ForHim>
                <Btn to={'/catalog/man'}>Для нього</Btn>
              </ForHim>
            </List>
          </>
        )}
      </Container>
    </Section>
  );
};
