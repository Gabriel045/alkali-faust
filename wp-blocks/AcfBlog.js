import React,{useState,useEffect} from 'react'
import {useQuery,gql} from '@apollo/client';
import Link from 'next/link';
import Image from "next/future/image";

export default function AcfBlog({blog}) {
    return (
        <section>
            <div className="max-w-[1440px] w-full px-[20px] lg:px-[120px] pt-[80px] lg:pt-[120px] pb-[60px] lg:pb-[110px]">
                <div className="flex flex-row flex-wrap lg:justify-start mb-[50px] lg:mb-0">
                    {
                        blog.map((post,index) => {
                            const date = new Date(post?.date).toLocaleDateString('en-us',{year: "numeric",month: "short",day: "numeric"})
                            return (
                                <div key={index} className="blog-card w-full sm:w-1/2 lg:w-[33.3%] px-[5px] mb-[10px] rounded-[10px] relative">
                                    <div className="border-[#0000000d] border-[1px] rounded-[10px] h-full">
                                        <div className="thumbnail ">
                                            <Link href={post.link}>
                                                <a className=" cursor-pointer">
                                                    <Image
                                                        src={post?.featuredImage?.node?.sourceUrl}
                                                        width={5000}
                                                        height={0}
                                                        style={{width: '100%',height: '248px',objectFit: 'cover'}} // optional
                                                        className={''}
                                                        alt="Picture of the author"
                                                    />
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="p-[30px] card-content">
                                            <div className="text-[12px] font-[400] text-[#757575] flex lg:pb-0 mb-[20px]">
                                                <span className="relative z-50">{date}</span>
                                                <span className="relative z-50 mx-[5px]"> | 4 min read </span>
                                            </div>
                                            <a className="cursor-pointer blog-title" href="#">
                                                <h3 className="relative z-50 text-[22px] font-[600] text-secondary leading-[30px]"> {post?.title} </h3>
                                            </a>
                                            <div className="view_more_container read-article">
                                                <Link href={post.link}>
                                                    <a className="text-[#0AADE5] text-[16px] flex relative hover-arrow mt-[20px]">
                                                        Learn More
                                                        <Image
                                                            src={require('../assets/images/arrow-right-blue.svg')}
                                                            width={0}
                                                            height={0}
                                                            style={{width: '21px',height: '24px'}} // optional
                                                            className={''}
                                                            alt="Picture of the author"
                                                        />
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}



