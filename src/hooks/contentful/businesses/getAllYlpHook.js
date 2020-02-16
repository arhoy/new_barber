import { graphql, useStaticQuery } from 'gatsby';

const GetAllYlpHook = () => {
  const data = useStaticQuery(graphql`
    {
      allItems: allContentfulYlp(sort: { fields: rating, order: DESC }) {
        nodes {
          id
          title
          slug
          description {
            description
            childMarkdownRemark {
              html
            }
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
    }
  `);

  const items = data.allItems.nodes;

  return items;
};

export default GetAllYlpHook;
