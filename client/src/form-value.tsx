import { FC, ReactNode } from 'react';

export interface FormValueProps {
    id: string;
    label: string;
    children: ReactNode;
}

export const FormValue: FC<FormValueProps> = props => <div>
    <label htmlFor={props.id}>{props.label}</label>
    {props.children}
</div>
