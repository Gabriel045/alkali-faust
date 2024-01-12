import {getSitemapProps} from '@faustwp/core';

export default function Sitemap() {}

export function getServerSideProps(ctx) {
    return getSitemapProps(ctx,{
        frontendUrl: 'https://alkali-faust.vercel.app',
        sitemapPathsToIgnore: ['/author-sitemap.xml'],
    });
}