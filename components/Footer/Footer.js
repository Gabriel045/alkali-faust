import classNames from 'classnames/bind';
import {Container,NavigationMenu} from '../../components';
import styles from './Footer.module.scss';
import Link from 'next/link';


let cx = classNames.bind(styles);

export default function Footer({footerTexts:{title, paragraph} , socialMedia:{facebook,twitter,linkedin,instagram},
  footerMenu,footerMenu2,footerMenu3,footerMenu4}) {
 
  const facebookImage   = require('../../assets/images/facebook.png')?.default?.src
  const instagramImage  = require('../../assets/images/instagram.png')?.default?.src
  const linkedinImage = require('../../assets/images/linkedin.png')?.default?.src
  const twitterImage    = require('../../assets/images/twitter.png')?.default?.src

  return (
    <footer className={cx('component')}>
      <Container>
        <section className=" bg-background relative">
          <div className="w-full py-[30px] px-[40px] lg:px-[100px] max-w-[1440px] tablet:px-[150px]">
            <img loading="lazy"  className="lg:block hidden" src={require('../../assets/images/alkali-line.svg')?.default?.src} alt="" />
            <img loading="lazy"  className="lg:hidden block w-full" src={require('../../assets/images/alkali-line-resp.svg')?.default?.src} alt="" />
                <div className="mt-[100px] flex flex-wrap lg:flex-nowrap lg:gap-[100px]">
                  <div className="mb-[90px] lg:mb-0 w-full lg:w-[30%] text-center lg:text-start">
                <h4 className="text-[#fff] text-[22px] font-[600] ">{title}</h4>
                <p className="text-[#ffffffad] my-[35px] text-[14px] font-[400]lg:w-[80%]">{paragraph}</p>
                    <div className="flex gap-[40px] justify-center lg:justify-start">
                      <Link href={facebook}>
                        <a className={cx('title')} target="_blank"><img  loading="lazy" className="w-[20px] h-[20px]" src={facebookImage} alt="" /></a>
                      </Link>
                      <Link href={instagram}>
                       <a className={cx('title')} target="_blank" ><img  loading="lazy"  className="w-[20px] h-[20px]" src={instagramImage} alt="" /></a>
                      </Link>
                      <Link href={linkedin}>
                       <a className={cx('title')} target="_blank" ><img  loading="lazy" className="w-[20px] h-[20px]" src={linkedinImage} alt="" /></a>
                      </Link>
                      <Link href={twitter}>
                        <a className={cx('title')} target="_blank" ><img  loading="lazy" className="w-[20px] h-[20px]" src={twitterImage} alt="" /></a>
                      </Link>
                    </div>
                  </div>
                  <div className="w-full lg:w-[70%] flex lg:gap-[30px] lg:justify-end flex-wrap lg:flex-nowrap">
                    <div className="w-1/2 md:w-[25%] lg:text-start">
                      <p className="text-[14px] font-[700] text-[#8E8E8E] mb-[36px]">How we help</p>
                        <NavigationMenu
                          className={"footer-menu"}
                           menuItems={footerMenu}
                        />
                    </div>
                    <div className="w-1/2 md:w-[25%] lg:text-start">
                      <p className="text-[14px] font-[700] text-[#8E8E8E] mb-[36px]">Who we help</p>
                        <NavigationMenu
                          className={"footer-menu"}
                          menuItems={footerMenu2}
                        />
                    </div>
                    <div className="w-1/2 md:w-[25%] lg:text-start mt-[60px] md:mt-0">
                      <p className="text-[14px] font-[700] text-[#8E8E8E] mb-[36px]">Why apply</p>
                        <NavigationMenu
                          className={"footer-menu"}
                          menuItems={footerMenu3}
                        />
                    </div>
                    <div className="w-1/2 md:w-[25%] lg:text-start mt-[60px] md:mt-0">
                      <p className="text-[14px] font-[700] text-[#8E8E8E] mb-[36px]">Resources</p>
                        <NavigationMenu
                          className={"footer-menu"}
                          menuItems={footerMenu4}
                        />    
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap lg:flex-nowrap  w-full pt-[27px] border-t-[1px] border-[#606060] mt-[50px] lg:mt-[100px]">
                  <div className="w-full lg:w-[50%]">
                    <p className="text-[#A6A6A6] text-center lg:text-start text-[16px] font-[400]">Alkali © 2021 All Rights Reserved.</p>
                  </div>
                  <div className="w-full lg:w-[50%] flex justify-center lg:justify-end gap-[50px] mt-[50px] lg:mt-0">
                    <a className="text-[#A6A6A6] text-[16px] font-[400] cursor-pointer hover:text-primary">Terms</a>
                    <a className="text-[#A6A6A6] text-[16px] font-[400] cursor-pointer hover:text-primary">Privacy Policy</a>
                  </div>
                </div>
              </div>
        </section>
      </Container>
    </footer>
  );
}
