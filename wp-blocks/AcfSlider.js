import React from "react";
import {useRef,useState,useEffect} from 'react';
import {gql} from '@apollo/client';
import Image from "next/future/image";
import loadable from '@loadable/component'

const SliderResponsive = loadable(() => import('../components/SliderResponsive/SliderResponsive'))

export default function AcfSlider({data}) {

  const background = data.sliderBlock?.background
  const title = data.sliderBlock?.title
  const headline = data.sliderBlock?.headline
  const sliderItems = data.sliderBlock?.sliderItems

  const steps = ["01. Discovery","02. Design","03. Development","04. Supporty"];


  //creating the ref
  const refs = useRef(steps.map(() => React.createRef()));

  useEffect(() => {
    refs.current[0].current.focus();
  },[]);

  //simulate a click on a page load to active the frist card
  useEffect(() => {
    refs.current[0].current.click();
  },[]);

  //function to add the class enable when click them
  const slide = (step) => {
    refs.current.map((div) => {
      const id = div.current.id;
      if(id == step) {
        div.current.className.includes('enable') ? '' : div.current.className += ' enable'
      } else {
        const string = div.current.className.replace('enable','')
        div.current.className = string
      }
    })
  }

  return (
    <section id="slider" className={`relative overflow-hidden ${background}`}>
      <div className="block_content">
        <div className="pb-[60px] lg:pb-[120px]">
          <h2 className="text-center text-[#232323]" dangerouslySetInnerHTML={{__html: title ?? ''}} />
          <p className="paragraph text-center text-[#525252] pt-[30px] sm:w-[60%] lg:w-[55%] m-auto ">{headline} </p>
        </div>
        <div className="hidden lg:flex">
          <div className="w-[100%] min-h-[700px] relative">
            {
              sliderItems.map((item,index) => {
                const img = item.image?.nodes[0]?.sourceUrl
                const style = {
                  backgroundImage: `url(${img})`,
                  backgroundSize: 'cover'
                };
                return <div ref={refs.current[index]} key={index} onClick={() => slide(steps[index])} id={steps[index]}
                  className={`w-[40%] cursor-pointer slider-item disable  py-[15px] mb-[40px] last:mb-0 border-l-[5px] border-[#7D7D7D]`} >
                  <h4 className="" > {steps[index]} </h4>
                  <div className="item-content">
                    <p className="text-[16px] font-[400] text-[#23242499] pt-[26px] pb-[16px]"> {item.paragraph} </p>
                    <a href="#" className="text-[#0AADE5] text-[16px] flex hover-arrow"> Learn More
                      <img loading="lazy" className="mb-[-2px]" src={require('../assets/images/arrow-right-blue.svg')?.default?.src} alt="" />
                    </a>
                  </div>

                  {/* image */}
                  <div className="w-[56%] side-image h-[700px] rounded-[10px]  z-50 absolute right-0 top-0 side-image">
                    <Image
                      src={img}
                      width={0}
                      height={0}
                      sizes="100vw"
                      layout="responsive"
                      style={{width: '100%',height: '100%',objectFit: "cover",borderRadius: '10px'}} // optional
                      alt="Picture of the author"
                    />
                    <div className="flex h-full items-end absolute top-0  px-[50px] xl:px-[50px] sm:px-[20px] py-[50px]">
                      <div className="w-[60%]">
                        <p className="image-text text-white text-[23px] font-[600] leading-[37px]">{item.textImage} </p>
                      </div>
                      <div className="w-[40%] flex justify-end items-end">
                        <span className="button-transparent">Learn more</span>
                      </div>
                    </div>
                  </div>
                </div>
              })
            }
          </div>
        </div>


        {/* responsive */}
        <SliderResponsive cards={sliderItems} steps={steps} />
      </div>
    </section>
  );
}

AcfSlider.fragments = {
  key: `AcfSliderBlockFragment`,
  entry: gql`
    fragment AcfSliderBlockFragment on AcfSlider {
      sliderBlock {
        background
        headline
        title
        sliderItems {
          image {
            nodes {
              sourceUrl
            }
          }
          learnMore
          paragraph
          textImage
        }
      }
    }
  `,
};
