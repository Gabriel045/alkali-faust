import React,{Component} from "react";
import Slider from "react-slick";
import Link from 'next/link';


export default class SimpleSlider extends Component {

    render() {
        const cards = this.props?.cards;

        const settings = {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            useTransform: false,
            autoplay: true,
            pauseOnFocus: false,
            autoplaySpeed: 3000,
            dots: false,
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },]
        };
        return (
            <div id="partner" className="flex lg:hidden flex-row flex-wrap slick-initialized slick-slider">
                <Slider {...settings}>
                    {
                        cards.map((card,index) => {
                            return <div key={index} className="slick-testimonial slick-slide w-1/2 lg:w-1/4 lg:px-[30px] lg:pt-[51px] relative z-50 lg:h-auto flex items-center">
                                {card.url != null ?
                                    <Link href={card.url}>
                                        <a target="_blank"><img className="icon_filter" src={card.icon?.nodes[0]?.sourceUrl} alt="" /></a>
                                    </Link> :
                                    <img className="icon_filter" src={card.icon?.nodes[0]?.sourceUrl} alt="" />
                                }
                            </div>
                        })


                    }
                </Slider>
            </div>
        );
    }
}