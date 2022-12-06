'use client'
import Image from 'next/image';
import style from './projects.module.scss';
import class_name from 'classnames';
import { IProjects } from '../../interfaces/Projects';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
import 'swiper/css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons'


type Props = {
  projects: IProjects[];
};

export const Projects = ({ projects }: Props) => {

  return (
    <section className={class_name(style.projects)}>
      <button className={class_name('prev', style.navigation)}><FontAwesomeIcon icon={faChevronLeft} /></button>
    <div className={class_name(style.items)}>
      
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        
        slidesPerView={1}
        navigation={{
          nextEl: '.prev',
          prevEl:  '.next',
        }}
        pagination={{ clickable: true, el: '.pagination'}}
        autoplay={{delay: 3000}}
        loop={true}
        breakpoints= {{
          1240:{
            slidesPerView: 3,
            spaceBetween: 50
          },
          1024:{
            slidesPerView: 2,
            spaceBetween: 30
          }
        }}
       
      >
        {projects.map((project, index) => {
          return (
            <SwiperSlide key={(index + Math.random()).toString()}>
              <div className={class_name(style.item)}>
                <Image src={project.img} alt={project.title} />
                <p className={class_name(style.stacks)}>
                  {project.stacks.map((stack, i) => {
                    return (
                      <span key={(i + Math.random()).toString()}>{stack}</span>
                    );
                  })}
                </p>
                <div className={class_name(style.content)}>
                  <h2 className={class_name(style.title)}>{project.title}</h2>
                  {project.shortDesc ? (
                    <p className={class_name(style['short-desc'])}>
                      {project.shortDesc}
                    </p>
                  ) : null}
                  {project.button.map((btn, i) => {
                    return (
                      <a
                        href={btn.url}
                        key={(i + Math.random()).toString()}
                        className={class_name(style.button, 'btn')}
                      >
                        {btn.text}
                      </a>
                    );
                  })}
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
