import '../src/styles/globals.scss';
import { Banner } from '../src/components/banner/Banner';
import { Quotes } from '../src/components/quotes/Quotes';
import { Title } from '../src/components/title/Title';
import { Projects } from '../src/components/projects/Projects'
import { Skills } from '../src/components/skills/Skills';
import { About } from '../src/components/about/About';
import { Contact } from '../src/components/contact/Contact';
import {data} from '../src/data';

export default function Home() {
  return (
    <div className='content'>
      <div className='block'>
        <Banner />
      </div>
      <div className='block'>
        <Quotes />
      </div>
      <div className='block'>
        <Title title='projects'/>
        <Projects projects={data}/>
      </div>
      <div className='block'>
        <Title title='skills'/>
        <Skills />
      </div>
      <div className='block'>
        <Title title='about-me'/>
        <About />
      </div>
      <div className='block'>
        <Title title='contact'/>
        <Contact />
      </div>
    </div>
  )
}
