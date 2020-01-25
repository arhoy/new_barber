// relates to snipcart
import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/layouts/Layout';
import GetAllMenusHook from '../hooks/contentful/products/menu/getAllMenuItemsHook';
import MenuItem from '../components/menuItemContentful/MenuItem';
import {
  Section,
  ContainerCenterFlex,
  SectionHexaGrey,
  Container1200,
} from '../components/reusableStyles/sections/Sections';
import { H1 } from '../components/reusableStyles/typography/Typography';

const SectionTitleCustom = styled(SectionHexaGrey)`
  margin-top: -2rem;
  margin-bottom: 0;
  padding: 2rem;
  border: 2rem solid ${props => props.theme.colors.primaryDark};
`;

const RecipeLayoutCustom = styled(ContainerCenterFlex)`
  margin-top: -4rem;
`;

const menu = () => {
  const data = GetAllMenusHook();
  return (
    <Layout>
      <SectionTitleCustom>
        <Container1200>
          <H1>Our Menu</H1>
        </Container1200>
      </SectionTitleCustom>
      <Section>
        <RecipeLayoutCustom>
          {data.map(item => (
            <MenuItem item={item} />
          ))}
        </RecipeLayoutCustom>
      </Section>
    </Layout>
  );
};
export default menu;
