import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FaMapMarkerAlt } from 'react-icons/fa';
import renderRating from '../../../helpers/renderRating';
import { ButtonStyle2 } from '../buttons/Button';
import renderPriceIcon from '../../../helpers/renderPriceIcon';
import { A } from '../typography/Typography';
import { descriptionTruncate } from '../../../helpers/descriptionTruncate';

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

  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    grid-template-columns: 1fr;
  }
`;

const SubContainer1 = styled.div``;

const SubContainer2 = styled.div``;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 1rem;
  margin-bottom: 1rem;
  & span {
    font-size: 1.5rem;
    color: ${props => props.theme.colors.darkGrey};
  }
`;

const Title = styled.h3`
  font-size: 2rem;
`;

const Picture = styled.div`
  width: 15rem;
  height: 15rem;
  background: black;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    width: 100%;
    max-width: 32rem;
    margin: 0 auto;
  }
`;

const ContentContainer = styled.div`
  font-size: 1.5rem;

  margin-bottom: 1rem;
  margin-right: 1rem;
  font-weight: 400;
`;

const RatingContainer = styled(ContentContainer)`
  color: ${props => props.theme.colors.primary};
  display: flex;
  justify-content: space-between;
  & span {
    color: ${props => props.theme.colors.darkGrey};
  }
`;

const AddressContainer = styled(ContentContainer)`
  color: ${props => props.theme.colors.darkGrey};

  & ${A} {
    color: ${props => props.theme.colors.darkGrey};
    &:hover {
      color: ${props => props.theme.colors.black};
    }
  }
`;

const PriceContainer = styled(ContentContainer)`
  color: ${props => props.theme.colors.darkGrey};
`;

const ButtonContainer = styled(ContentContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & ${A} {
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

const Icon = styled(FaMapMarkerAlt)`
  color: ${props => props.theme.colors.primary};
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: ${props => props.theme.colors.blackTransparent};
  width: 100vw;
  height: 100vh;
  z-index: 10;
`;

export const YlpCard = ({ location }) => {
  const [modal, setModal] = useState(false);
  const modalHandler = () => {
    console.log('Modal Sate', modal);
    setModal(prev => !prev);
  };
  return (
    <>
      {modal && (
        <Modal onClick={modalHandler}>
          <div> Call US NOW</div>
        </Modal>
      )}

      <Container>
        <SubContainer1>
          <Picture />
        </SubContainer1>
        <SubContainer2>
          <TitleContainer>
            <Title> {location.title}</Title>
          </TitleContainer>
          <RatingContainer>
            <div>{renderRating(location.rating)}</div>
            <span>{location.phoneNumber}</span>
          </RatingContainer>
          <ContentContainer>
            {descriptionTruncate(location.description.description, 140)}
          </ContentContainer>

          <PriceContainer>
            Price:{` `} {renderPriceIcon(location.price)}{' '}
          </PriceContainer>

          <AddressContainer>
            <div>
              <Icon />{' '}
              <A
                target="_blank"
                rel="noopener nofollow"
                href={`https://www.google.com/maps/search/?api=1&query=${location.primaryLocation.lat},${location.primaryLocation.lon}`}
              >
                {' '}
                {location.address}
              </A>{' '}
            </div>
          </AddressContainer>
          <ButtonContainer>
            <ButtonStyle2 onClick={modalHandler}>Book Appointment</ButtonStyle2>
            <A target="_blank" rel="noopener nofollow" href={location.website}>
              View Site
            </A>
          </ButtonContainer>
        </SubContainer2>
      </Container>
    </>
  );
};
