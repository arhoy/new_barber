import React, { useRef, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { TweenMax, TimelineMax, Elastic, Back } from 'gsap';

const Card = styled.div`
  width: 10rem;
  height: 20rem;
  background: red;
`;

export const Animations = () => {
  let cardRef = useRef(null);

  const [mouseAnimation, setMouseAnimation] = useState();
  useEffect(() => {
    console.log('I was entered~');
    setMouseAnimation(
      TweenMax.to(cardRef, 1, {
        scale: 1,
        filter: 'none',
        ease: Elastic.easeOut.config(1, 0.75),
      }).pause(),
    );
  }, []);

  return (
    <>
      <Card
        onMouseEnter={() => mouseAnimation.play()}
        className="dog-card "
        ref={element => {
          cardRef = element;
        }}
      >
        I am a card
      </Card>
    </>
  );
};
