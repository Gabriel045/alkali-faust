import React from 'react';
import {gql} from '@apollo/client';
import Link from 'next/link';
import {PartnerResponsive} from '../components';
import Image from "next/future/image";

export default function AcfCards({data}) {
  // Load values and assign defaults.

  const cards = data?.cardsBlock?.cards
  const numberOfColumns = data?.cardsBlock?.numberOfColumns[0]
  const cardBackground = data?.cardsBlock?.cardBackground[0]

  console.log(cards);

  return (
    <section className="">
      <div className="block_content">
        <div className={`flex flex-wrap gap-[56px]  ${numberOfColumns == "Four" ? 'xl:gap-[60px]' : 'xl:gap-[90px] lg:gap-y-[48px]'} `}>
          {cards.map((card) => {
            return (
              <div className={`rounded-[20px]  p-[30px] w-full  
                ${numberOfColumns == "Four" ? 'sm:w-[46%] xl:w-[21%]' : 'sm:w-[45%] xl:w-[28%] '} 
                ${cardBackground == "Yes" ? "bg-[#FAFAFA]" : ''} `} >
                <Image
                  src={card?.image?.node?.sourceUrl ?? ''}
                  width={0}
                  height={0}
                  style={{width: '64px',height: '65px'}} // optional
                  className={'rounded-t-[10px]'}
                  alt="Picture of the author"
                />
                <p className="mt-[30px] lg:mt-[53px] mb-[18px] text-[24px] lg:text-[32px] text-background font-[500] leading-[39px]"> {card?.title} </p>
                <p className="text-[16px] text-[#23232399] font-[400] mb-[32px]"> {card?.text} </p>
                <Link href="">
                  <a className="text-primary text-[16px] lg:text-[18px] font-[500] cursor-pointer flex hover-arrow" > {card?.link?.text}
                    <Image
                      src={require('../assets/images/arrow-right-blue.svg')}
                      width={0}
                      height={0}
                      style={{width: '21px',height: '27px'}} // optional
                      className={''}
                      alt="Picture of the author"
                    />
                  </a>
                </Link>
              </div>
            )

          })
          }
        </div>
      </div >
    </section >

  );
}

AcfCards.fragments = {
  key: `AcfCardsBlockFragment`,
  entry: gql`
    fragment AcfCardsBlockFragment on AcfCards {
        cardsBlock {
          cardBackground
          numberOfColumns
          cards {
            text
            title
            image {
              node {
                sourceUrl
              }
            }
            link {
              text
              url
            }
          }
        }
    }
  `,
};