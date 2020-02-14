// import { graphql, useStaticQuery } from 'gatsby';

// const GetAllShopifyProductsHook = () => {
//   const data = useStaticQuery(graphql`
//     {
//       allItems: allShopifyProduct {
//         nodes {
//           id
//           title
//           description
//           descriptionHtml
//           tags
//           productType
//           images {
//             originalSrc
//           }
//           priceRange {
//             minVariantPrice {
//               amount
//             }
//           }
//         }
//       }
//     }
//   `);

//   const items = data.allItems.nodes;

//   return items;
// };

// export default GetAllShopifyProductsHook;
