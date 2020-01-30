import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { ContentfulHomeSection } from '../home/Section/ContentfulSection';

const PrivacyPolicy = () => {
  const contentfulData = useStaticQuery(graphql`
    {
      contentfulSectionSimple(
        id: { eq: "8f521152-ced9-5373-a6a3-907d7cb07106" }
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

export default PrivacyPolicy;
