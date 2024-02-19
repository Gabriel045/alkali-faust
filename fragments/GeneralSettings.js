import {gql} from '@apollo/client';

export const BlogInfoFragment = gql`
  fragment BlogInfoFragment on GeneralSettings {
    title
    description
  }
`;

export const themeGeneralSettingsFragment = gql`
  fragment  themeGeneralSettingsFragment on ThemeGeneralSettings {
    themeSetting {
      header {
        logo {
          node {
            mediaItemUrl
          }
        }
       ctaUrlHeader
      }
      footer {
        footerParagraph
        footerTitle
      }
      socialMedia {
        facebook
        instagram
        linkedin
        x
      }
    }
  }
`;

