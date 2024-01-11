import {useState} from 'react';
import classNames from 'classnames/bind';
import {NavigationMenu} from '../../components';
import styles from '../Header/Header.module.scss';


let cx = classNames.bind(styles);

export default function MenuResponsive({menuItems,active}) {

  const [isNavShown,setIsNavShown] = useState(false);

  return (
    <div id="menu-mobile" className={`bg-background absolute z-[60] m-[20px] w-[calc(100%-40px)]  menu-mobile-container block lg:hidden border-[1px] border-[#ffffff38] rounded-[20px] ${active ? "active" : ""}`} >
      <div className="div px-[40px] pb-[70px] pt-[120px]">
        <NavigationMenu
          className={"mobile_menu flex justify-start border-y-[1px] border-[#ffffff38] py-[30px] " + cx(['primary-navigation',isNavShown ? 'show' : undefined])}
          menuItems={menuItems}
        />

        <div className=" flex pt-[50px]">
          <a href="#" className="bg-primary text-[white] text-[16px] font-[500] rounded-[10px]  px-[25px] py-[14px]">Schedule Discovery Call</a>
        </div>

      </div>
    </div>
  );
}
