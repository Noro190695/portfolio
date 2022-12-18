'use client';
import '../src/styles/globals.scss';
import { Banner } from '../src/components/banner/Banner';
import { Quotes } from '../src/components/quotes/Quotes';
import { Title } from '../src/components/title/Title';
import { Projects } from '../src/components/projects/Projects';
import { Skills } from '../src/components/skills/Skills';
import { About } from '../src/components/about/About';
import { Contact } from '../src/components/contact/Contact';
import { IData } from '../src/interfaces/interfaces';
import { useEffect, useState } from 'react';
import { defaultData, instance } from '../src/api/api';
async function getData() {
    const data = await instance.get('/api/v1');
    return data;
}


export default function Home() {
    const [data, setData] = useState<IData>(defaultData);

    useEffect(() => {
        getData().then((d) => {
            setData(d.data);
        });
    }, []);
    
    return (
        <div className='content'>
            <div className='block' id='home'>
                <Banner />
            </div>
            <div className='block'>
                <Quotes />
            </div>
            {data.projects ? (
                <div className='block' id='works'>
                    <Title title='projects' />
                    <Projects projects={data.projects} />
                </div>
            ) : null}

            {data.skills && data.skills_type ? (
                <div className='block'>
                    <Title title='skills' />
                    <Skills skills={data.skills} skillsType={data.skills_type} />
                </div>
            ) : null}
            <div className='block' id='about-me'>
                <Title title='about-me' />
                <About />
            </div>
            {/* <div className='block'>
        <Title title='contact'/>
        <Contact />
      </div> */}
        </div>
    );
}
