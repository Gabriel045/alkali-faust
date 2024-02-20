import React from 'react';
import {useQuery,gql} from '@apollo/client';
import {} from '../components';
import loadable from '@loadable/component'

const ArticleSlider = loadable(() => import('../components/ArticleSlider/ArticleSlider'))

export default function AcfArticles(props) {
  const title = props.data.articlesBlock?.title 
  const {data} = useQuery(GET_POST);
  
    return (
      <section className="articles-section relative">
        <img loading="lazy"  className="hidden lg:block absolute z-10 top-[40%] left-[-80px] rotate-180" src={require('../assets/images/hexagon-2.svg')?.default?.src}  alt="" />
        <ArticleSlider title={title} cards={data}/>
      </section>
  );
}

AcfArticles.fragments = {
  key: `AcfArticlesBlockFragment`,
  entry: gql`
    fragment AcfArticlesBlockFragment on AcfArticles {
      articlesBlock {
        title
      }
    }
  `,
};

//Query to get POSTS
const GET_POST = gql`
query post {
  posts(first: 6) {
    edges {
      node {
        excerpt
        link
        featuredImage {
          node {
            sourceUrl
          }
        }
      title
      }
    }
  }
}
`