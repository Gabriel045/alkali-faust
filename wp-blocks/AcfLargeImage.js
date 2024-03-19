import React from 'react'
import { gql } from '@apollo/client'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function AcfLargeImage({ data }) {
	const title = data?.largeImageBlock?.title
	const headline = data?.largeImageBlock?.headline
	const image = data?.largeImageBlock?.image?.node?.sourceUrl
	const cta = data?.largeImageBlock?.cta

	//console.log(ctaUrl);

	return (
        <section className='relative'>
			<div className='block_content'>
				<div className='pb-[40px] lg:pb-[80px]'>
					<h2
						className='text-center text-[#232323] m-auto'
						dangerouslySetInnerHTML={{ __html: title ?? '' }}
					/>
					<p className='paragraph text-center text-[#525252] pt-[30px] lg:w-[55%] m-auto '>
						{headline}
					</p>
					{cta?.url && (
						<div className='flex justify-center'>
							<Link
                                href={cta?.url}
                                target={cta?.target}
                                className='lg:m-auto mb-[80px] lg:mb-0 mt-[38px] lg:mt-[60px] button_custom inline-block'>

                                {cta?.title}

                            </Link>
						</div>
					)}
				</div>
				<div>
					<Image
						src={image}
						width={1000}
						height={0}
						style={{ width: '100%', height: 'auto' }} // optional
						alt='Picture of the author'
					/>
				</div>
			</div>
		</section>
    );
}

AcfLargeImage.fragments = {
	key: `AcfLargeImageBlockFragment`,
	entry: gql`
		fragment AcfLargeImageBlockFragment on AcfLargeImage {
			largeImageBlock {
				headline
				title
				image {
					node {
						sourceUrl
					}
				}
				cta {
					title
					url
					target
				}
			}
		}
	`,
}
