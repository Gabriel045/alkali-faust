import React from 'react';
import {gql} from '@apollo/client';
import {useRef,useState,useEffect} from 'react';
import Image from "next/future/image";
import Link from "next/link";

export default function AcfSingleClientsTestimonial({data,postIcon}) {
    const background = data?.singleClientsTestimonialBlock.backgroundColor
    const name = data?.singleClientsTestimonialBlock.name
    const paragraph = data?.singleClientsTestimonialBlock.paragraph
    const cssClassNames = data?.cssClassNames ? data?.cssClassNames.toString()  :  ""
    const title = data?.singleClientsTestimonialBlock.title
    const icon = postIcon?.icon?.node?.sourceUrl
console.log(icon);
    const style = {
        backgroundImage: `linear-gradient(0deg,${background} 0%,${background} 100%), url(${require('../assets/images/overlay.webp').default?.src})`,
        backgroundPosition: 'left center',
        backgroundSize: 'cover',
        backgroundBlendMode: 'color'
    }

    return (
        <section className="">
            <div className={`block_content ${cssClassNames}`} style={{paddingBottom: title ? 'auto' : '0px',paddingTop: title ? 'auto' : '0px'}}>
                {
                    title &&
                    <div className="pb-[60px] lg:pb-[90px]">
                        <h2 className="text-center text-background  m-auto" dangerouslySetInnerHTML={{__html: title ?? ''}} />
                    </div>
                }
                <div className="flex flex-wrap lg:flex-nowrap lg:h-[375px] rounded-[10px]" style={{boxShadow: '4px 7px 15px 0px rgba(0, 0, 0, 0.08)'}}>
                    <div className="w-full lg:w-[45%] h-[205px] lg:h-auto triangle relative  rounded-bl-[0px] lg:rounded-bl-[10px] rounded-tr-[10px] lg:rounded-tr-[0px] rounded-l-[10px]" style={style}>
                        {
                            icon  &&
                            <Image
                                src={icon}
                                width={276}
                                height={160}
                                style={{}} // optional
                                className={'absolute z-[50] top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]'}
                                alt="Picture of the author"
                            />
                        }
                    </div>
                    <div className="w-full lg:w-[55%] flex items-center px-[50px] lg:px-[60px] py-[55px] lg:py-[0px]">
                        <div>
                            <p className="text-[#232323] text-[16px] lg:text-[18px] font-[500] mb-[24px] lg:mb-[50px]">{paragraph} </p>
                            <p className="text-[#232323] text-[16px]  font-[700]">{name} </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

AcfSingleClientsTestimonial.fragments = {
    key: `AcfSingleClientsTestimonialBlockFragment`,
    entry: gql`
    fragment AcfSingleClientsTestimonialBlockFragment on AcfSingleClientsTestimonial {
        singleClientsTestimonialBlock {
          backgroundColor
          paragraph
          title
          name
        }
        cssClassNames
    }
  `,
};