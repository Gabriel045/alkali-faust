import React from "react";
import {useRef,useState,useEffect} from 'react';
import {gql} from '@apollo/client';
import loadable from '@loadable/component'

const Map = loadable(() => import('../components/Map/Map'))

export default function AcfMap({data}) {
    const title = data?.mapBlock?.title
    const headline = data?.mapBlock?.headline
    const america = data?.mapBlock?.america
    const asia = data?.mapBlock?.asia
    const europe = data?.mapBlock?.europe
    const oceania = data?.mapBlock?.oceania
    //console.log(oceania);

    return (
        <section className="">
            <div className="block_content w-full" style={{paddingTop: '0px'}}>
                <div className="pb-[40px] lg:pb-[80px]">
                    <div className="text-center text-[#232323] m-auto" dangerouslySetInnerHTML={{__html: title ?? ''}} />
                    <p className="paragraph text-center text-[#525252] pt-[30px] sm:w-[70%] m-auto ">{headline}</p>
                </div>
                <Map america={america} asia={asia} europe={europe} oceania={oceania}/>
            </div>
        </section>
    );
}

AcfMap.fragments = {
    key: `AcfMapBlockFragment`,
    entry: gql`
    fragment AcfMapBlockFragment on AcfMap {
        mapBlock {
          headline
          title
          america {
            text
            title
          }
          asia {
            text
            title
          }
          europe {
            text
            title
          }
          oceania {
            text
            title
          }
        }
    }
  `,
};
