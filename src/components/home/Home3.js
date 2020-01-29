import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { ContentfulHomeSection } from './Section/ContentfulSection';

const Home3 = () => {
  const contentfulData = useStaticQuery(graphql`
    {
      contentfulSectionSimple(
        id: { eq: "f98dfaf8-dd0f-505e-a302-3ec7b6ca20e0" }
      ) {
        id
        title
        columnReverse
        subtitle {
          subtitle
        }
        pictures {
          fluid(maxWidth: 500) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        description {
          json
        }
      }
    }
  `);

  return (
    <ContentfulHomeSection data={contentfulData.contentfulSectionSimple} />
  );
};

export default Home3;
