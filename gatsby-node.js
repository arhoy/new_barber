const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const { data } = await graphql(`
    {
      menuItems: allContentfulMenuItems {
        nodes {
          slug
        }
      }
      allShopifyProduct {
        nodes {
          handle
        }
      }
      allContentfulYlp {
        nodes {
          slug
        }
      }
    }
  `);

  // creates pages Menu via contentful!
  data.menuItems.nodes.forEach(item => {
    createPage({
      path: `menu/${item.slug}`,
      component: path.resolve('./src/templates/MenuItemTemplate.js'),
      context: {
        slug: item.slug,
      },
    });
  });

  // creates product pages via Shopify!
  data.allShopifyProduct.nodes.forEach(item => {
    createPage({
      path: `product/${item.handle}`,
      component: path.resolve('./src/templates/Shopify/ShopifyProductPage.js'),
      context: {
        handle: item.handle,
      },
    });
  });

  // create barber pages via contentful
  data.allContentfulYlp.nodes.forEach(item => {
    console.log('ITEM SLUG IS', item.slug);
    createPage({
      path: `barbershop/${item.slug}`,
      component: path.resolve('./src/templates/Barber.js'),
      context: {
        slug: item.slug,
      },
    });
  });
};
