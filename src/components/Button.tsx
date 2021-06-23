import {ButtonHTMLAttributes} from 'react'

import '../styles/Button.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps){
    //let counter = 0;
    return (
        <button className="button" {...props}/>
    )
}