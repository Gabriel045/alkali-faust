import React from 'react';
import {gql} from '@apollo/client';
import Link from "next/link";
import Image from "next/future/image";



export default function AcfHero({data}) {
    // Load values and assign defaults.
    const title = data.heroBlock?.title
    const paragraph = data.heroBlock?.paragraph
    const cta = data.heroBlock?.ctaUrl
    console.log(cta);
    return (
        <section className="prueba  relative bg-background ">
            <div className="block_content flex flex-wrap w-full hero">
                <div className="w-full lg:w-[60%]  relative z-[1] ">
                    <div className="text-white text-[36px] lg:text-[52px] font-[600] my-[30px] leading-[60px]" dangerouslySetInnerHTML={{__html: title ?? ''}} /> 
                    <p className="subtext text-[#ffffffad] lg:w-[80%] my-[36px]"> {paragraph} </p>
                    {
                        cta.url && 
                        <Link href={cta.url}>       
                            <a className="button_custom inline-block z-1">{cta.title}</a>
                        </Link>
                    }
                </div>
            </div>
            <Image
                src={require('../assets/images/hexagons.svg')}
                width={500}
                height={600}
                sizes="100vw"
                layout="responsive"
                style={{width: '100%',height: '100%'}} // optional
                className={'hidden lg:block absolute right-0 bottom-0'}
                alt="Picture of the author" />
            <Image
                src={require('../assets/images/hexagon-5.svg')}
                width={0}
                height={250}
                sizes="100vw"
                layout="responsive"
                style={{width: '100%',height: '100%'}} // optional
                className={'block lg:hidden absolute z-[1] right-0 bottom-[40px]'}
                alt="Picture of the author" />
        </section>
    )
}



AcfHero.fragments = {
    key: `AcfHeroBlockFragment`,
    entry: gql`
    fragment AcfHeroBlockFragment on AcfHero {
      heroBlock {
        ctaUrl {
            url
            title
            target
        }
        paragraph
        siteTitle
        title
       } 
    }
  `,
};