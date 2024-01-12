import React from 'react';
import {gql} from '@apollo/client';
import {TestimonialResponsive} from '../components';
import Image from "next/future/image";


export default function AcfTestimonials({data}) {
  //console.log('all props',props);

  const title = data.testimonialBlock?.title
  const testimonials = data.testimonialBlock?.testimonial

  return (
    <section  className=" bg-background relative">
      <div className="block_content w-full relative">
        <div className="pb-[60px] lg:pb-[120px] flex flex-wrap  lg:flex-nowrap w-full">
          <h2 className="w-full mb-[50px] lg:mb-0 lg:w-[60%] text-[#fff]"> {title}  </h2>
          <div className="w-full lg:w-[40%] flex lg:justify-end gap-[20px] lg:gap-[50px]">
            <Image
              src={require('../assets/images/google.svg')}
              width={0}
              height={0}
              style={{width:'90px',height: '30px'}} // optional
              alt="Picture of the author"
            />
            <Image
              src={require('../assets/images/clutch.svg')}
              width={0}
              height={0}
              style={{width:'90px',height: '30px'}} // optional
              alt="Picture of the author"
            />
            <Image
              src={require('../assets/images/upcity.svg')}
              width={0}
              height={0}
              style={{width:'90px',height: '30px'}} // optional
              alt="Picture of the author"
            />
            {/*<img loading="lazy"  className="lg:w-[90px] h-[30px]" src={require('../assets/images/google.svg')?.default?.src} alt="" />
            <img loading="lazy"  className="lg:w-[90px] h-[30px]" src={require('../assets/images/clutch.svg')?.default?.src} alt="" />
            <img loading="lazy"  className="lg:w-[90px] h-[30px]" src={require('../assets/images/upcity.svg')?.default?.src} alt="" />*/}
          </div>
        </div>
        {/* Desktop */}
        <div className="flex-row flex-wrap lg:flex hidden ">
          {
            testimonials.map((testimonial,index) => {
              return <div key={index} className="lg:w-[32%] p-[30px]  rounded-[10px] mb-[20px] mr-[2%] border-custom z-50 [&:nth-child(3n)]:mr-0 relative">
                <p className="text-[#A6A6A6] font-[600] text-[13px] relative"> {testimonial.personName}</p>
                <p className="text-[#A6A6A6] font-[600] text-[13px] relative"> {testimonial.companyName}</p>
                <p className="text-[#fff] font-[400] text-[16px] relative mt-[18px]"> {testimonial.paragraph} </p>
                {
                  testimonial?.logo[0] == 'Google' && 
                  <span className="absolute top-[30px] right-[30px] z-50"> 
                      <Image
                        src={require('../assets/images/google-icon.svg')}
                        width={0}
                        height={0}
                        style={{width: '30px',height: '30px'}} // optional
                        className={'rounded-t-[10px]'}
                        alt="Picture of the author"
                      />
                    {/*<img loading="lazy" src={require('../assets/images/google-icon.svg')?.default?.src} alt="" /> */}
                  </span>               
               }
               {
                  testimonial?.logo[0] == 'Clutch' &&
                  <span className="absolute top-[30px] right-[30px] z-50"> 
                      <Image
                        src={require('../assets/images/clutch-logo.svg')}
                        width={0}
                        height={0}
                        style={{width: '64px',height: '19px'}} // optional
                        className={'rounded-t-[10px]'}
                        alt="Picture of the author"
                      />
                    {/*<img loading="lazy" src={require('../assets/images/clutch-logo.svg')?.default?.src}  alt="" />  */}
                  </span>
               }
               {
                  testimonial?.logo[0] == 'UpCity' &&
                  <span className="absolute top-[30px] right-[30px] z-50"> 
                      <Image
                        src={require('../assets/images/upcity-logo.svg')}
                        width={0}
                        height={0}
                        style={{width: '64px',height: '19px'}} // optional
                        className={'rounded-t-[10px]'}
                        alt="Picture of the author"
                      />
                   {/*<img loading="lazy" src={require('../assets/images/upcity-logo.svg')?.default?.src}  alt="" /> */}
                  </span>

               }
                </div>
            })
          }
        </div>
        {/* mobile */}
        <TestimonialResponsive testimonials={testimonials} />
      </div>
      <Image
        src={require('../assets/images/hexagon-7.svg')}
        width={0}
        height={0}
        style={{width: '368px',height: 'auto'}} // optional
        className={'lg:block hidden absolute z-10 bottom-[-300px] right-0'}
        alt="Picture of the author"
      />
      {/*<img decoding="async" class="lg:block hidden absolute z-10 bottom-[-300px] right-0" src="https://new.alkali.cloud/wp-content/themes/alkali-theme/dist/assets/images/hexagon-7.svg" alt=""></img>*/}
    </section>
  );
}

AcfTestimonials.fragments = {
  key: `AcfTestimonialsBlockFragment`,
  entry: gql`
    fragment AcfTestimonialsBlockFragment on AcfTestimonials {
      testimonialBlock {
        title
        testimonial {
          personName
          paragraph
          logo
          companyName
        }
      }
    }
  `,
};