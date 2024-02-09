import React,{Component} from "react";
import Slider from "react-slick";
import Link from 'next/link';
import Image from "next/future/image";


export default class SimpleSlider extends Component {

    render() {
        const cards = this.props?.cards;
        const steps = this.props?.steps;

        const settings = {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            useTransform: false,
            arrows: true,
        };
        //creating the ref
        const customeSlider = React.createRef();

        const gotoNext = () => {
            customeSlider.current.slickNext()
            console.log(customeSlider.current);
        }

        const gotoPrev = () => {
            customeSlider.current.slickPrev()
        }

        return (
            <>
                <div className="slider-mobile multiple-item w-full sm:w-[90%] m-auto mb-[30px] lg:hidden">
                    <Slider {...settings} ref={customeSlider}>
                        {
                            cards.map((card,index) => {
                                const img = card?.image?.nodes[0]?.sourceUrl
                                const style = {
                                    backgroundImage: `url(${img})`,
                                    backgroundSize: 'cover'
                                };
                                return <div key={index} className="slick-slide  w-full">
                                    <h4 className="text-[#232628]">{steps[index]}</h4>
                                    <div className="item-content mb-[70px]">
                                        <p className="paragraph text-[#23242499] pt-[26px] pb-[16px]"> {card.paragraph}  </p>
                                        <Link href={card.learnMore ? card.learnMore : ''}>
                                            <a href="#" className="text-[#0AADE5] text-[16px] flex">
                                                Learn More
                                                <Image
                                                    src={require('../../assets/images/arrow-right-blue.svg')}
                                                    width={21}
                                                    height={25}
                                                    style={{}} // optional
                                                    alt="Picture of the author"
                                                />
                                                {/*<img loading="lazy"  className="mb-[-2px] " src={require('../../assets/images/arrow-right-blue.svg')?.default?.src} alt="" />*/}
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="flex lg:block items-end   relative h-[524px] z-50">
                                        <Image
                                            src={img}
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            layout="responsive"
                                            style={{width: '100%',height: '100%',objectFit: "cover",borderRadius: '10px'}} // optional
                                            alt="Picture of the author"
                                        />
                                        <div className="flex flex-wrap lg:flex-nowrap absolute p-[20px] pb-[40px] lg:p-[50px]">
                                                <p className="w-full lg:w-[60%] text-white text-[23px] font-[600] leading-[37px] mb-[25px] lg:mb-0"> {card.textImage} </p>
                                                <span className="button-transparent">Learn more</span>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </Slider >
                </div >
                <div className="lg:hidden flex justify-center gap-[200px]">
                    <span className="inline-block controlls controlls-hover z-50 prev" onClick={() => gotoPrev()}>
                        <Image
                            src={require('../../assets/images/slider-prev.svg')}
                            width={39}
                            height={39}
                            style={{}} // optional
                            alt="Picture of the author"
                            className=""
                        />
                    </span>
                    <span className="inline-block controlls controlls-hover z-50 next" onClick={() => gotoNext()}>
                        <Image
                            src={require('../../assets/images/slider-next.svg')}
                            width={39}
                            height={39}
                            style={{}} // optional
                            alt="Picture of the author"
                            className=""
                        />
                    </span>
                </div>
            </>
        );
    }
}