import React,{Component} from "react";
import Slider from "react-slick";
import Link from 'next/link';


export default class SimpleSlider extends Component {

    render() {
     
        const title = this.props?.title
        const posts = this.props?.cards?.posts?.edges ? this.props?.cards?.posts?.edges  : []

        const settings = {
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            useTransform: false,
            arrows: true,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            ]
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
            <div className="block_content w-full">
                <div className="pb-[60px] lg:pb-[92px] flex">
                    <h2 className=" text-[#232323] lg:w-[40%]" dangerouslySetInnerHTML={{__html: title ?? ''}} />
                    <div className="articles hidden lg:flex w-[60%] justify-end gap-[20px]">
                        <span className="inline-block controlls controlls-hover z-50 prev" onClick={() => gotoPrev()}>
                            <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
                                <rect className="icon-bg" x="50.6641" y="51.5078" width="49.6667" height="49.6667" rx="24.8333" transform="rotate(180 50.6641 51.5078)" fill="#fff" />
                                <path className="icon-arrow" d="M31.6641 26.6745L19.9974 26.6745M19.9974 26.6745L25.8307 32.5078M19.9974 26.6745L25.8307 20.8411" stroke="#0AADE5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <rect x="50.6641" y="51.5078" width="49.6667" height="49.6667" rx="24.8333" transform="rotate(180 50.6641 51.5078)" stroke="#0AADE5" strokeWidth="2" />
                            </svg>
                        </span>
                        <span className="inline-block controlls controlls-hover z-50 next" onClick={() => gotoNext()}>
                            <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
                                <rect className="icon-bg" x="50.6641" y="51.5078" width="49.6667" height="49.6667" rx="24.8333" transform="rotate(180 50.6641 51.5078)" fill="#fff" />
                                <path className="icon-arrow" d="M19.9974 26.6745H31.6641M31.6641 26.6745L25.8307 20.8411M31.6641 26.6745L25.8307 32.5078" stroke="#0AADE5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <rect x="50.6641" y="51.5078" width="49.6667" height="49.6667" rx="24.8333" transform="rotate(180 50.6641 51.5078)" stroke="#0AADE5" strokeWidth="2" />
                            </svg>
                        </span>
                    </div>
                </div>
                <div className="multiple-items-article mb-[30px]">
                    <Slider {...settings} ref={customeSlider}>
                        {
                            posts.map((card,index) => {
                                return <div key={index} className="rounded-[10px] bg-[#F9F9F9] slick-slide">
                                    <div>
                                        <img className="h-[250px] w-full object-cover rounded-t-[10px]" src={card?.node?.featuredImage?.node?.sourceUrl} alt="" />
                                    </div>
                                    <div className="py-[45px] px-[35px] articles-border">
                                        <p className="text-[#232323] text-[22px] font-[600] leading-[23px]"> {card?.node?.title} </p>
                                        <p className="text-[#525252] text-[16px] font-[400] my-[44px]" dangerouslySetInnerHTML={{__html: card?.node?.excerpt ?? ''}} />
                                        <a href="" className="text-[#0AADE5] text-[16px] flex hover-arrow"> 
                                            Resource 
                                            <img className="ml-[5px] mt-[2px]" src={require('../../assets/images/arrow-right-blue.svg')?.default?.src} alt="" />
                                        </a>
                                    </div>
                                </div>
                            })
                        }
                    </Slider>
                </div>
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
            </div>
        );
    }
}