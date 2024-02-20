import React from "react";
import {gql} from '@apollo/client';
import {useRef,useState,useEffect} from 'react';
import Image from "next/future/image";
import Link from "next/link";

export default function AcfSingleClientsContent({data}) {
    const sections = data?.singleClientsContentBlock?.sections
    const contentSections = useRef(sections.map(() => React.createRef()));


    // add the anomation when a section is focused 
    const callbackFunction = (entries) => {
        const [entry] = entries
        if(entry.isIntersecting) {
            entry.target.className += " border-active"
        }

    }
    const options = {
        root: null,
        rootMargin: "50px",
        threshold: 0.7,
    }

    useEffect(() => {
        contentSections.current.map((currentElement) => {
            const observer = new IntersectionObserver(callbackFunction,options)
            if(currentElement.current) {
                observer.observe(currentElement.current)
            }

            return () => {
                if(currentElement.current) observer.unobserve(currentElement.current)
            }

        })
    },[contentSections,options]);


    return (
        <section className="">
            <div className="block_content" style={{paddingBottom: "20px",paddingTop: "0px"}}>
                {
                    sections.map((section,index) => {
                        const paragraph = section.paragraph
                        const title = section.title
                        return <div key={index} className="content">
                            <div ref={contentSections.current[index]} className={`${index} left-border py-[82px] px-[36px] gray-border`}>
                                <h4 className="text-background text-[20px] font-[600] mb-[26px]" dangerouslySetInnerHTML={{__html: title ?? ''}} />
                                <p className="text-background">{paragraph}</p>
                            </div>
                            {
                                <div className="flex flex-nowrap gap-[20px] py-[20px]">
                                    <div className={`${section.image2 ? 'w-1/2' : 'w-full'}`}>
                                        <Image
                                            src={section?.image1?.nodes[0]?.sourceUrl}
                                            width={1500}
                                            height={0}
                                            style={{width: '100%',objectFit: 'cover'}} // optional
                                            className={`${section.image2 ? 'h-[200px] lg:h-[420px]' : ''} rounded-[20px] object-cover`}
                                            alt="Picture of the author"
                                        />
                                    </div>
                                    {
                                        section.image2 &&
                                        <div className="w-1/2">
                                            <Image
                                                src={section?.image2?.nodes[0]?.sourceUrl}
                                                width={500}
                                                height={0}
                                                style={{objectFit: 'cover'}} // optional
                                                className={'h-[200px] lg:h-[420px] rounded-[20px] object-cover'}
                                                alt="Picture of the author"
                                            />
                                        </div>
                                    }
                                </div>
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