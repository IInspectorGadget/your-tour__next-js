import cx from 'classnames';

import s from './Input.module.scss';

const Input = ({className, type, placeholder, name, max, maxLength }) => {

    return (
        <input 
        max = {max ? max: undefined} 
        maxLength={maxLength? maxLength: undefined} 
        required 
        autoComplete="on" 
        id={name} 
        name={name} 
        type={type} 
        className={type==="date" ? cx(s.field,s.date) : s.field} 
        placeholder={placeholder ? placeholder : undefined}>

        </input>
    )
    
};

export default Input;