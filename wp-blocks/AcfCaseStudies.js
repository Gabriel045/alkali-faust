import React from 'react';
import {gql} from '@apollo/client';
import Link from 'next/link';


export default function AcfCaseStudies({data}) {
  // Load values and assign defaults.
  const title = data.caseStudiesBlock?.title
  const cards = data.caseStudiesBlock?.cards
  const browseCaseStudies = data.caseStudiesBlock?.browseCaseStudies


  return (
    <section className="bg-background">
      <div className="block_content relative">
        <img loading="lazy"  className="absolute z-10 top-[15%] left-[-5%] rotate-180" src={require('../assets/images/hexagon-5.svg')?.default?.src} alt="" />
        <div className="pb-[60px] lg:pb-[120px]">
          <h2 className="text-center text-[#fff] lg:w-[60%] m-auto" dangerouslySetInnerHTML={{__html: title ?? ''}} /> 
        </div>
        <div className="flex flex-row flex-wrap">
          {
            cards.map((card,index) => { 
              return <div key={index} className="lg:w-[48%] px-[44px] py-[46px] rounded-[10px] mb-[35px] lg:mb-0 lg:first:mr-[4%] border-custom z-50">
                <div className="relative z-50 flex justify-start pb-[23px] h-[100px]">
                  <img loading="lazy" className="max-w-[150px]" src={card.logo?.nodes[0]?.sourceUrl} alt="" />
                </div>
                <p className="text-[#FFF] font-[600] text-[24px] relative"> {card?.title} </p>
                <p className="text-[18px] font-[400] text-[#929292] pt-[23px] pb-[37px] relative"> {card?.paragraph} </p>
                <Link href={card?.link ? card?.link : ''}>
                  <a target="_blank" className="text-[#0AADE5] text-[16px] flex relative hover-arrow" > 
                    Learn More 
                    <img loading="lazy"  className="mb-[-2px] " src={require('../assets/images/arrow-right-blue.svg')?.default?.src} alt="" />
                  </a>  
                </Link> :
              </div>

            })
          }
        </div>
        <div className="mt-[60px] lg:mt-[140px] flex justify-center gap-[30px] lg:gap-[20px] flex-wrap lg:flex-nowrap">
          <Link href={browseCaseStudies ? browseCaseStudies  : ''}>
            <a className='text-white w-auto py-[15px] px-[35px] bg-[#333232] rounded-[10px] transform hover:translate-y-[2px] border-button'> Browse Case Studies  </a>
          </Link>
        </div>
      </div>
    </section>
  );
}

AcfCaseStudies.fragments = {
  key: `AcfCaseStudiesBlockFragment`,                  
  entry: gql`
    fragment AcfCaseStudiesBlockFragment on AcfCaseStudies {
      caseStudiesBlock {
        title
        browseCaseStudies
        cards {
          paragraph
          title
          link 
          logo {
            nodes {
              sourceUrl
            }
          }
        }
      }
    }
  `,
};