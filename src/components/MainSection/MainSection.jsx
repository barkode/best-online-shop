import { Swiper } from 'swiper/react';
import { Pagination, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import {
  Container,
  LinkTo,
  Section,
  Slide,
  Text,
  Title,
} from './MainSection.styled';

// import heroBgFirst from '../../images/Hero/hero-bg-first.jpg';
// import heroBgFirst2x from '../../images/Hero/hero-bg-first@2x.jpg';
// import heroBgSec from '../../images/Hero/hero-bg-sec.jpg';
// import heroBgSec2x from '../../images/Hero/hero-bg-sec@2x.jpg';
// import heroBgThird from '../../images/Hero/hero-bg-third.jpg';
// import heroBgThird2x from '../../images/Hero/hero-bg-third@2x.jpg';

import {
  heroBgFirst,
  heroBgFirst2x,
  heroBgSec,
  heroBgSec2x,
  heroBgThird,
  heroBgThird2x,
} from 'images';
import { useDispatch } from 'react-redux';
import { getProducts } from '../../redux/products/operations';
export const MainSection = () => {
  const dispatch = useDispatch();
  const handle = () => {
    try {
      dispatch(getProducts());
    } catch (error) {
      console.error(error);
    }
  };
  const backgroundImages = [
    `url(${heroBgFirst}),-webkit-image-set(url(${heroBgFirst}) 1x, url(${heroBgFirst2x}) 2x`,
    `url(${heroBgSec}),-webkit-image-set(url(${heroBgSec}) 1x, url(${heroBgSec2x}) 2x`,
    `url(${heroBgThird}),-webkit-image-set(url(${heroBgThird}) 1x, url(${heroBgThird2x}) 2x`,
  ];
  return (
    <Section>
      <Swiper
        style={{
          height: 1024,
        }}
        slidesPerView={1}
        effect="fade"
        modules={[Pagination, EffectFade, Autoplay]}
        fadeEffect={{ crossFade: true }}
        direction={'vertical'}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className}" style="margin: 8px 0; width:24px; height:24px; border: 1px solid #F9F9F9;"></span>`;
          },
        }}
      >
        {backgroundImages.map((item, index) => (
          <Slide
            key={index}
            style={{
              backgroundImage: item,
            }}
          >
            <Container>
              <Title>SportSvit</Title>
              <Text>
                Енергія в стилі, сила в кожному шовку – вибери свій шлях до
                перемоги!
              </Text>
              <LinkTo onClick={() => handle()}>Перейти до покупок</LinkTo>
            </Container>
          </Slide>
        ))}
      </Swiper>
    </Section>
  );
};
