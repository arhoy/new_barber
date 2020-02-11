import React from 'react';
import styled from '@emotion/styled';
import renderRating from '../../../helpers/renderRating';

const Container = styled.div`
    background: ${props => props.theme.colors.white}'
`;
const FormHeader = styled.div`
  margin-bottom: 2rem;
  border-bottom: 2px solid ${props => props.theme.colors.primary};
`;

const FormTitle = styled.h3`
  font-size: 2.2rem;
  margin-bottom: 1rem;
`;

const FormContent = styled.div`
  margin-bottom: 1rem;
`;

const FormRatingContainer = styled(FormContent)`
  color: ${props => props.theme.colors.primary};
`;

const FormPhoneNumber = styled(FormContent)`
  color: ${props => props.theme.colors.darkGrey};
`;

export const YlpPopUp = ({ title, rating, businessPhoneNumber }) => {
  return (
    <Container>
      <FormHeader>
        <FormTitle>{title}</FormTitle>
        <FormRatingContainer>
          <div>{renderRating(rating)}</div>
        </FormRatingContainer>
        <FormContent>
          {` Call ${title}  Today to book your appointment`}
        </FormContent>

        <FormPhoneNumber>{businessPhoneNumber}</FormPhoneNumber>
      </FormHeader>
    </Container>
  );
};
