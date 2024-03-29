import '../faust.config';
import React, { Suspense } from 'react';
import { useRouter } from 'next/router';
import { FaustProvider } from '@faustwp/core';
//import '@faustwp/core/dist/css/toolbar.css';
import '../styles/global.scss';



//import { WordPressBlocksProvider } from '@faustwp/blocks';
//import blocks from '../wp-blocks';


export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Suspense fallback={<p>Loading feed...</p>}>
        
        <FaustProvider pageProps={pageProps}>

          {/*<WordPressBlocksProvider
            config={{
              blocks,
            }}>
          </WordPressBlocksProvider>*/}
            <Component {...pageProps} key={router.asPath} />
        </FaustProvider>
    </Suspense>
  );
}
