import React from 'react';
import {gql} from '@apollo/client';
import {useRef,useState,useEffect} from 'react';
import Image from "next/future/image";
import Link from "next/link";

export default function AcfHeroSingleClients({data,postIcon,industries}) {
  const title = data?.heroSingleClientBlock?.title
  const paragraph = data?.heroSingleClientBlock?.paragraph
  const servicesProvide = data?.heroSingleClientBlock?.servicesProvide
  const icon = postIcon?.icon?.node.sourceUrl
  const category = industries?.nodes[0].name

  return (
    <section className="relative dark lg:min-h-[800px]">
      <div className="block_content block_content-single flex flex-wrap w-full items-center">
        <div className="w-full lg:w-[60%]  relative z-50 mb-[48px] lg:mb-0">
          <span className="text-[#B9B9BA] text-[18px] font-[600]">{category}</span>
          <div className="text-white text-[36px] lg:text-[52px] font-[600] my-[30px] leading-[60px]" dangerouslySetInnerHTML={{__html: title ?? ''}} />
          {
            paragraph.length > 0 &&
            <p className="subtext text-[#ffffffad] lg:w-[80%] my-[36px]" >{paragraph} </p>
          }
        </div>
        <div className="w-full lg:w-[40%] pb-[100px] lg:pb-0 flex lg:justify-end items-center">
          <div className="w-full lg:w-[60%] bg-[#2D2D2D] border-[1px] border-[#4D4D4D] rounded-[5px] relative z-50 h-fit">
            <div className="py-[25px] border-b-[1px] border-[#4D4D4D]">
              <Image
                src={icon}
                width={0}
                height={0}
                style={{width: '110px',height: 'auto'}} // optional
                className={'m-auto'}
                alt="Picture of the author"
              />
            </div>
            <div className="py-[30px] px-[20px] border-b-[1px] border-[#4D4D4D]">
              <p className="text-[#B9B9BA] font-[600]">Products Used</p>
            </div>
            <div className="py-[20px] px-[20px] border-b-[1px] border-[#4D4D4D]">
              {
                servicesProvide.map((item, index) => {
                  return item.url !== null ? <p key={index} className="fon-[400] mb-[10px] last:mb-0 text-[#ffffff99]"> {item.service} </p> 
                    : <p key={index}  className="font-[400] mb-[10px] last:mb-0 text-[#ffffff99]">
                        <Link href={"#"}>
                          <a> {item.service} </a>
                        </Link>
                      </p>
                })
              }
            </div>
            <div className="py-[20px] px-[20px]">
              <span className="text-[#B9B9BA] text-[16px] font-[400]">{category}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

AcfHeroSingleClients.fragments = {
  key: `AcfHeroSingleClientsBlockFragment`,
  entry: gql`
    fragment AcfHeroSingleClientsBlockFragment on AcfHeroSingleClients {
        heroSingleClientBlock {
          paragraph
          title
          servicesProvide {
            service
            url
          }
        } 
    }
  `,
};