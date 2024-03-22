import styled from 'styled-components';

export const Container = styled.div`
  width: 384px;
  height: 416px;
  padding: 48px 50px;
  background-color: ${props => props.theme.colors.stateLightGray};
`;

export const Title = styled.h2`
  font-family: ${props => props.theme.fonts.firstFontFamily};
  font-size: 16px;
  font-weight: 600;
  line-height: 1.26;
  color: ${props => props.theme.colors.basicDark};

  padding-bottom: 24px;
`;

export const PromoInputContainer = styled.div`
  margin-bottom: 24px;
`;

export const SummarySectionItemComponent = styled.ul`
  display: flex;
`;

export const SummarySectionItem = styled.li`
  font-family: ${props => props.theme.fonts.firstFontFamily};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.26;
  color: ${props => props.theme.colors.basicDark};

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const SummarySectionItemTotal = styled(SummarySectionItem)`
  font-weight: 600;
`;
