
import React,{lazy} from "react";
import {useQuery,gql} from '@apollo/client';
import * as MENUS from '../constants/menus';
import {BlogInfoFragment, themeGeneralSettingsFragment} from '../fragments/GeneralSettings';
import {
  Header,
  Footer,
  Main,
  Container,
  NavigationMenu,
  Hero,
  SEO,
} from '../components';


import {flatListToHierarchical} from '@faustwp/core';
import {WordPressBlocksViewer} from '@faustwp/blocks';
import components from '../wp-blocks';
import dynamic from 'next/dynamic'

const AcfHeroHome = dynamic({
  loader: () => import('../wp-blocks/AcfHeroHome')
})
const AcfSlider = dynamic({
  loader: () => import('../wp-blocks/AcfSlider')
})
const AcfProvideSolutions = dynamic({
  loader: () => import('../wp-blocks/AcfProvideSolutions')
})
const AcfTextImageBlock = dynamic({
  loader: () => import('../wp-blocks/AcfTextImageBlock')
})
const AcfPartners = dynamic({
  loader: () => import('../wp-blocks/AcfPartners')
})
const AcfCaseStudies = dynamic({
  loader: () => import('../wp-blocks/AcfCaseStudies')
})
const AcfArticles = dynamic({
  loader: () => import('../wp-blocks/AcfArticles')
})
const AcfTestimonials = dynamic({
  loader: () => import('../wp-blocks/AcfTestimonials')
})

//import AcfHeroHome from '../wp-blocks/AcfHeroHome';
//import AcfSlider from '../wp-blocks/AcfSlider';
//import AcfProvideSolutions from '../wp-blocks/AcfProvideSolutions';
//import AcfTextImageBlock from '../wp-blocks/AcfTextImageBlock';
//import AcfPartners from '../wp-blocks/AcfPartners';
//import AcfCaseStudies from '../wp-blocks/AcfCaseStudies';
//import AcfArticles from '../wp-blocks/AcfArticles';
//import AcfTestimonials from '../wp-blocks/AcfTestimonials';

export default function Component(props) {
  const {data} = useQuery(Component.query,{
    variables: Component.variables()

  });

  const {editorBlocks} = data.page;
  const blocks = flatListToHierarchical(editorBlocks);
  
//console.log(blocks);

  const {title: siteTitle,description: siteDescription} =
  data?.generalSettings;
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

  //let HeroHome = []
  //let Slider = []
  //let Provide = []
  //blocks.map((block)=>{
  //  //console.log("block",block.__typename);
  //  if(block.__typename === "AcfHeroHome"){
  //     HeroHome = block
  //  } else if(block.__typename === "AcfSlider"){
  //    Slider = block
  //  } else if(block.__typename === "AcfProvideSolutions") {
  //    Provide = block
  //  }
  //})
  
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
          {
            blocks.map((block) => {
              if(block.__typename === "AcfHeroHome") {
                console.log(block.__typename);
                 return <AcfHeroHome data={block}/>
              } else if(block.__typename === "AcfSlider") {
                return <AcfSlider data={block} />
              } else if(block.__typename === "AcfProvideSolutions"){
                return <AcfProvideSolutions data={block} />
              } else if(block.__typename === "AcfTextImageBlock"){
                return <AcfTextImageBlock data={block} />
              } else if(block.__typename === "AcfPartners") {
                return <AcfPartners data={block} />
              } else if(block.__typename === "AcfCaseStudies") {
                return <AcfCaseStudies data={block} />
              } else if(block.__typename === "AcfArticles") {
                return <AcfArticles data={block} />
              } else if(block.__typename === "AcfTestimonials") {
                return <AcfTestimonials data={block} />
              }              
            })
          }
          {/*<Hero title={'Front Page'} />*/}
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
  ${components?.AcfAlkali.fragments.entry}
  ${components?.AcfArticles.fragments.entry}
  ${components?.AcfCaseStudies.fragments.entry}
  ${components?.AcfHeroHome.fragments.entry}
  ${components?.AcfPartners.fragments.entry}
  ${components?.AcfProvideSolutions.fragments.entry}
  ${components?.AcfSlider.fragments.entry}
  ${components?.AcfTestimonials.fragments.entry}
  ${components?.AcfTextImageBlock.fragments.entry}
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
        ...${components.AcfAlkali.fragments.key}
        ...${components.AcfArticles.fragments.key}
        ...${components.AcfCaseStudies.fragments.key}
        ...${components.AcfHeroHome.fragments.key}
        ...${components.AcfPartners.fragments.key}
        ...${components.AcfProvideSolutions.fragments.key}
        ...${components.AcfSlider.fragments.key}
        ...${components.AcfTestimonials.fragments.key}
        ...${components.AcfTextImageBlock.fragments.key}
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
