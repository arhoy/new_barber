import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { ContentfulHomeSection } from './Section/ContentfulSection';

const Home2 = () => {
  const contentfulData = useStaticQuery(graphql`
    {
      contentfulSectionSimple(
        id: { eq: "698772bc-74aa-5f5d-a61f-0481b17fc38d" }
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

export default Home2;
