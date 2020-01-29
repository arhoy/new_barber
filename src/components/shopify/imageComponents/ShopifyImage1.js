import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import styled from '@emotion/styled';

const ImageContainer = styled.div`
  object-fit: cover;
  max-width: 34rem;
`;

const Image = styled.img`
  width: 100%;
  cursor: pointer;
`;

export const ShopifyImage1 = ({ images, imageId }) => {
  const [modal, setModal] = useState(false);
  return (
    <ImageContainer>
      {modal && (
        <Lightbox
          mainSrc={images[imageId].localFile.childImageSharp.fluid.src}
          onCloseRequest={e => setModal(false)}
        >
          Due
        </Lightbox>
      )}
      <Image
        onClick={e => setModal(true)}
        src={images[imageId].localFile.childImageSharp.fluid.src}
      />
    </ImageContainer>
  );
};
