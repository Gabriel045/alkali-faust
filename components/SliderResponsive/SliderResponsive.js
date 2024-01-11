import React,{Component} from "react";
import Slider from "react-slick";
import Link from 'next/link';


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
            console.log(customeSlider.current);
            customeSlider.current.slickNext()
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
                                                <img className="mb-[-2px] " src={require('../../assets/images/arrow-right-blue.svg')?.default?.src} alt="" />
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="flex lg:block items-end  rounded-[10px] p-[20px] lg:p-[50px] relative h-[524px] z-50" style={style}>
                                        <div className="flex flex-wrap lg:flex-nowrap">
                                            <div className="w-full lg:w-[60%]">
                                                <p className="text-white text-[23px] font-[600] leading-[37px] mb-[25px] lg:mb-0"> {card.textImage} </p>
                                            </div>
                                            <div className="w-full lg:w-[40%] flex justify-start lg:justify-end items-end">
                                                <span className="button-transparent">Learn more</span>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            })
                        }
                    </Slider >
                </div >
                <div className="lg:hidden flex justify-center gap-[200px]">
                    <span className="inline-block controlls controlls-hover z-50 prev" onClick={() => gotoPrev()}>
                        <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
                            <rect className="icon-bg" x="50.6641" y="51.5078" width="49.6667" height="49.6667" rx="24.8333" transform="rotate(180 50.6641 51.5078)" fill="#fff" />
                            <path className="icon-arrow" d="M31.6641 26.6745L19.9974 26.6745M19.9974 26.6745L25.8307 32.5078M19.9974 26.6745L25.8307 20.8411" stroke="#0AADE5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <rect x="50.6641" y="51.5078" width="49.6667" height="49.6667" rx="24.8333" transform="rotate(180 50.6641 51.5078)" stroke="#0AADE5" strokeWidth="2" />
                        </svg>
                    </span>
                    <span className="inline-block controlls controlls-hover z-50 next" onClick={() => gotoNext()}>
                        <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
                            <rect className="icon-bg" x="50.6641" y="51.5078" width="49.6667" height="49.6667" rx="24.8333" transform="rotate(180 50.6641 51.5078)" fill="fff" />
                            <path className="icon-arrow" d="M19.9974 26.6745H31.6641M31.6641 26.6745L25.8307 20.8411M31.6641 26.6745L25.8307 32.5078" stroke="#0AADE5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <rect x="50.6641" y="51.5078" width="49.6667" height="49.6667" rx="24.8333" transform="rotate(180 50.6641 51.5078)" stroke="#0AADE5" strokeWidth="2" />
                        </svg>
                    </span>
                </div>
            </>
        );
    }
}