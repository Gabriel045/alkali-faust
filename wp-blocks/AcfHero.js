import React from 'react';
import {gql} from '@apollo/client';

export default function AcfHero({data}) {
    // Load values and assign defaults.
    const title = data.heroBlock?.title
    const paragraph = data.heroBlock?.paragraph
    return (
        <section className="prueba  relative bg-background ">
            <div className="block_content flex flex-wrap w-full hero">
                <div className="w-full lg:w-[60%]  relative z-[1] ">
                    <div className="text-white text-[36px] lg:text-[52px] font-[600] my-[30px] leading-[60px]" dangerouslySetInnerHTML={{__html: title ?? ''}} /> 
                    <p className="subtext text-[#ffffffad] lg:w-[80%] my-[36px]"> {paragraph} </p>
                </div>
            </div>
            <img loading="lazy"  decoding="async"  className="hidden lg:block absolute right-0 bottom-0 h-[600px]" src={require('../assets/images/hexagons.svg')?.default?.src} alt="" />
            <img loading="lazy" decoding="async"  className="block lg:hidden absolute z-[1] right-0 bottom-[40px] h-[250px]" src={require('../assets/images/hexagon-5.svg')?.default?.src} alt="" />
        </section>
    )
}



AcfHero.fragments = {
    key: `AcfHeroBlockFragment`,
    entry: gql`
    fragment AcfHeroBlockFragment on AcfHero {
      heroBlock {
        cta
        ctaUrl
        paragraph
        siteTitle
        title
       } 
    }
  `,
};