import React from 'react';
import {gql} from '@apollo/client';
import Link from 'next/link';
import {PartnerResponsive} from '../components';


export default function AcfPartners({data}) {

  // Load values and assign defaults.
  const title = data.partnersBlock?.title
  const headline = data.partnersBlock?.headline
  const columns = data.partnersBlock?.columns[0]
  const cards = data.partnersBlock?.cards

  //console.log('all props',props);
  return (
    <section className="relative">
      <img className="hidden lg:block absolute z-10 top-[40%] left-0 rotate-180" src={require('../assets/images/hexagon-2.svg')?.default?.src} alt="" />
      <div className="block_content">
        <div className="pb-[40px] lg:pb-[80px]">
          <h2 className="text-center text-[#232323] m-auto" dangerouslySetInnerHTML={{__html: title ?? ''}} />
          <p className="text-[16px] lg:tex-[18px]  text-center text-[#525252] pt-[30px] sm:w-[60%] lg:w-[55%] m-auto " dangerouslySetInnerHTML={{__html: headline ?? ''}} />
        </div>

        <div className="hidden lg:flex flex-row flex-wrap">
          {
            cards.map((card,index) => {
             
               return <div key={index} className={` ${columns == "four" ? 'lg:w-1/4 lg:px-[60px]' : 'lg:w-1/3 lg:px-[120px]'} w-1/2  pt-[70px] relative z-50  flex items-center cursor-pointer`} >
                {card.url != null ?
                  <Link href={card.url}>
                     <a target="_blank"><img loading="lazy"  className="w-full icon_filter" src={card.icon?.nodes[0]?.sourceUrl} alt="" /></a>
                  </Link> :
                   <img loading="lazy"  className="w-full icon_filter" src={card.icon?.nodes[0]?.sourceUrl} alt="" />
                }
              </div>
            })
          }
        </div>
        <PartnerResponsive cards={cards} />


      </div>
      <img loading="lazy"  className="hidden lg:block absolute z-10 top-[10%] right-0" src={require('../assets/images/hexagon-2.svg')?.default?.src} alt="" />
    </section>

  );
}

AcfPartners.fragments = {
  key: `AcfPartnersBlockFragment`,
  entry: gql`
    fragment AcfPartnersBlockFragment on AcfPartners {
    partnersBlock {
        columns
        headline
        title
        cards {
          url
          icon {
            nodes {
              sourceUrl
            }
          }
        }
      }
    }
  `,
};