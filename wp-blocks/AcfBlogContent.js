import React,{useState,useEffect} from 'react'
import {useQuery,gql} from '@apollo/client';
import Link from 'next/link';
import Image from "next/future/image";

export default function AcfBlogContent({data,categories,socialMedia, type}) {
    const content = data?.blogContentBlock?.content
    const cta = data?.blogContentBlock?.cta
    const categoryUrl = categories?.nodes[0]?.link
    console.log(type);

    return (
        <section className="relative">
            <Image
                src={require('../assets/images/hexagon-2.svg')}
                width={211}
                height={418}
                style={{}} // optional
                className={'hidden lg:block absolute z-10 top-[10%] left-[-80px] rotate-180'}
                alt="Picture of the author"
            />
            <Image
                src={require('../assets/images/hexagon-2.svg')}
                width={211}
                height={418}
                style={{}} // optional
                className={'hidden lg:block absolute z-10 top-[50%] right-0'}
                alt="Picture of the author"
            />
            <div className="blog_content">
                <div className="flex  lg:flex-nowrap  flex-nowrap flex-col-reverse lg:flex-row lg:gap-[8%]">
                    <div className="w-full lg:w-[75%] text" dangerouslySetInnerHTML={{__html: content}} />
                    <div className="w-[230px] lg:w-[25%] mb-[60px] lg:mb-0 relative">
                        {
                            type != "job" &&
                            <div className="sticky top-[40px] bg-white z-[100]">
                                <h4 className="text-background text-[22px] font-[600]">Share</h4>
                                <div className="flex gap-[8px] py-[26px] border-b-[1px] border-[#D8D8D8]">
                                    <Link href={socialMedia?.instagram ?? "#"} >
                                        <a target="_blank" className="cursor-pointer hover:translate-y-[2px] transform">
                                            <Image
                                                src={require('../assets/images/instagram_blue.svg')}
                                                width={41}
                                                height={41}
                                                style={{}} // optional
                                                className={''}
                                                alt="Picture of the author"
                                            />
                                        </a>
                                    </Link>
                                    <Link href={socialMedia?.twitter ?? "#"} >
                                        <a target="_blank" className="cursor-pointer hover:translate-y-[2px] transform">
                                            <Image
                                                src={require('../assets/images/twitter_blue.svg')}
                                                width={41}
                                                height={41}
                                                style={{}} // optional
                                                className={''}
                                                alt="Picture of the author"
                                            />
                                        </a>
                                    </Link>
                                    <Link href={socialMedia?.facebook ?? "#"} >
                                        <a target="_blank" className="cursor-pointer hover:translate-y-[2px] transform">
                                            <Image
                                                src={require('../assets/images/facebook_blue.svg')}
                                                width={41}
                                                height={41}
                                                style={{}} // optional
                                                className={''}
                                                alt="Picture of the author"
                                            />
                                        </a>
                                    </Link>
                                </div>
                                <div className="mt-[26px]">
                                    <Link href={categoryUrl ?? '#'}>
                                        <a className="inline-block bg-primary text-[white] lg:text-[12px] font-[500] rounded-[4px] p-[12px] transform hover:translate-y-[2px] ">Resource Category</a>
                                    </Link>
                                </div>
                            </div>
                        }
                        {
                            type == "job" && 
                            <div className="">
                                <Link href={cta?.url ?? '#'}>
                                        <a target={cta?.target} className="hov flex w-fit bg-primary text-[white] lg:text-[16px] font-[400] rounded-[4px] px-[20px] py-[8px] transform hover:translate-y-[2px] ">
                                            Apply Now
                                            <Image
                                                src={require('../assets/images/arrow-right.svg')}
                                                width={21}
                                                height={25}
                                                style={{}} // optional
                                                alt="Picture of the author"
                                            />
                                        </a>
                                </Link>
                            </div>
                        }
                        
                    </div>
                </div>
            </div>
        </section>
    );
}

AcfBlogContent.fragments = {
    key: `AcfBlogContentBlockFragment`,
    entry: gql`
    fragment AcfBlogContentBlockFragment on AcfBlogContent {
         blogContentBlock {
          content
          cta{
            url
            target
            title
          }
        }
    }
  `,
};