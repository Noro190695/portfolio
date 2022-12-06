import {IProjects} from './interfaces/Projects';
import img1 from './images/project-1.png';
import img2 from './images/project-2.png';
import img3 from './images/project-3.png';
import img4 from './images/project-4.png';
import img5 from './images/project-5.png';

export const data: IProjects[] = [
    {
        img: {
            src: img1.src,
            alt: 'ChertNodes',
            width: img1.width, 
            height: img1.height
        },
        stacks: ['HTML', 'SCSS', 'PYTHON', 'Flask'],
        title: 'ChertNodes',
        shortDesc: 'Minecraft servers hosting ',
        button: [
            {
                text: 'Live',
                url: 'https://google.com'
            }
        ]
    },
    {
        img: {
            src: img2.src,
            alt: 'Kahoot Answers Viewe',
            width: img2.width, 
            height: img2.height
        },
        stacks: ['CSS', 'Express', 'Node.js'],
        title: 'Kahoot Answers Viewer',
        // shortDesc: 'Get answers to your kahoot quiz',
        button: [
            {
                text: 'Live ~>',
                url: 'https://google.com'
            }
        ]
    },
    {
        img: {
            src: img3.src,
            alt: 'ProtectX',
            width: img3.width, 
            height: img3.height
        },
        stacks: ['REACT', 'Exporess', 'Swiper.js', 'Pytho'],
        title: 'ProtectX',
        shortDesc: 'Discord anti-crash bot',
        button: [
            {
                text: 'Live',
                url: 'https://google.com'
            }
        ]
    },
    {
        img: {
            src: img4.src,
            alt: 'Kotik Bot',
            width: img4.width, 
            height: img4.height
        },
        stacks: ['HTML', 'SCSS', 'JS'],
        title: 'Kotik Bot',
        shortDesc: 'Multi-functional discord bot',
        button: [
            {
                text: 'Live',
                url: 'https://google.com'
            }
        ]
    },
    {
        img: {
            src: img5.src,
            alt: 'Portfolio',
            width: img5.width, 
            height: img5.height
        },
        stacks: ['Vue', 'TS', 'Less'],
        title: 'Portfolio',
        button: [
            {
                text: 'Github <~>',
                url: 'https://google.com'
            }
        ]
    }
]