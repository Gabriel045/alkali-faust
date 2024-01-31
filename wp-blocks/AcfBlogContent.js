import React,{useState,useEffect} from 'react'
import {useQuery,gql} from '@apollo/client';
import Link from 'next/link';
import Image from "next/future/image";

export default function AcfBlogContent({data}) {
    const content = data?.blogContentBlock?.content
    console.log(content);
    return (
        <section class="relative">
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
                    <div class="blog_content">
                        <div class="flex  lg:flex-nowrap  flex-nowrap flex-col-reverse lg:flex-row lg:gap-[8%]">
                            <div class="w-full lg:w-[75%] text" dangerouslySetInnerHTML={{__html: content}} />
                            <div class="w-[230px] lg:w-[25%] mb-[60px] lg:mb-0 relative">
                                <div class="sticky top-[40px] bg-white z-[100]">
                                    <h4 class="text-background text-[22px] font-[600]">Share</h4>
                                    <div class="flex gap-[8px] py-[26px] border-b-[1px] border-[#D8D8D8]">
                                        <Link href="#" >
                                            <a target="_blank" class="cursor-pointer hover:translate-y-[2px] transform">
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
                                        <Link href="#" >
                                            <a target="_blank" class="cursor-pointer hover:translate-y-[2px] transform">
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
                                        <Link href="#" >
                                            <a target="_blank" class="cursor-pointer hover:translate-y-[2px] transform">
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
                                    <div class="mt-[26px]">
                                        <a href="/blog/<?php echo $categories[0]->slug ?>" class="inline-block bg-primary text-[white] lg:text-[12px] font-[500] rounded-[4px] p-[12px] transform hover:translate-y-[2px] ">Resource Category</a>
                                    </div>
                                </div>
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
        }
    }
  `,
};