import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { ContentfulHomeSection } from '../home/Section/ContentfulSection';

const TermsAndConditions = () => {
  const contentfulData = useStaticQuery(graphql`
    {
      contentfulSectionSimple(
        id: { eq: "1c900398-0f29-54c6-aab2-e4133fc38d11" }
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

export default TermsAndConditions;
