
import React,{lazy} from "react";
import loadable from '@loadable/component'
import {useQuery,gql} from '@apollo/client';
import * as MENUS from '../constants/menus';
import {BlogInfoFragment, themeGeneralSettingsFragment} from '../fragments/GeneralSettings';
import {
  NavigationMenu
} from '../components';


const RenderBlocks = loadable(() => import('../components/RenderBlocks/RenderBlocks'))
const Header = loadable(() => import('../components/Header/Header'))
const Footer = loadable(() => import('../components/Footer/Footer'))
const Main = loadable(() => import('../components/Main/Main'))
const Container = loadable(() => import('../components/Container/Container'))
const SEO = loadable(() => import('../components/SEO/SEO'))



import AcfHeroHome from '../wp-blocks/AcfHeroHome';
import AcfArticles from '../wp-blocks/AcfArticles';
import AcfCaseStudies from '../wp-blocks/AcfCaseStudies';
import AcfPartners from '../wp-blocks/AcfPartners';
import AcfProvideSolutions from '../wp-blocks/AcfProvideSolutions';
import AcfSlider from '../wp-blocks/AcfSlider';
import AcfTestimonials from '../wp-blocks/AcfTestimonials';
import AcfTextImageBlock from '../wp-blocks/AcfTextImageBlock';



//import components from '../wp-blocks';
import {flatListToHierarchical} from '@faustwp/core';
import {WordPressBlocksViewer} from '@faustwp/blocks';



export default function Component(props) {
  const {data} = useQuery(Component.query,{
    variables: Component.variables()

  });

  const {editorBlocks} = data.page;
  const blocks = flatListToHierarchical(editorBlocks);
  
  const {title: siteTitle,description: siteDescription} = data?.generalSettings;
  const primaryMenu = data?.headerMenuItems?.nodes ?? [];
  const footerMenu = data?.footerMenuItems?.nodes ?? [];
  const footerMenu2 = data?.footerMenuItems2?.nodes ?? [];
  const footerMenu3 = data?.footerMenuItems3?.nodes ?? [];
  const footerMenu4 = data?.footerMenuItems4?.nodes ?? [];
  const logoUrl = data.themeGeneralSettings.themeSetting.header.logo?.node.mediaItemUrl
  const footerTexts = {
    'title' :     data.themeGeneralSettings.themeSetting.footer?.footerTitle,
    'paragraph':  data.themeGeneralSettings.themeSetting.footer?.footerParagraph
  }
  const socialMedia = {
   'facebook': data.themeGeneralSettings.themeSetting.socialMedia?.facebook,
   'instagram': data.themeGeneralSettings.themeSetting.socialMedia?.instagram,
   'linkedin': data.themeGeneralSettings.themeSetting.socialMedia?.linkedin,
   'twitter': data.themeGeneralSettings.themeSetting.socialMedia?.x

  }   

  return (
    <>
      <SEO title={siteTitle} description={siteDescription} logoUrl={logoUrl} />
      <Header
        title={siteTitle}
        description={siteDescription}
        menuItems={primaryMenu}
        logoUrl={logoUrl}
      />
      <Main>
        <Container>
          <RenderBlocks data={blocks} />
            {/*<WordPressBlocksViewer blocks={blocks} />*/}
            {/* <p>This page is utilizing the "front-page" WordPress template.</p>
            <code>wp-templates/front-page.js</code> */}
        </Container>
      </Main>
      <Footer footerTexts={footerTexts} socialMedia={socialMedia} footerMenu={footerMenu} footerMenu2={footerMenu2} footerMenu3={footerMenu3} footerMenu4={footerMenu4} />
    </>
  );
}

Component.variables = () => {
  return {
    headerLocation:  MENUS.PRIMARY_LOCATION,
    footerLocation:  MENUS.HOW_WE_HELP,
    footerLocation2: MENUS.WHO_WE_HELP,
    footerLocation3: MENUS.WHY_APPLY,
    footerLocation4: MENUS.RESOURCES,
  };
};

Component.query = gql`
  ${BlogInfoFragment}
  ${themeGeneralSettingsFragment}
  ${NavigationMenu.fragments.entry}
  ${AcfHeroHome?.fragments.entry}
  ${AcfArticles.fragments.entry}
  ${AcfCaseStudies.fragments.entry}
  ${AcfPartners.fragments.entry}
  ${AcfProvideSolutions.fragments.entry}
  ${AcfSlider.fragments.entry}
  ${AcfTestimonials.fragments.entry}
  ${AcfTextImageBlock.fragments.entry}
  query GetPageData(
    $headerLocation:  MenuLocationEnum
    $footerLocation:  MenuLocationEnum
    $footerLocation2: MenuLocationEnum
    $footerLocation3: MenuLocationEnum
    $footerLocation4: MenuLocationEnum
  ) {
    page(id: 10, idType: DATABASE_ID) {
      editorBlocks(flat: false) {
        __typename
        renderedHtml
        id: clientId
        parentClientId
        ...${AcfHeroHome.fragments.key}
        ...${AcfArticles.fragments.key}
        ...${AcfCaseStudies.fragments.key}
        ...${AcfPartners.fragments.key}
        ...${AcfProvideSolutions.fragments.key}
        ...${AcfSlider.fragments.key}
        ...${AcfTestimonials.fragments.key}
        ...${AcfTextImageBlock.fragments.key}
      }
    }
    themeGeneralSettings{
      ...themeGeneralSettingsFragment
    }
    generalSettings {
      ...BlogInfoFragment
    }
    headerMenuItems: menuItems(where: { location: $headerLocation }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
    footerMenuItems: menuItems(where: { location: $footerLocation }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
    footerMenuItems2: menuItems(where: { location: $footerLocation2 }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
    footerMenuItems3: menuItems(where: { location: $footerLocation3 }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
    footerMenuItems4: menuItems(where: { location: $footerLocation4 }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
  }
`;
