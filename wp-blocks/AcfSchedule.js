import React from "react";
import {gql} from '@apollo/client';
import {useRef,useState,useEffect} from 'react';
import Image from "next/future/image";
import Link from "next/link";

export default function AcfSchedule({data}) {
    const title = data?.scheduleBlock?.title
    const paragraph = data?.scheduleBlock?.paragraph
    const ctaUrl = data?.scheduleBlock?.ctaUrl ?? "#"

    return (
        <section className="text-block dark">
            <div className="block_content flex flex-wrap lg:flex-nowrap gap-[28px] lg:gap-[80px]">
                <div className="w-full lg:w-[50%] relative">
                    <h3 className="z-50 relative" dangerouslySetInnerHTML={{__html: title ?? ''}} />
                    <p className="paragraph text-[#929292] py-[32px] z-50 relative">{paragraph}</p>
                </div>
                <div className="w-full lg:w-[50%] flex lg:justify-end items-center">
                    <Link href={ctaUrl}>
                        <a className="h-fit lg:ml-auto button_schedule inline-block">Schedule Discovery Call</a>
                    </Link>
                </div>
            </div>
        </section>
    )
}

AcfSchedule.fragments = {
    key: `AcfScheduleBlockFragment`,
    entry: gql`
    fragment AcfScheduleBlockFragment on AcfSchedule {
        scheduleBlock {
            title
            paragraph
            cta
            ctaUrl
        }
    }
  `,
};