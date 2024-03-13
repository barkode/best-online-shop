import { useEffect, useState } from 'react';
import scrollToTopImg from '../../images/scrollToTop.png';
import { Button } from './ScrollToTopButton.styled';

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
        <Button type="button" onClick={scrollUp}>
          <img src={`${scrollToTopImg}`} alt="Scroll to top" />
        </Button>
      )}
    </>
  );
};
