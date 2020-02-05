import React, { useState } from 'react';
import styled from '@emotion/styled';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import storeLocations from './data/dataCoordinates';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { SimpleAlertPrimary } from '../reusableStyles/alerts/SimpleAlerts';
import { Bold, P } from '../reusableStyles/typography/Typography';
import { CustomH2 } from '../home/HomeStyling';

const Icon = styled(FaMapMarkerAlt)`
  color: ${props => props.theme.colors.primary};
  font-size: 3rem;
`;

const PopupDiv = styled.div``;

const SelectionHighlight = styled.div`
  display: flex;
  justify-content: flex-end;
  background: ${props => props.theme.colors.white};
`;

const Map1 = ({ title, mapStyle, height, width }) => {
  const [viewport, setViewport] = useState({
    latitude: 53,
    longitude: -113,
    width: width,
    height: height,
    zoom: 4,
  });

  const [selected, setSelected] = useState(null);
  const selectedHandler = (e, selected) => {
    setSelected(selected);
  };
  return (
    <div>
      {title && (
        <>
          <CustomH2>{title}</CustomH2>
          <P> {selected ? `${selected.name}` : `Select Location`}</P>
        </>
      )}

      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.GATSBY_MAPBOX_API_TOKEN}
        mapStyle={mapStyle}
        scrollZoom={true}
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        {storeLocations.map(location => (
          <Marker
            key={location.name}
            latitude={location.coordinates.lat}
            longitude={location.coordinates.long}
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
            latitude={selected.coordinates.lat}
            longitude={selected.coordinates.long}
            onClose={() => {
              setSelected(null);
            }}
          >
            <PopupDiv>
              <h4> {selected.name}</h4>
              <p> {selected.address} </p>
            </PopupDiv>
          </Popup>
        )}
      </ReactMapGL>

      {selected && (
        <SelectionHighlight>
          <SimpleAlertPrimary>
            <P>
              This is the <Bold>{selected.name} </Bold> location
            </P>
          </SimpleAlertPrimary>
        </SelectionHighlight>
      )}
    </div>
  );
};

export default Map1;
