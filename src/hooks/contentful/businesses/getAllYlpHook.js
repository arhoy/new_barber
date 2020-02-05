import { graphql, useStaticQuery } from 'gatsby';

const GetAllYlpHook = () => {
  const data = useStaticQuery(graphql`
    {
      allItems: allContentfulYlp {
        nodes {
          id
          title
          slug
          description {
            description
          }
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
