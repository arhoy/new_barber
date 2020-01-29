import React from 'react';
import styled from '@emotion/styled';

import { ImageContainerSlider2, CustomH2Centered } from './HomeStyling';
import Slider from 'react-slick';
import { ReviewCard } from '../reusableStyles/cards/ReviewCard';

const Card = styled.div`
  outline: none;
`;

const CustomSlider = styled(Slider)``;

const HomeReview = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 5000,
    fadeIn: false,
    autoplay: true,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <CustomH2Centered> Customer Reviews</CustomH2Centered>

      <ImageContainerSlider2>
        <CustomSlider {...settings}>
          <Card>
            <ReviewCard
              blurb={`   Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae
        vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
        voluptas sit aspernatur aut odit aut fugit, sed quia
        consequuntur`}
              img={`https://demoapus.com/abolire/wp-content/uploads/2019/09/avata-1.jpg`}
              user={`Hoark Ficsher`}
            />
          </Card>

          <Card>
            <ReviewCard
              blurb={`   Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae
        vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
        voluptas sit aspernatur aut odit aut fugit, sed quia
        consequuntur`}
              img={`https://demoapus.com/abolire/wp-content/uploads/2019/09/avata-4.jpg`}
              user={`Ana Bella`}
            />
          </Card>
          <Card>
            <ReviewCard
              blurb={`   Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae
        vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
        voluptas sit aspernatur aut odit aut fugit, sed quia
        consequuntur`}
              img={`https://demoapus.com/abolire/wp-content/uploads/2019/09/avata-3.jpg`}
              user={`Dimple Dink`}
            />
          </Card>
          <Card>
            <ReviewCard
              blurb={`   Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae
        vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
        voluptas sit aspernatur aut odit aut fugit, sed quia
        consequuntur`}
              img={`https://demoapus.com/abolire/wp-content/uploads/2019/09/avata-3.jpg`}
              user={`Greco Kohl`}
            />
          </Card>
          <Card>
            <ReviewCard
              blurb={`   Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae
        vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
        voluptas sit aspernatur aut odit aut fugit, sed quia
        consequuntur`}
              img={`https://demoapus.com/abolire/wp-content/uploads/2019/09/avata-3.jpg`}
              user={`Moria Switzl`}
            />
          </Card>
        </CustomSlider>
      </ImageContainerSlider2>
    </>
  );
};

export default HomeReview;
