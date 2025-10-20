export type UseType = 'forTeach' | 'forLearn' | 'forEvaluate';

export interface Agent {
    id: string;
    name: string;
    intro: string;
    coverUrl: string;
    type: UseType;
    link: string;
    tag: string[];
}