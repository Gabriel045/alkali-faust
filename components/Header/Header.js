import {useState} from 'react';
import classNames from 'classnames/bind';
import Link from 'next/link';
import {Container,Logo,MenuResponsive,NavigationMenu,SkipNavigationLink} from '../../components';
import styles from './Header.module.scss';
import {useQuery,gql} from '@apollo/client';
import {setRefreshTimer} from '@faustwp/core/dist/cjs/auth';
import Image from "next/future/image";



let cx = classNames.bind(styles);

export default function Header({
  title = 'Headless by WP Engine',
  description,
  menuItems,
  logoUrl
}) {
  const [isNavShown,setIsNavShown] = useState(false);
  const [active,setActive] = useState(false);
  const [reposition,setReposition] = useState(false);

  const menuResponsive = ()=>{
    if(active){
      setActive(false)
      setReposition(false)
    }else{
      setReposition(true)
      setActive(true)
    }
  }


  return (
    <header className={"overflow-x-clip flex justify-center relative  " + cx('component')}>
        <div className={`${reposition ? "reposition" : ""} container gap-0 transition-all duration-500 ease-out max-w-[1440px] px-[20px]  lg:px-[100px] xl:px-[150px] py-[30px] w-full items-center absolute z-[100]  flex-nowrap ` + cx('navbar')}>
        <div key="logo" className='w-1/2 lg:w-[16%]'>
          <Link href="/">
            <a className={cx('title')}> 
              <Image
                src={logoUrl}
                width={150}
                height={32}
                style={{}} // optional
                alt="Picture of the author"
              />
              {/*<img className="w-[150px]" src={logoUrl} /> */}
            </a>
          </Link>
        </div>
          <NavigationMenu
          className={"desktop_menu hidden lg:flex w-[59%] justify-center " + cx(['primary-navigation',isNavShown ? 'show' : undefined])}
            menuItems={menuItems}
          />
        <div className="w-1/2 lg:w-[25%] flex justify-end lg:flex">
            <span className="inline-block cursor-pointer menu-mobile" onClick={menuResponsive}>
            <div className={` block lg:hidden ${active ? "open" : ""}`} id="nav-icon4">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </span>
          <a href="https://google.com" target="_blank" className="hidden lg:inline-block bg-background text-[white]  lg:text-[14px] tablet:text-[16px] font-[500] rounded-[10px]  lg:px-[20px] tablet:px-[26px] py-[14px] transform hover:translate-y-[2px] border-button">Schedule Discovery Call</a>
          </div>
        </div>
        <MenuResponsive 
          menuItems={menuItems}
          active={active}
        />

    </header>
  );
}
