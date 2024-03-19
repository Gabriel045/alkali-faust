import React from 'react'
import { gql } from '@apollo/client'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function AcfFaq({ data }) {
	const leftCol = data?.fAQBlock?.group?.leftCol
	const rightCol = data?.fAQBlock?.group?.rightCol

	//creating the ref
	const leftRef = useRef(leftCol.map(() => React.createRef()))
	const rightRef = useRef(leftCol.map(() => React.createRef()))

	//simulate a click on a page load to active the frist card
	useEffect(() => {
		leftRef.current[0].current.children[0].click()
	}, [leftRef])

	const slide = index => {
		leftRef.current.map(item => {
			if (item.current.className.includes(`step-${index}`)) {
				item.current.className += ' enable'
			} else {
				const string = item.current.className.replace('enable', '')
				item.current.className = string
			}
		})
	}

	const slideRight = index => {
		rightRef.current.map(item => {
			if (item.current.className.includes(`step-${index}`)) {
				item.current.className += ' enable'
			} else {
				const string = item.current.className.replace('enable', '')
				item.current.className = string
			}
		})
	}

	return (
		<section
			id='faq'
			className='text-block dark '
		>
			<div className='block_content relative'>
				<Image
					src={require('../assets/images/hexagon-5.svg')}
					width={0}
					height={0}
					style={{ width: '268px', height: '300px' }} // optional
					className={'hidden lg:block absolute z-10 right-[60px] top-[20px]'}
					alt='Picture of the author'
				/>
				<h2 className='text-[30px] lg:text-[36px] text-white font-[600] lg:w-[60%]'>
					Frequently Asked Questions About Our Website Development Solutions
					<span style={{ color: '#0aade5' }}>Website Development</span>
				</h2>
				<div className='mt-[60px] lg:mt-[150px] flex flex-wrap lg:flex-nowrap'>
					<div className='left w-full lg:w-1/2 border-l-[3px] border-[#7D7D7D] lg:mr-[22px]'>
						{leftCol.map((leftItem, index) => {
							return (
								<div
									key={index}
									ref={leftRef.current[index]}
									className={` step-${index} slider-faq ml-[-3px] mb-[75px] lg:last:mb-0  disable`}
								>
									<h4
										className='text-[#FFF] cursor-pointer relative'
										onClick={() => slide(index)}
									>
										{' '}
										{leftItem?.title}{' '}
									</h4>
									<div className='item-content'>
										<p className='paragraph text-[#FFF] pt-[26px] pb-[16px]'>
											{' '}
											{leftItem?.paragraph}{' '}
										</p>
									</div>
								</div>
							)
						})}
					</div>
					<div className='right w-full lg:w-1/2 border-l-[3px] border-[#7D7D7D] lg:ml-[22px]'>
						{rightCol.map((rightItem, index) => {
							return (
								<div
									key={index}
									ref={rightRef.current[index]}
									className={` step-${index} slider-faq ml-[-3px] mb-[75px] last:mb-0  disable`}
								>
									<h4
										className='text-[#FFF] cursor-pointer relative'
										onClick={() => slideRight(index)}
									>
										{rightItem?.title}
									</h4>
									<div className='item-content'>
										<p className='paragraph text-[#FFF] pt-[26px] pb-[16px]'>
											{' '}
											{rightItem?.paragraph}
										</p>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</section>
	)
}

AcfFaq.fragments = {
	key: `AcfFaqBlockFragment`,
	entry: gql`
		fragment AcfFaqBlockFragment on AcfFaq {
			fAQBlock {
				group {
					leftCol {
						paragraph
						title
					}
					rightCol {
						paragraph
						title
					}
				}
			}
		}
	`,
}
