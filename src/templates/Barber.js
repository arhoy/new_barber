import React, { useState } from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';

import { FaMapMarkerAlt } from 'react-icons/fa';
import Layout from '../components/layouts/Layout';

import { ButtonStyle2 } from '../components/reusableStyles/buttons/Button';
import MapOneLocation from '../components/mapbox/MapOneLocation';
import renderPriceIcon from '../helpers/renderPriceIcon';
import renderRating from '../helpers/renderRating';
import { A } from '../components/reusableStyles/typography/Typography';
import { YlpPopUp } from '../components/reusableStyles/cards/YlpPopUp';
import { PopUpForm } from '../components/forms/PopUpForm';

// run template query
export const query = graphql`
  query getFullBarber($slug: String!) {
    barber: contentfulYlp(slug: { eq: $slug }) {
      title
      slug
      description {
        description
      }
      images {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      bookAppointment
      city
      address
      phoneNumber
      price
      website
      rating
      primaryLocation {
        lat
        lon
      }
    }
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 6fr 5fr;

  background: ${props => props.theme.colors.primary};
  min-height: 50rem;
`;

const Header = styled.div`
  grid-column: 1/-1;
  row: 1/2;
  background: ${props => props.theme.colors.lightgrey};
  display: flex;
  padding: 1rem 0;
  align-items: center;
  justify-content: space-around;
`;

const HeaderTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 400;
`;

const HeaderButton = styled.p`
  font-style: italic;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    display: none;
  }
`;

const SubContainer1 = styled.div`
  min-height: 40vh;
  background: ${props => props.theme.colors.white};
  grid-column: 1/-1;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
  }
`;

const SubContainer2 = styled.div`
  grid-column: 1/-1;
  background: ${props => props.theme.colors.lightgrey};
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    display: none;
  }
`;

const ContentContainer = styled.div`
  font-size: 1.5rem;

  margin: 2rem;
  font-weight: 400;
`;

const DescriptionContainer = styled(ContentContainer)`
  color: ${props => props.theme.colors.darkGrey};
  line-height: 2.2rem;
`;

const PriceContainer = styled(ContentContainer)`
  color: ${props => props.theme.colors.darkGrey};
`;

const Title = styled.h2`
  font-size: 2.4rem;
  padding: 2rem;
  padding-bottom: 0rem;
`;

const RatingContainer = styled(ContentContainer)`
  color: ${props => props.theme.colors.primary};
  display: flex;
  margin-top: 1rem;
  justify-content: space-between;
  & span {
    color: ${props => props.theme.colors.darkGrey};
  }
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

const AddressContainer = styled(ContentContainer)`
  color: ${props => props.theme.colors.darkGrey};

  & ${A} {
    color: ${props => props.theme.colors.darkGrey};
    &:hover {
      color: ${props => props.theme.colors.black};
    }
  }
`;

const Icon = styled(FaMapMarkerAlt)`
  color: ${props => props.theme.colors.primary};
`;

const Modal = styled.div`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  background: ${props => props.theme.colors.blackTransparent};
  width: 100vw;
  height: 100vh;
`;

const PopUpCardDiv = styled.div`
  z-index: 11;
  position: absolute;

  padding: 2rem 1rem;

  background: ${props => props.theme.colors.white};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    width: 100%;
  }
`;

const Barber = ({ data: { barber } }) => {
  const [modal, setModal] = useState(false);

  const modalHandler = () => {
    setModal(prev => !prev);
  };
  return (
    <Layout>
      {modal && (
        <>
          <Modal onClick={modalHandler} />
          <PopUpCardDiv>
            {barber.bookAppointment ? (
              <PopUpForm
                background={'white'}
                color={`black`}
                title={barber.title}
                rating={barber.rating}
                businessPhoneNumber={barber.phoneNumber}
              />
            ) : (
              <YlpPopUp
                title={barber.title}
                rating={barber.rating}
                businessPhoneNumber={barber.phoneNumber}
              />
            )}
          </PopUpCardDiv>
        </>
      )}
      <Container>
        <Header>
          <HeaderTitle> Edmonton's Best Barbers </HeaderTitle>

          <HeaderButton> Find Your Barber Today </HeaderButton>
        </Header>
        <SubContainer1>
          <Title>{barber.title}</Title>
          <RatingContainer>
            <div>{renderRating(barber.rating)}</div>
            <span>{barber.phoneNumber}</span>
          </RatingContainer>

          <DescriptionContainer>
            {barber.description.description}
          </DescriptionContainer>

          <PriceContainer>
            Price:{` `} {renderPriceIcon(barber.price)}{' '}
          </PriceContainer>

          <AddressContainer>
            <div>
              <Icon />{' '}
              <A
                target="_blank"
                rel="noopener nofollow"
                href={`https://www.google.com/maps/search/?api=1&query=${barber.primaryLocation.lat},${barber.primaryLocation.lon}`}
              >
                {' '}
                {barber.address}
              </A>{' '}
            </div>
          </AddressContainer>
          <ButtonContainer>
            <ButtonStyle2 onClick={modalHandler}>Book Appointment</ButtonStyle2>
            <A target="_blank" rel="noopener nofollow" href={barber.website}>
              View Site
            </A>
          </ButtonContainer>
        </SubContainer1>

        <SubContainer2>
          <MapOneLocation
            location={barber}
            mapStyle="mapbox://styles/arhoy/ck5n2qqyf0i0v1inwxwapkl7c"
            width="100%"
            height="40rem"
            zoom={12}
            latitude={barber.primaryLocation.lat}
            longitude={barber.primaryLocation.lon}
          />
        </SubContainer2>
      </Container>
    </Layout>
  );
};
export default Barber;
