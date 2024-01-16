import React from 'react';
import {gql} from '@apollo/client';
import {useRef,useState,useEffect} from 'react';
import Image from "next/future/image";
import Link from "next/link";

export default function AcfSingleClientsContent({data}) {
    const sections = data?.singleClientsContentBlock?.sections

    return (
        <section className="">
            <div className="block_content" style={{paddingBottom:"20px"}}>
                {
                    sections.map((section, index)=>{
                        const paragraph = section.paragraph
                        const title = section.title
                        console.log(section);
                        return <div key={index} className="content">
                            <div className="left-border py-[82px] px-[36px] gray-border">
                                <h4 className="text-background text-[20px] font-[600] mb-[26px]" dangerouslySetInnerHTML={{__html: title ?? ''}} />
                                <p className="text-background">{paragraph}</p>
                            </div>
                            {
                                section.image1 !== null && section.image2 !== null ?  
                                    <div class="flex flex-nowrap gap-[20px] py-[20px]">
                                        <div className="w-1/2">
                                            <Image
                                                src={section.image1.nodes[0].sourceUrl}
                                                width={500}
                                                height={0}
                                                style={{objectFit: 'cover'}} // optional
                                                className={'h-[200px] lg:h-[420px] rounded-[20px] object-cover'}
                                                alt="Picture of the author"
                                            />
                                        </div>
                                        <div className="w-1/2">
                                            <Image
                                                src={section.image2.nodes[0].sourceUrl}
                                                width={500}
                                                height={0}
                                                style={{objectFit: 'cover'}} // optional
                                                className={'h-[200px] lg:h-[420px] rounded-[20px] object-cover'}
                                                alt="Picture of the author"
                                            />
                                        </div>
                                    </div>  
                                : ''
                            }
                        </div>
                    })
                }
            </div>
        </section>
    )
}

AcfSingleClientsContent.fragments = {
    key: `AcfSingleClientsContentBlockFragment`,
    entry: gql`
    fragment AcfSingleClientsContentBlockFragment on AcfSingleClientsContent {
        singleClientsContentBlock {
          sections {
            paragraph
            title
            image1 {
              nodes {
                sourceUrl
              }
            }
            image2 {
              nodes {
                sourceUrl
              }
            }
          }
        }
    }
  `,
};