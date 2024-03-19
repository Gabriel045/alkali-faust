import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { gql } from '@apollo/client'
import Image from 'next/image'
import loadable from '@loadable/component'

const SliderResponsive = loadable(() =>
	import('../components/SliderResponsive/SliderResponsive')
)

export default function AcfListImages({ data }) {
	const title = data?.listImageBlock?.title
	const headline = data?.listImageBlock?.headline
	const gallery = data?.listImageBlock?.gallery.nodes

	return (
		<section className='relative'>
			<div className='block_content'>
				<div className='pb-[40px] lg:pb-[80px]'>
					<h2
						className='text-center text-[#232323] m-auto lg:w-[45%]'
						dangerouslySetInnerHTML={{ __html: title ?? '' }}
					/>
					<p className='paragraph text-center text-[#525252] pt-[30px] lg:w-[55%] m-auto '>
						{headline}
					</p>
				</div>
				<div className='flex flex-row flex-wrap'>
					{gallery.map((item, index) => {
						return (
							<div
								key={index}
								className='w-[50%] flex justify-center lg:w-[20%] px-[16px] pt-[51px]'
							>
								<div className='w-full'>
									<Image
										src={item?.sourceUrl}
										width={0}
										height={0}
										style={{
											width: '100%',
											height: 'auto',
											borderRadius: '50px',
										}} // optional
										alt='Picture of the author'
									/>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}

AcfListImages.fragments = {
	key: `AcfListImagesBlockFragment`,
	entry: gql`
		fragment AcfListImagesBlockFragment on AcfListImages {
			listImageBlock {
				headline
				title
				gallery {
					nodes {
						sourceUrl
					}
				}
			}
		}
	`,
}
