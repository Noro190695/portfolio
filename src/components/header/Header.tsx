'use client';

import style from './header.module.scss';
import Logo from '../../images/svg/Logo.svg';
import class_name from 'classnames';
import { useEffect, useState } from 'react';
import { apiUrl } from '../../api/api';
import { IData } from '../../interfaces/interfaces';
import Image from 'next/image';
import { instance, defaultData } from '../../api/api';

async function getData() {
  const data = await instance.get('/api/v1');
  return data;
}

const validateEmail = (email: string) => {
  const mail =  String(email)
  .toLowerCase()
  .match(
    /\S+@\S+\.\S+/
  )
  if (mail) {
    return mail[0].split('//')[1]
  }
  return null;
};


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
    const [data, setData] = useState<IData>(defaultData);

    useEffect(() => {
        getData().then((d) => {
            setData(d.data);
        });
    }, []);

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
                                          href={validateEmail(item.url) !== null ? `mailto:${validateEmail(item.url)}`: item.url}
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
