import styled from 'styled-components';



export const Container = styled.div`
  max-width: 792px;
  height: 196px;
  padding: 16px;
  background-color: inherit;
  padding: 16px;
  border: 1px solid ${props => props.theme.colors.stateLightGray};
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;

export const ItemQuantity = styled.ul`
  display: flex;
  width: 106px;
  height: 40px;
  padding: 8px;
  border: 1px solid ${props => props.theme.colors.stateGray};

  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;
