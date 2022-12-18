import style from './skills.module.scss';
import class_name from 'classnames';
import { Dots } from '../ui_kit/Dots';
import { Scoures, SympleScoure } from '../ui_kit/Scoures';
import { ISkillsWithType, ISkillsType } from '../../interfaces/interfaces';

interface IProps {
    skills: ISkillsWithType[];
    skillsType: ISkillsType[];
}

export const Skills = ({ skills, skillsType }: IProps) => {
    return (
        <section className={class_name(style.skills)}>
            <div className={class_name(style.bg)}>
                <Dots x={5} y={5} />
            </div>
            <div className={class_name(style.bg)}>
                <Dots x={5} y={5} />
            </div>
            <div className={class_name(style.bg)}>
                <SympleScoure size={86} />
            </div>
            <div className={class_name(style.bg)}>
                <SympleScoure size={52} />
            </div>
            <div className={class_name(style.bg)}>
                <Scoures size={113} padding={28} />
            </div>
            {skillsType.map((st) => {
                return (
                    <div
                        className={class_name(style['skills-block'])}
                        key={st.type + st.id}
                    >
                        <div
                            className={class_name(
                                style['languages'],
                                style['skills-item']
                            )}
                        >
                            <h3
                                className={class_name(
                                    style['skills-item__title']
                                )}
                            >
                                {st.type}
                            </h3>
                            <div
                                className={class_name(
                                    style['skills-item__content']
                                )}
                            >
                                {skills.map((s) => {
                                    if (s.type.id === st.id) {
                                      return (
                                        <span key={s.name + s.id}>{s.name}</span>
                                      )
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                );
            })}
        </section>
    );
};
