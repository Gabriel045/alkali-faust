import React from 'react';
import {gql} from '@apollo/client';

export default function AcfHeroHome(props) {
  // Load values and assign defaults.
  const title = props.heroHomeBlock?.title
  const paragraph = props.heroHomeBlock?.paragraph
  const icons = props.heroHomeBlock?.clientsIcon?.nodes
  console.log('all icons',icons);



  return (
    <section className="relative bg-background">
      <div className="flex justify-center flex-wrap w-full">
        <div className="home-hero flex flex-col w-full max-w-[1440px] items-center relative z-[1]">
          <h1 className="text-white text-center md:w-[80%]" dangerouslySetInnerHTML={{__html: title ?? ''}} />
          <p className="subtext text-[#ffffffad] text-center md:w-[70%] my-[36px]"> {paragraph}  </p>
          <a href="" className="button_custom inline-block z-1" target="_blank">Learn More</a>
          <div className="flex w-[100%] pt-[100px] lg:pt-[120px] lg:flex-nowrap  flex-wrap lg:pr-[96px] z-[1]">
            <span
              className="text-[18px] font-[600] text-white w-full lg:w-1/3 lg:text-start text-center mb-[46px] lg:mb-0 lg:flex lg:items-center relative z-50">
              Trusted by Great Clients
            </span>
            <div className="flex  justify-end flex-row gap-[20px] lg:gap-[10%] gap-y-[60px] w-full lg:w-2/3 flex-nowrap ">

              {
                icons.map((icon, index) => {
                  return <div key={index} className="w-1/4 flex justify-center z-[1]"> <img src={icon.sourceUrl} /> </div>
                })
              }
            </div>
          </div>
        </div>
      </div>
      <img decoding="async" className="hidden lg:block absolute right-0 bottom-0 h-[600px]" src={require('../assets/images/hexagons.svg')?.default?.src} alt="" />
      <img decoding="async" className="absolute  bottom-[-90px] left-0 z-[0]" src={require('../assets/images/hexagon.svg')?.default?.src} alt="" />
    </section>
  );
}

AcfHeroHome.fragments = {
  key: `AcfHeroHomeBlockFragment`,
  entry: gql`
    fragment AcfHeroHomeBlockFragment on AcfHeroHome {
      heroHomeBlock {
        title
        backgroundImage {
          node {
            link
          }
        }
        paragraph
        clientsIcon {
            nodes {
              sourceUrl
            }
        }
        ctaUrl
      }    
    }
  `,
};