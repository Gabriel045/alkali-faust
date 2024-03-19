import React, { Component } from 'react'
import Slider from 'react-slick'
import Link from 'next/link'
import Image from 'next/image'

export default class SimpleSlider extends Component {
	render() {
		const cards = this.props?.cards

		const settings = {
			slidesToShow: 4,
			slidesToScroll: 1,
			infinite: false,
			useTransform: false,
			autoplay: true,
			pauseOnFocus: false,
			autoplaySpeed: 3000,
			dots: false,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						infinite: false,
						dots: false,
					},
				},
			],
		}
		return (
            <div
				id='partner'
				className='flex lg:hidden flex-row flex-wrap slick-initialized slick-slider'
			>
				<Slider {...settings}>
					{cards.map((card, index) => {
						return (
                            <div
								key={index}
								className='slick-testimonial slick-slide w-1/2 lg:w-1/4 lg:px-[30px] lg:pt-[51px] relative z-50 lg:h-auto flex items-center'
							>
								{card.url != null ? (
									(<Link href={card.url} target='_blank'>

                                        <Image
                                            src={card.icon?.nodes[0]?.sourceUrl}
                                            width={0}
                                            height={0}
                                            style={{ width: '100%', height: '100%' }} // optional
                                            alt='Picture of the author'
                                            className='icon_filter'
                                        />

                                    </Link>)
								) : (
									<Image
										src={card.icon?.nodes[0]?.sourceUrl}
										width={0}
										height={0}
										style={{ width: '100%', height: '100%' }} // optional
										alt='Picture of the author'
										className='icon_filter'
									/>
								)}
							</div>
                        );
					})}
				</Slider>
			</div>
        );
	}
}
