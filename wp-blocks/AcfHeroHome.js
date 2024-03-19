import React from 'react'
import { gql } from '@apollo/client'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import loadable from '@loadable/component'
const AcfGravityForm = loadable(() => import('../wp-blocks/AcfGravityForm'))

export default function AcfHeroHome({ data }) {
	// Load values and assign defaults.
	const title = data.heroHomeBlock?.title
	const paragraph = data.heroHomeBlock?.paragraph
	const icons = data.heroHomeBlock?.clientsIcon?.nodes
	const sideImage = data.heroHomeBlock?.sideImage?.node?.sourceUrl
	const formId = data.heroHomeBlock?.formId
	const imageOrForm = data.heroHomeBlock?.imageOrForm
	const idForm = [data => [gravytyFormBlock => [idForm => formId]]]
	const ctaUrl = data.heroHomeBlock?.ctaUrl

	const sideElement = ctaUrl?.url || formId ? true : false

	return (
        <section
			id='hero-home'
			className='relative bg-background'
		>
			<div className='flex justify-center flex-wrap w-full'>
				<div className='home-hero flex flex-col w-full max-w-[1440px] items-center relative z-[1]'>
					<div className={`flex flex-row ${formId ? 'gap-[40px]' : ''}`}>
						<div
							className={
								imageOrForm != 'None'
									? 'w-[53%]'
									: 'w-full flex flex-col items-center'
							}
						>
							<div
								className={`text-white h-[160px] md:h-auto ${
									imageOrForm != 'None'
										? 'w-full'
										: 'text-center md:w-[80%] w-full'
								}`}
								dangerouslySetInnerHTML={{ __html: title ?? '' }}
							/>
							<p
								className={`subtext text-[#ffffffad] md:w-[70%] my-[36px] ${
									sideElement ? '' : 'text-center'
								}`}
							>
								{' '}
								{paragraph}{' '}
							</p>
							{ctaUrl?.url && (
								(<Link
                                    href={ctaUrl?.url ?? '#'}
                                    className='button_custom inline-block z-1'
                                    target={ctaUrl?.target}>

                                    {ctaUrl?.title}

                                </Link>)
							)}
						</div>
						{sideImage && (
							<div className='w-[47%]'>
								<Image
									src={sideImage}
									width={580}
									height={520}
									style={{}} // optional
									className={''}
									alt='Picture of the author'
								/>
							</div>
						)}
						{formId && (
							<div className='w-[47%]'>
								<AcfGravityForm idForm={formId} />
							</div>
						)}
					</div>
					<div className='flex w-[100%] pt-[100px] lg:pt-[120px] lg:flex-nowrap  flex-wrap lg:pr-[96px] z-[1]'>
						<span className='text-[18px] font-[600] text-white w-full lg:w-1/3 lg:text-start text-center mb-[46px] lg:mb-0 lg:flex lg:items-center relative z-50'>
							Trusted by Great Clients
						</span>
						<div className='flex  justify-end flex-row gap-[20px] lg:gap-[10%] gap-y-[60px] w-full lg:w-2/3 flex-nowrap '>
							{icons.map((icon, index) => {
								return (
									<div
										key={index}
										className='w-1/4 flex justify-center z-[1]'
									>
										<div className='w-full'>
											<Image
												src={icon.sourceUrl}
												width={122}
												height={41}
												sizes='100vw'
												layout='responsive'
												style={{ width: '100%', height: '100%' }} // optional
												alt='Picture of the author'
											/>
										</div>
									</div>
								)
							})}
						</div>
					</div>
				</div>
			</div>
			<div className='absolute hidden lg:block right-0 bottom-0 h-[600px] w-[478px]'>
				<Image
					src={require('../assets/images/hexagons.svg')}
					width={478}
					height={600}
					sizes='100vw'
					layout='responsive'
					style={{ width: '100%', height: '100%', objectFit: 'cover' }} // optional
					alt='Picture of the author'
				/>
			</div>
			<div className='absolute hidden lg:block bottom-[-90px] left-0 z-0 w-[103px] h-[398px]'>
				<Image
					src={require('../assets/images/hexagon.svg')}
					width={103}
					height={398}
					sizes='100vw'
					layout='responsive'
					style={{ width: '100%', height: '100%', objectFit: 'cover' }} // optional
					alt='Picture of the author'
				/>
			</div>
		</section>
    );
}

AcfHeroHome.fragments = {
	key: `AcfHeroHomeBlockFragment`,
	entry: gql`
		fragment AcfHeroHomeBlockFragment on AcfHeroHome {
			heroHomeBlock {
				title
				backgroundImage {
					node {
						link
					}
				}
				paragraph
				clientsIcon {
					nodes {
						sourceUrl
					}
				}
				imageOrForm
				formId
				sideImage {
					node {
						sourceUrl
					}
				}
				ctaUrl {
					url
					target
					title
				}
			}
		}
	`,
}
