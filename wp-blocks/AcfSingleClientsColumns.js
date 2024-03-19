import React from 'react'
import { gql } from '@apollo/client'
import Image from 'next/image'
import Link from 'next/link'

export default function AcfSingleClientsColumns({ data }) {
	const cards = data?.singleClientsColumnsBlock?.cards
	const image = data?.singleClientsColumnsBlock?.image?.node?.sourceUrl

	return (
		<>
			<section className='bg-[#FCFCFC]'>
				<div className='block_content'>
					<div className='flex flex-row gap-[20px]'>
						{cards.map((card, i) => {
							return (
								<div
									key={i}
									className='w-1/3 border-l-[5px] border-[#0AADE5] pl-[15px] lg:pl-[30px]'
								>
									<h2 className='lg:text-[60px] md:text-[44px] text-[26px]'>
										{' '}
										{card?.title}{' '}
									</h2>
									<p className='mt-[10px] lg:mt-[50px] text-[14px] leading-[normal]'>
										{card?.paragraph}
									</p>
								</div>
							)
						})}
					</div>
				</div>
			</section>
			{image && (
				<section>
					<div
						className='block_content'
						style={{ paddingTop: '0px', paddingBottom: '0px' }}
					>
						<Image
							src={image}
							width={1500}
							height={0}
							style={{ width: '100%', height: 'auto' }} // optional
							className={'mt-[-50px] lg:mt-[-100px]'}
							alt='Picture of the author'
						/>
					</div>
				</section>
			)}
		</>
	)
}

AcfSingleClientsColumns.fragments = {
	key: `AcfSingleClientsColumnsBlockFragment`,
	entry: gql`
		fragment AcfSingleClientsColumnsBlockFragment on AcfSingleClientsColumns {
			singleClientsColumnsBlock {
				cards {
					paragraph
					title
				}
				image {
					node {
						sourceUrl
					}
				}
			}
		}
	`,
}
