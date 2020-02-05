import React from 'react';
import styled from '@emotion/styled';
import { FaMapMarkerAlt } from 'react-icons/fa';
import renderRating from '../../../helpers/renderRating';
import { ButtonStyle2 } from '../buttons/Button';
import renderPriceIcon from '../../../helpers/renderPriceIcon';
import { A } from '../typography/Typography';

const Container = styled.div`
  display: grid;
  padding: 2rem 1rem;
  grid-template-columns: 1fr 5fr;
  grid-gap: 1rem;
  &:hover {
    -webkit-box-shadow: 10px 10px 28px 0px rgba(219, 219, 219, 1);
    -moz-box-shadow: 10px 10px 28px 0px rgba(219, 219, 219, 1);
    box-shadow: 10px 10px 28px 0px rgba(219, 219, 219, 1);
    cursor: pointer;
  }
  & a {
    color: ${props => props.theme.colors.darkGrey};
    font-size: 1.3rem;
    border: 1px solid ${props => props.theme.colors.darkGrey};
    padding: 4px;
    border-radius: 4px;
    &:hover {
      font-weight: bold;
    }
  }
`;

const SubContainer1 = styled.div``;

const SubContainer2 = styled.div``;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 1rem;
  & span {
    font-size: 1.5rem;
    color: ${props => props.theme.colors.darkGrey};
  }
`;

const Title = styled.h3`
  font-size: 2rem;
`;

const RatingContainer = styled.div`
  color: ${props => props.theme.colors.primary};
`;

const Picture = styled.div`
  width: 15rem;
  height: 15rem;
  background: black;
`;

const ContentContainer = styled.div`
  font-size: 1.5rem;

  margin-bottom: 1rem;
  margin-right: 1rem;
  font-weight: 400;
`;

const Icon = styled(FaMapMarkerAlt)`
  color: ${props => props.theme.colors.primary};
`;

const AddressContainer = styled(ContentContainer)`
  display: flex;
  justify-content: space-between;
  color: ${props => props.theme.colors.darkGrey};
`;

const PriceContainer = styled(ContentContainer)`
  color: ${props => props.theme.colors.darkGrey};
`;

export const YlpCard = ({ item }) => {
  return (
    <Container>
      <SubContainer1>
        <Picture />
      </SubContainer1>
      <SubContainer2>
        <TitleContainer>
          <Title> {item.title}</Title>
          <span>{item.phoneNumber} </span>
        </TitleContainer>
        <RatingContainer>{renderRating(item.rating)}</RatingContainer>
        <ContentContainer>{item.description.description}</ContentContainer>
        <AddressContainer>
          <div>
            <Icon /> {item.address}
          </div>

          <A target="_blank" rel="noopener nofollow" href={item.website}>
            {' '}
            View Site
          </A>
        </AddressContainer>
        <PriceContainer>
          Price:{` `} {renderPriceIcon(item.price)}{' '}
        </PriceContainer>

        <ButtonStyle2>Book Appointment</ButtonStyle2>
      </SubContainer2>
    </Container>
  );
};
