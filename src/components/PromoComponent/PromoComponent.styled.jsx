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
`;

export const Input = styled.input`
  display: inline-block;
  width: 230px;
  height: 52px;
  padding: 16px 83px 16px 8px;
`;
