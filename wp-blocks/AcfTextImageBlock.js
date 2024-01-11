import React from 'react';
import {gql} from '@apollo/client';

export default function AcfTextImageBlock({data}) {
  
  // Load values and assign defaults.
  const background = data.textImageBlock?.background
  const image_position = data.textImageBlock?.imagePosition[0]
  const image = data.textImageBlock?.image?.node?.sourceUrl
  const title = data.textImageBlock?.title
  const paragraph = data.textImageBlock?.paragraph
  const learnMoreCta = data.textImageBlock?.learnMoreCta[0]
  const learnMoreUrl = data.textImageBlock?.learnMoreUrl

  return (
    <section className={`text-block ${background}`}>
      <div className={`block_content flex flex-wrap lg:flex-nowrap gap-[80px] flex-${image_position}`} >
        <div className= {`flex flex-wrap lg:flex-nowrap gap-[80px] flex-${image_position} `}>
          {image.length > 0 &&
            <div className="w-full lg:w-[45%]">
              <img className="lg:h-full object-cover object-center m-auto rounded-[5px] lg:m-0" src={image} alt="" />
            </div>
          }
          <div className={`${image.length > 0 ? 'w-full lg:w-[50%]' : 'full'} relative lg:flex lg:flex-col lg:justify-center`}>
            <h3 className="z-50 relative"> {title} </h3>
            <p className="paragraph text-[#929292] py-[32px] z-50 relative" dangerouslySetInnerHTML={{__html: paragraph ?? ''}} /> 
            {learnMoreCta == "Yes" &&
              <a href={learnMoreUrl} className="button_custom inline-block">Learn More</a>
            }
            { background == "light" ? 
              <img className={`hidden lg:block absolute z-10 ${image_position == " row" ? 'right-0 bottom-0 ' : 'right-[60px] bottom-[20px]' } `}  src={require('../assets/images/hexagon-4.svg')?.default?.src} alt="" />
            :
              <img className={`hidden lg:block absolute z-10 ${image_position == " row" ? 'right-0 bottom-0 ' : 'right-[60px] bottom-[20px]'} `}  src={require('../assets/images/hexagon-5.svg')?.default?.src}  alt="" />
            }
          </div>
        </div>
      </div>
    </section>
  );
}

AcfTextImageBlock.fragments = {
  key: `AcfTextImageBlockBlockFragment`,
  entry: gql`
    fragment AcfTextImageBlockBlockFragment on AcfTextImageBlock {
      textImageBlock {
        background
        title
        paragraph
        learnMoreUrl
        learnMoreCta
        imagePosition
        image {
          node {
            sourceUrl
          }
        }
      }
    }
  `,
};