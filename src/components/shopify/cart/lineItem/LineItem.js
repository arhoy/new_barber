import React, { useContext } from 'react';
import styled from '@emotion/styled';

import StoreContext from '../../../../context/StoreContext';
import { ButtonStyle2 } from '../../../reusableStyles/buttons/Button';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 2rem 0 2rem 0;
`;

const LineItem = props => {
  const { line_item } = props;
  const {
    removeLineItem,
    store: { client, checkout },
  } = useContext(StoreContext);

  const variantImage = line_item.variant.image ? (
    <img
      src={line_item.variant.image.src}
      alt={`${line_item.title} product shot`}
      height="60px"
    />
  ) : null;

  const selectedOptions = line_item.variant.selectedOptions
    ? line_item.variant.selectedOptions.map(
        option => `${option.name}: ${option.value} `,
      )
    : null;

  const handleRemove = () => {
    removeLineItem(client, checkout.id, line_item.id);
  };

  return (
    <Wrapper>
      {variantImage}
      <p>
        {line_item.title}
        {`  `}
        {line_item.variant.title === !'Default Title'
          ? line_item.variant.title
          : ''}
      </p>
      {selectedOptions}
      {line_item.quantity}
      <ButtonStyle2 onClick={handleRemove}>Remove</ButtonStyle2>
    </Wrapper>
  );
};

export default LineItem;
