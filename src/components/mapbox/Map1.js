import React, { useState } from 'react';
import { FaPhone } from 'react-icons/fa';
import styled from '@emotion/styled';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';

import { FaMapMarkerAlt } from 'react-icons/fa';
import { SimpleAlertPrimary } from '../reusableStyles/alerts/SimpleAlerts';
import { Bold, P, A } from '../reusableStyles/typography/Typography';
import { CustomH2 } from '../home/HomeStyling';
import { ButtonStyle2 } from '../reusableStyles/buttons/Button';
import { PopUpForm } from '../forms/PopUpForm';
import PopUpCardDiv from '../reusableStyles/cards/PopUpCardDiv';
import { YlpPopUp } from '../reusableStyles/cards/YlpPopUp';
import Modal from '../reusableStyles/modals/Modal';

const Icon = styled(FaMapMarkerAlt)`
  color: ${props => props.theme.colors.primary};
  font-size: 3rem;
  cursor: pointer;
  &:hover {
    font-size: 4rem;
  }
`;

const PopupDiv = styled.div`
  & h4 {
    margin-bottom: 1rem;
  }
  & p {
    color: ${props => props.theme.colors.darkGrey};
  }
  ${A} {
    color: ${props => props.theme.colors.darkGrey};
  }
`;

const SelectionHighlight = styled.div`
  display: flex;
  justify-content: flex-end;
  background: ${props => props.theme.colors.white};
`;

const PhoneIcon = styled(FaPhone)`
  transform: rotate(100deg);
`;

const Map1 = ({
  latitude,
  longitude,
  title,
  mapStyle,
  height,
  width,
  data,
  zoom,
  selectedHandler,
  selected,
}) => {
  const [viewport, setViewport] = useState({
    latitude,
    longitude,
    width: width,
    height: height,
    zoom,
  });

  const [modal, setModal] = useState(false);

  const modalHandler = () => {
    setModal(prev => !prev);
  };

  return (
    <>
      {modal && (
        <>
          <Modal onClick={modalHandler} />
          <PopUpCardDiv>
            {selected.bookAppointment ? (
              <PopUpForm
                background={'white'}
                color={`black`}
                title={selected.title}
                rating={selected.rating}
                businessPhoneNumber={selected.phoneNumber}
              />
            ) : (
              <YlpPopUp
                title={selected.title}
                rating={selected.rating}
                businessPhoneNumber={selected.phoneNumber}
              />
            )}
          </PopUpCardDiv>
        </>
      )}
      <div>
        {title && (
          <>
            <CustomH2>{title}</CustomH2>
            <P> {selected ? `${selected.name}` : `Select Location`}</P>
          </>
        )}

        <ReactMapGL
          onClick={() => selectedHandler(null)}
          {...viewport}
          mapboxApiAccessToken={process.env.GATSBY_MAPBOX_API_TOKEN}
          mapStyle={mapStyle}
          scrollZoom={true}
          onViewportChange={viewport => {
            setViewport(viewport);
          }}
        >
          {data.map((location, i) => (
            <Marker
              key={location.title}
              latitude={location.primaryLocation.lat}
              longitude={location.primaryLocation.lon}
            >
              <Icon
                onClick={e => {
                  selectedHandler(e, location);
                }}
              />
            </Marker>
          ))}
          {selected && (
            <Popup
              latitude={selected.primaryLocation.lat}
              longitude={selected.primaryLocation.lon}
              closeButton={true}
              closeOnClick={false}
              onClose={() => selectedHandler(null)}
              anchor="top"
            >
              <PopupDiv>
                <h4> {selected.title}</h4>
                <p>
                  <PhoneIcon />{' '}
                  <A href={`tel:${selected.phoneNumber}`}>
                    {selected.phoneNumber}
                  </A>
                </p>
                <p> {selected.address} </p>
                <ButtonStyle2 onClick={modalHandler}>Book Now</ButtonStyle2>
              </PopupDiv>
            </Popup>
          )}
        </ReactMapGL>

        <SelectionHighlight>
          <SimpleAlertPrimary>
            <span>
              <Bold>
                {' '}
                {selected
                  ? `${selected.title}`
                  : 'Click map Icon to view location'}{' '}
              </Bold>
            </span>
          </SimpleAlertPrimary>
        </SelectionHighlight>
      </div>
    </>
  );
};

export default Map1;
