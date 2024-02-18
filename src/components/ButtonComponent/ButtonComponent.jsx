import React from 'react';
import { BtnContainer } from './ButtonComponent.styled';

export const ButtonComponent = ({ children, ...props }) => {
  return <BtnContainer {...props}>{children}</BtnContainer>;
};
