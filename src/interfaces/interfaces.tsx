export interface IImage {
    src: string
    alt: string
    width: number
    height: number
}

export interface ISocial {
    id: number
    icon: string
    url: string
}

export interface ISkills {
    id: number
    name: string
}
export interface ISkillsType {
    id: number
    type: string
}
export interface ISkills {
    id: number
    name: string
}

export interface ISkillsWithType {
    id: number
    name: string
    type: ISkillsType
}

export interface IProjects {
    id: number
    name: string
    photo: string
    skills: ISkills[]
    short_desc: string
    url: string
    button: string
}

export interface IData {
    projects: []
    skills: []
    skills_type: []
    social: ISocial[]
}