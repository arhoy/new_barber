import React, { useState, useContext, useEffect, useCallback } from 'react';
import styled from '@emotion/styled';
import find from 'lodash/find';
import isEqual from 'lodash/isEqual';
import PropTypes from 'prop-types';
import StoreContext from '../../../context/StoreContext';

import { ButtonStyle2 } from '../../reusableStyles/buttons/Button';
import { ShopifyCartButton } from '../cart/ShopifyCartButton';
import { ShopifyImage1 } from '../imageComponents/ShopifyImage1';

const Container = styled.div`
  padding: 2rem 0;

  & input,
  select {
    padding: 0.5rem;
    width: 10rem;
    border-radius: 4px;
    outline: none;
    border: none;
  }
  & label {
    display: flex;
    width: 10rem;
    margin-bottom: 3px;
  }
`;

const Option = styled.div`
  margin: 1rem 0;
`;

const PriceContainer = styled.div`
  font-size: 3rem;
  color: ${props => props.theme.colors.primaryDark};
`;

const ProductTemplate = ({ product }) => {
  const {
    options,
    variants,
    variants: [initialVariant],
    priceRange: { minVariantPrice },
    images,
  } = product;

  const [variant, setVariant] = useState({ ...initialVariant });
  const [quantity, setQuantity] = useState(1);
  const [imageId, setImageId] = useState(0);
  const {
    addVariantToCart,
    store: { client, adding },
  } = useContext(StoreContext);

  const productVariant =
    client.product.helpers.variantForOptions(product, variant) || variant;
  const [available, setAvailable] = useState(productVariant.availableForSale);

  const checkAvailability = useCallback(
    productId => {
      client.product.fetch(productId).then(() => {
        // this checks the currently selected variant for availability
        const result = variants.filter(
          variant => variant.shopifyId === productVariant.shopifyId,
        );
        setAvailable(result[0].availableForSale);
      });
    },
    [client.product, productVariant.shopifyId, variants],
  );

  useEffect(() => {
    checkAvailability(product.shopifyId);
  }, [productVariant, checkAvailability, product.shopifyId]);

  const handleQuantityChange = ({ target }) => {
    setQuantity(target.value);
  };

  const handleOptionChange = (index, e, name) => {
    const optionIndex = e.target.selectedIndex;
    console.log('EVENT OPTION INDEX IS', optionIndex, name);

    if (name === 'Color') {
      setImageId(optionIndex);
    }
    const { value } = e.target;

    const currentOptions = [...variant.selectedOptions];

    currentOptions[index] = {
      ...currentOptions[index],
      value,
    };

    const selectedVariant = find(variants, ({ selectedOptions }) =>
      isEqual(currentOptions, selectedOptions),
    );

    setVariant({ ...selectedVariant });
  };

  const handleAddToCart = () => {
    addVariantToCart(productVariant.shopifyId, quantity);
  };

  const checkDisabled = (name, value) => {
    const match = find(variants, {
      selectedOptions: [
        {
          name: name,
          value: value,
        },
      ],
    });
    if (match === undefined) return true;
    if (match.availableForSale === true) return false;
    return true;
  };

  const price = Intl.NumberFormat(undefined, {
    currency: minVariantPrice.currencyCode,
    minimumFractionDigits: 2,
    style: 'currency',
  }).format(variant.price);

  return (
    <Container>
      <PriceContainer>{price}</PriceContainer>
      {options.length > 0 &&
        options.map(({ id, name, values }, index) => {
          // index of the each option type ie Color, Capacity
          // name : ie(Color,Capacity)
          if (name === 'Title') {
            return null;
          } else {
            return (
              <Option key={id}>
                <label htmlFor={name}> {name} </label>
                <select
                  name={name}
                  key={id}
                  onChange={event => handleOptionChange(index, event, name)}
                >
                  {name}
                  {values.map((value, i) => (
                    <option
                      optionindex={i}
                      value={value}
                      key={`${name}-${value}`}
                      disabled={checkDisabled(name, value)}
                    >
                      {value}
                    </option>
                  ))}
                </select>
              </Option>
            );
          }
        })}
      {}
      <label htmlFor="quantity">Quantity </label>
      <input
        type="number"
        id="quantity"
        name="quantity"
        min="1"
        step="1"
        onChange={handleQuantityChange}
        value={quantity}
      />
      <ButtonStyle2
        type="submit"
        disabled={!available || adding}
        onClick={handleAddToCart}
        style={{ display: 'block' }}
      >
        Add to Cart
      </ButtonStyle2>
      <ShopifyCartButton text1={`CheckOut`} text2={`Cart`} />
      {!available && <p>This Product is out of Stock!</p>}

      <ShopifyImage1 images={images} imageId={imageId} />
    </Container>
  );
};

ProductTemplate.propTypes = {
  product: PropTypes.shape({
    descriptionHtml: PropTypes.string,
    handle: PropTypes.string,
    id: PropTypes.string,
    shopifyId: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        originalSrc: PropTypes.string,
      }),
    ),
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        values: PropTypes.arrayOf(PropTypes.string),
      }),
    ),
    productType: PropTypes.string,
    title: PropTypes.string,
    variants: PropTypes.arrayOf(
      PropTypes.shape({
        availableForSale: PropTypes.bool,
        id: PropTypes.string,
        price: PropTypes.string,
        title: PropTypes.string,
        shopifyId: PropTypes.string,
        selectedOptions: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string,
            value: PropTypes.string,
          }),
        ),
      }),
    ),
  }),
  addVariantToCart: PropTypes.func,
};

export default ProductTemplate;
