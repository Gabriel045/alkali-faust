import React from 'react';
import {gql} from '@apollo/client';
import {useRef,useState,useEffect} from 'react';
import Image from "next/future/image";
import Link from "next/link";

export default function AcfProvideSolutions({data}) {
  // Load values and assign defaults.

  const [cards,setcards] = useState([])
  useEffect(() => {
    setcards(data.provideSolutionsBlock?.cards)
  },[]);

  const [title,setTitle] = useState("")

  useEffect(() => {
    if(data.provideSolutionsBlock?.title) {
      setTitle(data.provideSolutionsBlock?.title)
    } else {
      setTitle("")
    }
  },[title]);


  const background = data.provideSolutionsBlock?.background[0]
  const headline = data.provideSolutionsBlock?.headline
  const learnMoreLink = data.provideSolutionsBlock?.learnMoreLink

  return (
    <section className={`relative ${background == 'Light' ? 'bg-white' : 'bg-background '} `}>
      <img loading="lazy" className="hidden lg:block absolute z-10 top-[100px] left-0" src={require('../assets/images/hexagon.svg')?.default?.src} alt="" />
      <div className="block_content">
        {title.length > 0 &&
          <div className="pb-[60px] lg:pb-[90px]">
            <h2 className="text-center text-[#fff] lg:w-[38%] m-auto" dangerouslySetInnerHTML={{__html: title ?? ''}} />
            <p className="paragraph sm:w-[60%] text-center text-[#929292] pt-[30px] lg:w-[55%] m-auto ">{headline} </p>
          </div>
        }
        <div className="flex flex-row flex-wrap">
          {
            cards.map((card,index) => {
              return <div key={index} className={`w-full lg:w-1/3 px-[30px] py-[51px]  border-l ${background == 'Light' ? 'border-[#80808061]' : 'border-[#404040]'}  card-line relative`} >
                <div>
                  <Image
                    src={card?.icon.nodes[0].sourceUrl}
                    width={64}
                    height={65}
                    style={{}} // optional
                    alt="Picture of the author"
                  />
                </div>
                <p className={`${background == 'Light' ? 'text-background' : 'text-[#FFF] '}  font-[600] text-[16px] pt-[20px]`} > {card.title} </p>
                <p className="text-[16px] font-[400] text-[#929292] py-[15px]"> {card.paragraph} </p>
                <Link href={card?.link?.url ?? "#"}>
                  <a target={card?.link?.target} className="text-[#0AADE5] text-[16px] cursor-pointer flex hover-arrow"> 
                    {card?.link?.title}
                    <Image
                      src={require('../assets/images/arrow-right-blue.svg')}
                      width={21}
                      height={25}
                      style={{}} // optional
                      alt="Picture of the author"
                    />
                  </a>
                </ Link>
              </div>
            })
          }
        </div>
        <div className="flex justify-center">
          {
            learnMoreLink?.url &&
            <Link href={learnMoreLink?.url ?? "#"}>
              <a className="button_custom inline-block z-1 mt-[50px] lg:mt-[80px]" target={learnMoreLink?.target}>{learnMoreLink?.title}</a>
            </ Link>
          }
        </div>
      </div>
      <img loading="lazy" className="hidden lg:block absolute z-10 bottom-[-60px] right-0" src={require('../assets/images/hexagon-3.svg')?.default?.src} alt="" />
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
        learnMoreLink{
          url
          title
          target
        }
        cards{
          link{
            url
            title
            target
          }
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