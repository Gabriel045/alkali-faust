import React from "react";
import {useRef,useState,useEffect} from 'react';
import Link from 'next/link';
import Image from "next/future/image";


export default function HeroSingleBlog({featuredImage, title, categories, date}) {
    const dateFormated = new Date(date).toLocaleDateString('en-us',{year: "numeric",month: "short",day: "numeric"}) 
    const CategoryUrl = categories?.nodes[0]?.link
    console.log(CategoryUrl);

    return (
            <section className="bg-background relative">
                <div className="block_content flex flex-wrap w-full hero">
                    <div className="w-full lg:w-[55%] pr-[60px]">
                        <div className="hidden lg:block">
                            <Link href={CategoryUrl}>
                                <a className="inline-block bg-primary text-[white] lg:text-[12px] font-[500] rounded-[4px] p-[12px] transform hover:translate-y-[2px] ">Resource Category</a>
                            </Link>
                        </div>
                        <h1 className="my-[36px] text-white" style={{lineHeight: 'normal'}}>{title}</h1>
                        <div className="text-[18px] font-[400] text-[#ffffff99] flex items-end lg:pb-0 mt-[8px] flex-wrap xl:flex-nowrap">
                            <div className="flex items-end w-full xl:w-auto mb-[40px] xl:mb-0">
                                <span>
                                    <Image
                                        src={require('../../assets/images/logo_small.svg')}
                                        width={36}
                                        height={32}
                                        style={{}} // optional
                                        className={''}
                                        alt="Picture of the author"
                                    />
                                    </span>
                                <span className="text-[#fff] text-[18px] ml-[16px] mr-[30px] leading-[27px]"> Alkali </span>
                            </div>
                            <div className="flex items-end">
                            <span className="leading-[27px]">Posted: {dateFormated} </span>
                                <span className="mx-[20px]"> | </span>
                                <span className="">4 min read </span>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:block w-full lg:w-[45%] relative z-50">
                    <Image
                        src={featuredImage?.node?.sourceUrl}
                        width={500}
                        height={0}
                        style={{width: '100%',height: 'auto', objectFit: 'cover'}} // optional
                        className={'rounded-[20px]'}
                        alt="Picture of the author"
                    />
                    </div>
                    <div className="block lg:hidden">
                    <Image
                        src={featuredImage?.node?.sourceUrl}
                        width={500}
                        height={0}
                        style={{width: '100%',height: 'auto',objectFit: 'cover'}} // optional
                        className={'rounded-[20px]'}
                        alt="Picture of the author"
                    />
                        <img className="rounded-[20px] mt-[40px]" src="" alt="" />
                    </div>
                </div>
                <Image
                    src={require('../../assets/images/hexagons.svg')}
                    width={478}
                    height={600}
                    style={{}} // optional
                    className={'hidden lg:block absolute right-0 bottom-0 h-[600px]'}
                    alt="Picture of the author"
                />  
        </section>
    )
}