import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { ContentfulHomeSection } from './Section/ContentfulSection';

const Home4 = () => {
  const contentfulData = useStaticQuery(graphql`
    {
      contentfulSectionSimple(
        id: { eq: "6d8c4d90-cbf4-5a79-a528-874139c85dff" }
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

export default Home4;
