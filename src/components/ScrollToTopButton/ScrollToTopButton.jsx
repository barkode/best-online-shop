import React, { useState, useEffect } from 'react';
import { Button, Container } from './ScrollToTopButton.styled';
import { Icon } from 'components';

export const ScrollToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {backToTopButton && (
        <Container>
          <Button type="button" onClick={scrollUp}>
            <Icon />
          </Button>
        </Container>
      )}
    </>
  );
};
