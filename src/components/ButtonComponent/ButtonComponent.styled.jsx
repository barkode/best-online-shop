import styled from 'styled-components';

export const BtnContainer = styled.button`
  display: block;
  font-family: ${props => props.theme.fonts.firstFontFamily};
  font-weight: ${props => props.$style.fontWeight || '500'};
  font-size: ${props => props.$style.fontSize || '16px'};
  line-height: ${props => props.$style.lineHeight || '1.17'};
  width: ${props => props.$width || '200px'};
  height: ${props => props.$height || '60px'};
  color: ${props => props.$style.color || 'white'};
  background-color: ${props => props.$style.backgroundColor || 'black'};
  text-align: ${props => props.$style.textAlign || 'center'};
  text-transform: ${props => props.$style.textTransform || 'uppercase'};
  text-decoration: ${props => props.$style.textDecoration || 'none'};
  border: ${props => props.$style.border || 'none'};
  border-radius: ${props => props.$style.borderRadius || '4px'};
  padding: ${props => props.$style.padding || '8px'};
  margin: ${props => props.$style.margin || '0'};
  transform: ${props => props.$style.padding || '8px'};
  transition: ${props =>
    props.$style.transition ||
    'color 250ms cubic-bezier(0.4, 0, 0.2, 1),background-color 250ms cubic-bezier(0.4, 0, 0.2, 1)'};

  &:hover {
    color: black;
    background-color: #fff;
  }
`;
