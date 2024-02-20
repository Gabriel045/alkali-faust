import React from 'react';
import {gql} from '@apollo/client';
import Image from "next/future/image";
import Link from "next/link";

export default function AcfTextImageBlock({data}) {
  
  // Load values and assign defaults.
  const background = data.textImageBlock?.background
  const image_position = data.textImageBlock?.imagePosition ? data.textImageBlock?.imagePosition[0] : ""
  const image = data.textImageBlock?.image?.node?.sourceUrl ? data.textImageBlock?.image?.node?.sourceUrl  : ""
  const title = data.textImageBlock?.title
  const paragraph = data.textImageBlock?.paragraph
  const learnMoreUrl = data.textImageBlock?.learnMoreUrl
  const customID = data.textImageBlock?.customId  ?? ""

  return (
    <section id={customID} className={`text-block ${background}`}>
      <div className={`block_content flex flex-wrap lg:flex-nowrap gap-[80px] flex-${image_position}`} >
        <div className= {`flex flex-wrap lg:flex-nowrap gap-[80px] w-full flex-${image_position} `}>
          {image.length > 0 &&
            <div className="w-full lg:w-[45%]">
              <Image
                src={image}
                width={0}
                height={0}
                sizes="100vw"
                layout="responsive"
                style={{width: '100%',height: '100%', objectFit: "cover",borderRadius: '5px', }} // optional
                alt="Picture of the author"
              />
              {/*<img loading="lazy"  className="lg:h-full object-cover object-center m-auto rounded-[5px] lg:m-0" src={image} alt="" />*/}
            </div>
          }
          <div className={`${image.length > 0 ? 'w-full lg:w-[50%]' : 'full'} lg:flex lg:flex-col lg:justify-center relative`}>
            <h3 className="z-50 relative"> {title} </h3>
            <div className={`paragraph text-[#929292] z-50 relative ${title ? "py-[32px]" : ""}`} dangerouslySetInnerHTML={{__html: paragraph ?? ''}} /> 
            {learnMoreUrl?.url &&
              <Link href={learnMoreUrl} >
                <a target={learnMoreUrl?.target} className={`button_custom inline-block ${background == "light" ? 'no-border' : ''}`}>{learnMoreUrl?.title}</a>            
              </Link>
            }
            { background == "light" ? 
              <div className='absolute hidden lg:block z-[1] w-[368px] h-[416px] bottom-0 right-0'>
              <Image
               src={require('../assets/images/hexagon-4.svg')}
               width={368}
               height={416}
               sizes="100vw"
               layout="responsive"
                style={{width: '100%',height: '100%',objectFit: "cover"}} // optional
               alt="Picture of the author"/>
            </div>
              //<img loading="lazy"  className={`hidden lg:block absolute z-10 ${image_position == " row" ? 'right-0 bottom-0 ' : 'right-[60px] bottom-[20px]' } `}  src={require('../assets/images/hexagon-4.svg')?.default?.src} alt="" />
            :
              <img loading="lazy"  className={`hidden lg:block absolute z-10 ${image_position == " row" ? 'right-0 bottom-0 ' : 'right-[60px] bottom-[20px]'} `}  src={require('../assets/images/hexagon-5.svg')?.default?.src}  alt="" />
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
        learnMoreUrl{
          url
          target
          title
        }
        imagePosition
        customId
        image {
          node {
            sourceUrl
          }
        }
      }
    }
  `,
};