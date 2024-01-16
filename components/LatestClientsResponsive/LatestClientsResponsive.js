import React,{Component} from "react";
import Slider from "react-slick";
import Link from 'next/link';
import Image from "next/future/image";



export default class SimpleSlider extends Component {

    render() {
        const latestClients = this.props?.latestClients;

        const settings = {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            useTransform: false,
            arrows: true,
            responsive: [{
                breakpoint: 1024,
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
                <div id="lastest-blog" className="lg:hidden block">
                    <Slider {...settings} ref={customeSlider}>
                        {
                            latestClients.map((client,index) => {
                                const icon = client?.clients?.icon?.node?.sourceUrl
                                const image = client?.featuredImage?.node.sourceUrl

                                return <div key={index} className="blog-card w-full lg:w-[33.3%] px-[7px] mb-[22px] rounded-[10px] relative">
                                    <div className="rounded-[10px] h-full">
                                        <div className="thumbnail rounded-t-[10px]">
                                            <Link href={client.link}>
                                                <a className=" cursor-pointer" >
                                                    <Image
                                                        src={image}
                                                        width={600}
                                                        height={0}
                                                        style={{width: '100%',height: '380px'}} // optional
                                                        className={'rounded-t-[10px], object-cover'}
                                                        alt="Picture of the author"
                                                    />
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="h-[140px] px-[30px] rounded-b-[10px] flex justify-between items-center card-content" style={{background: 'linear-gradient(152deg, #3F3F3F 6.9%, #232323 86.09%), #FAFAFA'}}>
                                            <div className="w-[113px] card-logo">
                                                <Link href={client.link}>
                                                    <a className="cursor-pointer">
                                                        <Image
                                                            src={icon}
                                                            width={120}
                                                            height={0}
                                                            style={{width: '100%',height: 'auto'}} // optional
                                                            className={'rounded-t-[10px] object-cover'}
                                                            alt="Picture of the author"
                                                        />
                                                    </a>
                                                </Link>
                                            </div>
                                            <div className="view_more_containers">
                                                <Link href={client.link}>
                                                    <a className="read-article cursor-pointer flex text-primary text-[16px] " >
                                                        View More
                                                        <Image
                                                            src={require('../../assets/images/arrow-right-blue.svg')}
                                                            width={21}
                                                            height={25}
                                                            style={{}} // optional
                                                            alt="Picture of the author"
                                                        />
                                                    </a>
                                                </Link>
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
                        <img loading="lazy" className="w-[53px] h-[53px]" src={require('../../assets/images/prev-black.svg')?.default?.src} />
                    </span>
                    <span className="inline-block controlls controlls-hover z-50 next" onClick={() => gotoNext()}>
                        <img loading="lazy" className="w-[53px] h-[53px]" src={require('../../assets/images/next-black.svg')?.default?.src} />
                    </span>
                </div>
            </>
        );
    }
}