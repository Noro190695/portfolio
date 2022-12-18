'use client';

import style from './header.module.scss';
import Logo from '../../images/svg/Logo.svg';
import class_name from 'classnames';
import { useContext, useState } from 'react';
import { apiUrl } from '../../api/api';
import { DataContext } from '../../../app/layout';
import { IData } from '../../interfaces/interfaces';
import Image from 'next/image';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuClassName = class_name({
        [style.menu]: true,
        [style['menu-open']]: isOpen,
    });
    const burgerClassName = class_name({
        [style.burger]: true,
        [style['burger-active']]: isOpen,
    });

    const data: IData = useContext(DataContext);

    return (
        <header className={style.header}>
            <div className={style.logo}>
                <img src={Logo.src} alt='logotype' />
                <span>Norayr</span>
            </div>
            <nav className={menuClassName}>
                <ul className={style.items}>
                    <li className={style.item}>
                        <a href='#home' className={style.link}>
                            <span>#</span>
                            home
                        </a>
                    </li>
                    <li className={style.item}>
                        <a href='#works' className={style.link}>
                            <span>#</span>
                            works
                        </a>
                    </li>
                    <li className={style.item}>
                        <a href='#about-me' className={style.link}>
                            <span>#</span>
                            about-me
                        </a>
                    </li>
                    {/* <li className={style.item}>
            <a href="" className={style.link}>
              <span>#</span>
              contacts
            </a>
          </li> */}
                </ul>
                <ul className={style['header-media']}>
                    {data.social
                        ? data.social.map((item) => {
                              return (
                                  <li
                                      key={item.id + Math.random().toString()}
                                      className={style['header-media-item']}
                                  >
                                      <a
                                          href={item.url}
                                          className={style['header-media-link']}
                                          target='_blank'
                                          rel="noreferrer"
                                      >
                                          <Image
                                              width={32}
                                              height={32}
                                              src={apiUrl + item.icon}
                                              alt={item.url}
                                          />
                                      </a>
                                  </li>
                              );
                          })
                        : null}
                </ul>
            </nav>
            <div
                className={burgerClassName}
                onClick={() => setIsOpen((is_open) => !is_open)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    );
};
