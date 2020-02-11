import React, { useState } from 'react';
import styled from '@emotion/styled';
import ReactMapGL, { Marker } from 'react-map-gl';

import { FaMapMarkerAlt } from 'react-icons/fa';

import { CustomH2 } from '../home/HomeStyling';

const Icon = styled(FaMapMarkerAlt)`
  color: ${props => props.theme.colors.primary};
  font-size: 3rem;
  cursor: pointer;
  &:hover {
    font-size: 4rem;
  }
`;

const Map1 = ({
  latitude,
  longitude,
  title,
  mapStyle,
  height,
  width,
  location,
  zoom,
}) => {
  const [viewport, setViewport] = useState({
    latitude,
    longitude,
    width: width,
    height: height,
    zoom,
  });

  return (
    <div>
      {title && (
        <>
          <CustomH2>{title}</CustomH2>
        </>
      )}

      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.GATSBY_MAPBOX_API_TOKEN}
        mapStyle={mapStyle}
        scrollZoom={false}
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        <Marker
          key={location.title}
          latitude={location.primaryLocation.lat}
          longitude={location.primaryLocation.lon}
        >
          <Icon />
        </Marker>
      </ReactMapGL>
    </div>
  );
};

export default Map1;
