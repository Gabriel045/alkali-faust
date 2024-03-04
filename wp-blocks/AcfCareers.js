import React from 'react';
import {gql,useQuery} from '@apollo/client';
import {useState,useEffect} from 'react';
import Link from 'next/link';
import Image from "next/future/image";

export default function AcfCareers({data, jobs}) {

    // Load values and assign defaults.
    const title = data?.careersBlock?.title
    const paragraph = data?.careersBlock?.paragraph
    const contact = data?.careersBlock?.contact

    console.log(jobs);
 
    const [loadJobs,setloadJobs] = useState(false);

    useEffect(() => {
        if(jobs)
            setloadJobs(true)
    },[jobs])

    return (
        <section className="relative">
            <div className="block_content w-full relative ">
                <div className="flex flex-wrap lg:flex-nowrap gap-[64px]">
                    <div className="lg:w-1/2 realtive">
                        <div className="sticky top-[40px]">
                            <h2 className="text-background">{title}</h2>
                            <p className="text-[16px] lg:text-[18px] text-background font-400 mt-[20px]">{paragraph}</p>
                        </div>
                    </div>
                    <div className="lg:w-1/2 flex gap-y-[24px] flex-col">
                        {
                            loadJobs &&
                            jobs.map((job,index) => {
                                return (
                                    <div key={index} className="border-[1px] border-[#EAECF0] rounded-[16px] py-[24px] px-[28px]">
                                        <div className="flex flex-row justify-between">
                                            <p className="text-[18px] font-[600] text-background">{job?.title}</p>
                                            <Link href={job?.link ?? "#"}>
                                                <a className="rotate-arrow text-[14px] text-[#0AADE5] font-[600] flex items-center">
                                                    View job
                                                    <Image
                                                        src={require('../assets/images/arrow-up-right.svg')}
                                                        width={250}
                                                        height={250}
                                                        style={{width: '21px',height: '20px'}} // optional
                                                        className={'mr-[8px]'}
                                                        alt="Picture of the author"
                                                    />
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="text-[16px] font-[400] text-background my-[16px]" dangerouslySetInnerHTML={{__html: job?.excerpt}} />
                                        <div className="flex gap-[24px] flex-row">
                                            <span className="flex items-center text-[16px] font-[500]">
                                                <Image
                                                    src={require('../assets/images/marker-pin.svg')}
                                                    width={250}
                                                    height={250}
                                                    style={{width: '21px',height: '20px'}} // optional
                                                    className={'mr-[8px]'}
                                                    alt="Picture of the author"
                                                />
                                                Remote
                                            </span>
                                            <span className="flex items-center text-[16px] font-[500]">
                                                <Image
                                                    src={require('../assets/images/clock.svg')}
                                                    width={250}
                                                    height={250}
                                                    style={{width: '21px',height: '20px'}} // optional
                                                    className={'mr-[8px]'}
                                                    alt="Picture of the author"
                                                />
                                                Full-time
                                            </span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="bg-[#F9FAFB] rounded-[16px] py-[32px] px-[20px] lg:px-[64px] lg:py-[64px] mt-[100px] lg:mt-[160px] flex items-center flex-col">
                    <h2 className="text-center text-[20px] lg:text-[36px]"> {contact?.title} </h2>
                    <p className="mt-[20px] text-[16px] lg:text-[20px] text-[#475467] sm:w-[70%] text-center"> {contact?.headline} </p>
                    <div className="mt-[32px] flex gap-[12px]">
                        <Link href={contact?.cta1?.url ?? "#"}>
                            <a target={contact?.cta1.target} className="text-background text-[16px] font-[600] bg-white border-[1px] border-[#D0D5DD] rounded-[10px]  px-[20px] py-[12px]  transform hover:translate-y-[2px]">{contact?.cta1?.title}</a>
                        </Link>
                        <Link href={contact?.cta2?.url ?? "#"}>
                            <a target={contact?.cta2.target} className="text-white text-[16px] font-[600] bg-primary rounded-[10px]  px-[20px] py-[12px]  transform hover:translate-y-[2px]">{contact?.cta2?.title}</a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>

    );
}

export const JobsFragment = gql`
  fragment JobsFragment on Job {
    excerpt
    title
    link
  }
`;


AcfCareers.fragments = {
    key: `AcfCareersBlockFragment`,
    entry: gql`
    fragment AcfCareersBlockFragment on AcfCareers {
        careersBlock {
            title
            paragraph
            contact {
                headline
                title
                cta1 {
                    title
                    target
                    url
                }
                cta2 {
                    title
                    target
                    url
                }
            }
        }
    }
  `,
};