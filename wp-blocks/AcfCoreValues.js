import React from "react";
import {useRef,useState,useEffect} from 'react';
import {gql} from '@apollo/client';
import {Map} from '../components';
import Image from "next/future/image";


export default function AcfCoreValues({data}) {
    const title = data?.coreValuesBlock?.title
    const cards = data?.coreValuesBlock?.cards
    //console.log(cards);

    return (
        <section className="relative bg-background">
            <Image
                src={require('../assets/images/hexagon.svg')}
                width={250}
                height={250}
                style={{width: '103px',height: '398px',objectFit: 'cover'}} // optional
                className={'hidden lg:block absolute z-10 top-[100px] left-0'}
                alt="Picture of the author"
            />
            <div className="block_content">
                <div className="pb-[60px] lg:pb-[90px]">
                    <h2 className="text-center text-[#fff]  m-auto" dangerouslySetInnerHTML={{__html: title ?? ''}} />
                </div>
                <div className="flex flex-row flex-wrap">
                    {
                        cards.map((card,index) => {
                            return (
                                <div key={index} className=" w-full lg:w-1/3 px-[30px] py-[51px] relative">
                                    <div>
                                        {
                                            card.icon  &&
                                            <Image
                                                src={card?.icon?.node.sourceUrl}
                                                width={0}
                                                height={0}
                                                style={{width: '64px',height: '65px',objectFit: 'cover'}} // optional
                                                className={''}
                                                alt="Picture of the author"
                                            />
                                        }

                                    </div>
                                    <p className="text-[#FFF] font-[600] text-[20px] pt-[30px]"> {card.title} </p>
                                    <p className="text-[16px] lg:text-[18px] leading-[24px] font-[400] text-[#929292] pt-[10px]"> {card.paragraph} </p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}

AcfCoreValues.fragments = {
    key: `AcfCoreValuesBlockFragment`,
    entry: gql`
    fragment AcfCoreValuesBlockFragment on AcfCoreValues {
        coreValuesBlock {
          title
          cards {
            paragraph
            title
            icon {
              node {
                sourceUrl
              }
            }
          }
        }
    }
  `,
};
