import { IImage } from './interfaces';

export interface IButton {
    text: string,
    url: string
}

export interface IProjects {
    img: IImage,
    stacks: string[],
    title: string
    shortDesc?: string,
    button: IButton[]
}
