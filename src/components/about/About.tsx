import style from './about.module.scss';
import Image from 'next/image';
import class_name from 'classnames';
import person from '../../images/person-2.png';
export const About = () => {
    return (
        <section className={class_name(style.about)}>
            <div className={class_name(style.info)}>
                <div className={class_name(style.desc)}>
                    <p>Hello, i’m Norayr!</p>
                    <p>
                        Dedicated and efficient Full-Stack Developer with 6+
                        years experience, developed web applications, websites,
                        e-commerce websites and other staff simultaneously
                        analyzing and processing data for different clients.
                    </p>
                    <p>
                        Ensured applications security and ability to interact
                        with multiple APIs and databases. Designed and created
                        apps, softwares and websites utilizing a range of
                        technologies, including Python, PHP, React.js,
                        Typescript,Python, Django, Shopify etc.
                    </p>
                    <p>
                        Worked with the development team including project and
                        product manager, developers, and Quality Assurance
                        testers in order to figure out problems, testing
                        methods, and best practices.
                    </p>
                </div>
                {/* <button className='btn'>Read more {'->'}</button> */}
            </div>
            <div className={class_name(style.img)}>
                <Image
                    src={person.src}
                    width={person.width}
                    height={person.height}
                    alt='person'
                />
            </div>
        </section>
    );
};
