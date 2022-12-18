'use client';
import Image from 'next/image';
import style from './projects.module.scss';
import class_name from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
import 'swiper/css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronRight,
    faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import { IProjects } from '../../interfaces/interfaces';
import { apiUrl } from '../../api/api';

interface IProps {
    projects: IProjects[];
}

export const Projects = ({ projects }: IProps) => {
    return (
        <section className={class_name(style.projects)}>
            <button className={class_name('prev', style.navigation)}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <div className={class_name(style.items)}>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                    slidesPerView={1}
                    navigation={{
                        nextEl: '.prev',
                        prevEl: '.next',
                    }}
                    pagination={{ clickable: true, el: '.pagination' }}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    breakpoints={{
                        1240: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                    }}
                >
                    {projects.map((project) => {
                        return (
                            <SwiperSlide
                                key={(project.id + Math.random()).toString()}
                            >
                                <div className={class_name(style.item)}>
                                    <Image
                                        src={apiUrl + project.photo}
                                        width={330}
                                        height={220}
                                        alt={project.name}
                                    />
                                    <p className={class_name(style.stacks)}>
                                        {project.skills.map((skill) => {
                                            return (
                                                <span
                                                    key={(
                                                        skill.name + skill.id
                                                    ).toString()}
                                                >
                                                    {skill.name}
                                                </span>
                                            );
                                        })}
                                    </p>
                                    <div className={class_name(style.content)}>
                                        <h2 className={class_name(style.title)}>
                                            {project.name}
                                        </h2>
                                        {project.short_desc ? (
                                            <p
                                                className={class_name(
                                                    style['short-desc']
                                                )}
                                            >
                                                {project.short_desc}
                                            </p>
                                        ) : null}
                                        <a
                                            href={project.url}
                                            className={class_name(
                                                style.button,
                                                'btn'
                                            )}
                                            target='_blank'
                                            rel="noreferrer"
                                        >
                                            {project.button}
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
                <div className='swiper-pagination pagination'></div>
            </div>
            <button className={class_name(' next', style.navigation)}>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </section>
    );
};
