import React from 'react';
import {gql} from '@apollo/client';

export default function AcfProvideSolutions(props) {
  // Load values and assign defaults.
  const background = props.provideSolutionsBlock?.background[0]
  const title = props.provideSolutionsBlock?.title
  const headline = props.provideSolutionsBlock?.headline
  const cards = props.provideSolutionsBlock?.cards
  const learnMoreLink = props.provideSolutionsBlock?.learnMoreLink


  return (
    <section className={`relative ${background == 'Light' ? 'bg-white' : 'bg-background '} `}>
      <img className="hidden lg:block absolute z-10 top-[100px] left-0" src={require('../assets/images/hexagon.svg')?.default?.src} alt="" />
      <div className="block_content">
        {title.length > 0 &&
          <div className="pb-[60px] lg:pb-[90px]">
            <h2 className="text-center text-[#fff] lg:w-[38%] m-auto" dangerouslySetInnerHTML={{__html: title ?? ''}} />
            <p className="paragraph sm:w-[60%] text-center text-[#929292] pt-[30px] lg:w-[55%] m-auto ">{headline} </p>
          </div>
        }   
        <div className="flex flex-row flex-wrap">
          { 
            cards.map((card,index)=>{
              return <div key={index} className={`w-full lg:w-1/3 px-[30px] py-[51px]  border-l ${background == 'Light' ? 'border-[#80808061]' : 'border-[#404040]'}  card-line relative`} >
                <div>
                  <img src={card?.icon.nodes[0].sourceUrl} alt="" />
                </div>
                <p className= {`${background == 'Light' ? 'text-background' : 'text-[#FFF] '}  font-[600] text-[16px] pt-[20px]`} > {card.title} </p>
                <p className="text-[16px] font-[400] text-[#929292] py-[15px]"> {card.paragraph} </p>
                <a href={card.link} className="text-[#0AADE5] text-[16px] cursor-pointer flex hover-arrow"> Learn More <img className="mb-[-2px]" src={require('../assets/images/arrow-right-blue.svg')?.default?.src} alt="" /></a>
              </div>
            })
          }
        </div>    
      </div>
      <img className="hidden lg:block absolute z-10 bottom-[-60px] right-0" src={require('../assets/images/hexagon-3.svg')?.default?.src} alt="" />
    </section>

  );
}

AcfProvideSolutions.fragments = {
  key: `AcfProvideSolutionsBlockFragment`,
  entry: gql`
    fragment AcfProvideSolutionsBlockFragment on AcfProvideSolutions {
      provideSolutionsBlock {
        background
        title
        headline
        learnMoreLink
        cards{
          link
          paragraph
          title
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