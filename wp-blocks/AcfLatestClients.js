import React from 'react';
import {gql} from '@apollo/client';
import {useRef,useState,useEffect} from 'react';
import Image from "next/future/image";
import Link from "next/link";
import {LatestClientsResponsive} from '../components';


export default function AcflatestClients({latestClients}) {

    //console.log(latestClients)

    return (
        <section id="" className="bg-background relative">
            <div className="block_content flex flex-col lg:items-center">
                <h2 className="text-white mb-[75px] lg:mb-[100px] w-full text-start">More Projects</h2>
                <div className="hidden lg:flex flex-row flex-wrap lg:justify-center">
                    {
                        latestClients.map((client,index) => {
                            const icon = client?.clients?.icon?.node?.sourceUrl
                            const image = client?.featuredImage?.node.sourceUrl
                            
                            return <div key={index} className="blog-card w-full lg:w-[33.3%] px-[7px] mb-[22px] rounded-[10px] relative">
                                <div className="rounded-[10px] h-full">
                                    <div className="thumbnail rounded-t-[10px]">
                                        <Link href={client.link}>
                                            <a className=" cursor-pointer" >
                                                <Image
                                                    src={image}
                                                    width={600}
                                                    height={0}
                                                    style={{width: '100%',height: '380px'}} // optional
                                                    className={'rounded-t-[10px], object-cover'}
                                                    alt="Picture of the author"
                                                />
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="h-[140px] px-[30px] rounded-b-[10px] flex justify-between items-center card-content" style={{background: 'linear-gradient(152deg, #3F3F3F 6.9%, #232323 86.09%), #FAFAFA'}}>
                                        <div className="w-[113px] card-logo">
                                            <Link href={client.link}>
                                                <a className="cursor-pointer">
                                                    <Image
                                                        src={icon}
                                                        width={120}
                                                        height={0}
                                                        style={{width: '100%',height: 'auto'}} // optional
                                                        className={'rounded-t-[10px] object-cover'}
                                                        alt="Picture of the author"
                                                    />
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="view_more_containers">
                                            <Link href={client.link}>
                                                <a className="read-article cursor-pointer flex text-primary text-[16px] " >
                                                    View More
                                                    <Image
                                                        src={require('../assets/images/arrow-right-blue.svg')}
                                                        width={21}
                                                        height={25}
                                                        style={{}} // optional
                                                        alt="Picture of the author"
                                                    />
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
                <LatestClientsResponsive  latestClients={latestClients} />
            </div>
        </section>
    ) 
} 
