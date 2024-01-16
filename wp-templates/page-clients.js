import {useQuery,gql} from '@apollo/client';
import * as MENUS from '../constants/menus';
import {WordPressBlocksViewer} from '@faustwp/blocks';
import {flatListToHierarchical} from '@faustwp/core';
import {BlogInfoFragment,themeGeneralSettingsFragment} from '../fragments/GeneralSettings';
import components from '../wp-blocks';

import {
    Header,
    Footer,
    Main,
    Container,
    ContentWrapper,
    EntryHeader,
    NavigationMenu,
    FeaturedImage,
    RenderBlocks,
    SEO,
} from '../components';

export default function Component(props) {
    // Loading state for previews
    if(props.loading) {
        return <>Loading...</>;
    }

    const {title: siteTitle,description: siteDescription} =
        props?.data?.generalSettings;
    const primaryMenu = props?.data?.headerMenuItems?.nodes ?? [];
    const footerMenu = props.data?.footerMenuItems?.nodes ?? [];
    const footerMenu2 = props.data?.footerMenuItems2?.nodes ?? [];
    const footerMenu3 = props.data?.footerMenuItems3?.nodes ?? [];
    const footerMenu4 = props.data?.footerMenuItems4?.nodes ?? []; const {title,content,featuredImage} = props?.data?.page ?? {title: ''};
    const logoUrl = props.data.themeGeneralSettings.themeSetting.header.logo?.node.mediaItemUrl
    const footerTexts = {
        'title': props.data.themeGeneralSettings.themeSetting.footer?.footerTitle ?? '',
        'paragraph': props.data.themeGeneralSettings.themeSetting.footer?.footerParagraph ?? '',
    }
    const socialMedia = {
        'facebook': props.data.themeGeneralSettings.themeSetting.socialMedia?.facebook ?? '',
        'instagram': props.data.themeGeneralSettings.themeSetting.socialMedia?.instagram ?? '',
        'linkedin': props.data.themeGeneralSettings.themeSetting.socialMedia?.linkedin ?? '',
        'twitter': props.data.themeGeneralSettings.themeSetting.socialMedia?.x ?? ''

    }

    const {editorBlocks} = props.data.page;
    const blocks = editorBlocks;

    return (
        <>
            <SEO
                title={siteTitle}
                description={siteDescription}
                imageUrl={featuredImage?.node?.sourceUrl}
            />
            <Header
                title={siteTitle}
                description={siteDescription}
                menuItems={primaryMenu}
                logoUrl={logoUrl}
            />
            <Main>
                <>
                    {/*<EntryHeader title={title} image={featuredImage?.node} />*/}
                    <Container>
                        <RenderBlocks data={blocks} />
                        {/*<WordPressBlocksViewer blocks={blocks} />*/}
                    </Container>
                </>
            </Main>
            <Footer footerTexts={footerTexts} socialMedia={socialMedia} footerMenu={footerMenu} footerMenu2={footerMenu2} footerMenu3={footerMenu3} footerMenu4={footerMenu4} />
        </>
    );
}

Component.variables = ({databaseId},ctx) => {
    return {
        databaseId,
        headerLocation: MENUS.PRIMARY_LOCATION,
        footerLocation: MENUS.HOW_WE_HELP,
        footerLocation2: MENUS.WHO_WE_HELP,
        footerLocation3: MENUS.WHY_APPLY,
        footerLocation4: MENUS.RESOURCES,
        asPreview: ctx?.asPreview,
    };
};

Component.query = gql`
  ${BlogInfoFragment}
  ${NavigationMenu.fragments.entry}
  ${themeGeneralSettingsFragment}
  ${FeaturedImage.fragments.entry}
  ${components?.AcfHero.fragments.entry}

  query GetPageData(
    $databaseId: ID!
    $headerLocation:  MenuLocationEnum
    $footerLocation:  MenuLocationEnum
    $footerLocation2: MenuLocationEnum
    $footerLocation3: MenuLocationEnum
    $footerLocation4: MenuLocationEnum
    $asPreview: Boolean = false
  ) {
    page(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      title
      content
      ...FeaturedImageFragment
      editorBlocks(flat: false) {
        ...${components.AcfHero.fragments.key}
      }
    }

    themeGeneralSettings{
      ...themeGeneralSettingsFragment
    }
    generalSettings {
      ...BlogInfoFragment
    }
    footerMenuItems: menuItems(where: { location: $footerLocation }) {
      nodes {
        ...NavigationMenuItemFragment
      }
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
