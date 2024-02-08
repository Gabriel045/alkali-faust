import {gql} from '@apollo/client';
import * as MENUS from '../constants/menus';
import {BlogInfoFragment,themeGeneralSettingsFragment} from '../fragments/GeneralSettings';
import {
  Header,
  Footer,
  Main,
  Container,
  NavigationMenu,
  Post,
  FeaturedImage,
  SEO,
} from '../components';

import AcfBlog from '../wp-blocks/AcfBlog';
import AcfHero from '../wp-blocks/AcfHero';


export default function Component(props) {

  const {title: siteTitle,description: siteDescription} =
    props?.data?.generalSettings;
  //const primaryMenu = props?.data?.headerMenuItems?.nodes ?? [];
  //const footerMenu = props?.data?.footerMenuItems?.nodes ?? [];

  const primaryMenu = props?.data.headerMenuItems?.nodes ?? [];
  const footerMenu = props?.data.footerMenuItems?.nodes ?? [];
  const footerMenu2 = props?.data.footerMenuItems2?.nodes ?? [];
  const footerMenu3 = props?.data.footerMenuItems3?.nodes ?? [];
  const footerMenu4 = props?.data.footerMenuItems4?.nodes ?? [];
  const logoUrl = props?.data.themeGeneralSettings?.themeSetting.header.logo?.node.mediaItemUrl
  const footerTexts = {
    'title': props?.data.themeGeneralSettings?.themeSetting.footer?.footerTitle,
    'paragraph': props?.data.themeGeneralSettings?.themeSetting.footer?.footerParagraph
  }
  const socialMedia = {
    'facebook': props?.data.themeGeneralSettings?.themeSetting.socialMedia?.facebook,
    'instagram': props?.data.themeGeneralSettings?.themeSetting.socialMedia?.instagram,
    'linkedin': props?.data.themeGeneralSettings?.themeSetting.socialMedia?.linkedin,
    'twitter': props?.data.themeGeneralSettings?.themeSetting.socialMedia?.x

  }

  const posts = props?.data.nodeByUri?.posts.nodes
  const data = {
    heroBlock: {
      title: props?.data.nodeByUri.name
    }
  }


  console.log(data);


  return (
    <>
      <SEO title={siteTitle} description={siteDescription} />
      <Header
        title={siteTitle}
        description={siteDescription}
        menuItems={primaryMenu}
        logoUrl={logoUrl}
      />
      <Main>
        <>
          <AcfHero data={data} />
          <AcfBlog blog={posts} />
        </>
      </Main>
      <Footer footerTexts={footerTexts} socialMedia={socialMedia} footerMenu={footerMenu} footerMenu2={footerMenu2} footerMenu3={footerMenu3} footerMenu4={footerMenu4} />
    </>
  );
}

Component.query = gql`
  ${BlogInfoFragment}
  ${themeGeneralSettingsFragment}
  ${NavigationMenu.fragments.entry}
  query GetCategoryPage(
    $uri: String!
    $headerLocation:  MenuLocationEnum
    $footerLocation:  MenuLocationEnum
    $footerLocation2: MenuLocationEnum
    $footerLocation3: MenuLocationEnum
    $footerLocation4: MenuLocationEnum
  ) {
    nodeByUri(uri: $uri) {
      ... on Category {
        name
        posts {
          nodes {
            title
            featuredImage {
              node {
                sourceUrl
              }
            }
            date
            link
          }
        }
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


Component.variables = ({uri}) => {
  uri = uri.split(/(?=blog)/)[1]
  return {
    uri,
    headerLocation: MENUS.PRIMARY_LOCATION,
    footerLocation: MENUS.HOW_WE_HELP,
    footerLocation2: MENUS.WHO_WE_HELP,
    footerLocation3: MENUS.WHY_APPLY,
    footerLocation4: MENUS.RESOURCES,
  };
};
