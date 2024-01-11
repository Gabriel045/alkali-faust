import React,{Component} from "react";
import Slider from "react-slick";
import Link from 'next/link';


export default class SimpleSlider extends Component {

    render() {
        const testimonials = this.props?.testimonials;

        const settings = {
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            useTransform: false,
            arrows: true,
            dots: true,
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },]
        };
        //creating the ref
        const customeSlider = React.createRef();

        const gotoNext = () => {
            customeSlider.current.slickNext()
        }

        const gotoPrev = () => {
            customeSlider.current.slickPrev()
        }

        return (
            <>
                <div id="testimonial" className="lg:hidden block mb-[30px]">
                    <Slider {...settings} ref={customeSlider}>
                        {
                            testimonials.map((testimonial,index) => {
                                return <div key={index} className="rounded-[10px] border-custom z-50 relative slick-slide">
                                    <div className="p-[30px]">
                                        <p className="text-[#A6A6A6] font-[600] text-[13px] relative"> {testimonial.personName}</p>
                                        <p className="text-[#A6A6A6] font-[600] text-[13px] relative"> {testimonial.companyName}</p>
                                        <p className="text-[#fff] font-[400] text-[16px] relative mt-[18px]"> {testimonial.paragraph} </p>
                                        {
                                            testimonial?.logo[0] == 'Google' &&
                                            <span className="absolute top-[30px] right-[30px] z-50"> <img loading="lazy" src={require('../../assets/images/google-icon.svg')?.default?.src} alt="" /> </span>
                                        }
                                        {
                                            testimonial?.logo[0] == 'Clutch' &&
                                            <span className="absolute top-[30px] right-[30px] z-50"> <img loading="lazy" src={require('../../assets/images/clutch-logo.svg')?.default?.src} alt="" />  </span>
                                        }
                                        {
                                            testimonial?.logo[0] == 'UpCity' &&
                                            <span className="absolute top-[30px] right-[30px] z-50"> <img loading="lazy" src={require('../../assets/images/upcity-logo.svg')?.default?.src} alt="" /> </span>

                                        }
                                    </div>
                                </div>
                            })
                        }
                    </Slider >
                </div >
                <div className="lg:hidden flex justify-center gap-[200px]">
                    <span className="inline-block controlls controlls-hover z-50 prev" onClick={() => gotoPrev()}>
                        <img className="w-[53px] h-[53px]" src={require('../../assets/images/prev-black.svg')?.default?.src} />
                    </span>
                    <span className="inline-block controlls controlls-hover z-50 next" onClick={() => gotoNext()}>
                        <img className="w-[53px] h-[53px]" src={require('../../assets/images/next-black.svg')?.default?.src} />
                    </span>
                </div>
            </>
        );
    }
}