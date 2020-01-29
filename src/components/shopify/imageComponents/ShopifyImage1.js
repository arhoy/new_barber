import React from 'react';

import styled from '@emotion/styled';

const ImageContainer = styled.div`
  width: 30rem;
`;

const Image = styled.img`
  width: 100%;
`;

export const ShopifyImage1 = ({ images, imageId }) => {
  return (
    <ImageContainer>
      <Image src={images[imageId].localFile.childImageSharp.fluid.src} />
    </ImageContainer>
  );
};
