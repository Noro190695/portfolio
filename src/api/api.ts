import axios from 'axios';
import { IData } from '../interfaces/interfaces'
export const apiUrl: string = 'https://kokhlikyan.work';

export const instance = axios.create({
    baseURL: apiUrl,
});

export const defaultData: IData = {
    projects: [],
    skills: [],
    skills_type: [],
    social: []
}
