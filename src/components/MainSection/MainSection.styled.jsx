import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SwiperSlide } from 'swiper/react';

export const Section = styled.section`
  width: 100%;
  @media (min-width: 768px) {
  }
`;
export const Container = styled.div`
  padding: 0 28px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  @media (min-width: 768px) {
    max-width: 676px;
    padding: 0 40px;
  }
`;
export const Title = styled.h1`
  color: ${props => props.theme.main.mainTitleColor};
  font-size: 90px;
  font-weight: 700;
  line-height: 121px;
  text-transform: uppercase;
  @media (min-width: 768px) {
    font-size: 120px;
    line-height: 151px;
  }
`;
export const Text = styled.p`
  color: ${props => props.theme.main.textColor};
  font-size: 28px;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 5px;
  @media (min-width: 768px) {
    font-size: 32px;
  }
`;
export const LinkTo = styled.button`
  padding: 20px 0;
  width: 100%;
  background: ${props => props.theme.main.colorBlack};
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-transform: uppercase;
  text-align: center;
  color: ${props => props.theme.main.textColor};
  transition: ${props => props.theme.main.transition};
  border: none;
  border-radius: 4px;
  &:hover {
    color: ${props => props.theme.main.colorBlack};
    background: ${props => props.theme.main.textColor};
  }
  @media (min-width: 768px) {
    width: 50%;
  }
`;
export const Slide = styled(SwiperSlide)`
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 372px 0;
  background-position: center;
`;
