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

  const cssClassNames = data?.cssClassNames ? data?.cssClassNames[0] : ''
  return (
    <section >
      <div className={"block_content " + cssClassNames}>
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
                <p className="mt-[30px] lg:mt-[53px] mb-[18px] text-[24px] leading-[30px] text-background font-[500]"> {card?.title} </p>
                <p className="text-[16px] leading-[24px] text-[#23232399] font-[400] mb-[32px]"> {card?.text} </p>
                {card.link?.url &&
                  <Link href={card.link?.url ?? "#"}>
                    <a target={card.link?.target} className="text-primary text-[16px] lg:text-[18px] font-[500] cursor-pointer flex hover-arrow" >
                      {card?.link?.title}
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
                }
              </div>
            )

          })
          }
        </div>
      </div>
    </section>

  );
}

AcfCards.fragments = {
  key: `AcfCardsBlockFragment`,
  entry: gql`
    fragment AcfCardsBlockFragment on AcfCards {
       cssClassNames
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
              title
              url
              target
            }
          }
        }
    }
  `,
};