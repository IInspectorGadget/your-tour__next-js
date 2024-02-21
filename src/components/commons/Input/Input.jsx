import cx from 'classnames';

import s from './Input.module.scss';

const Input = ({className, type, placeholder, name, id, max, maxLength, handlers, isRequired }) => {

    return (
        <input
            {...handlers}
            required = {isRequired}
            max = {max} 
            maxLength={maxLength} 
            autoComplete="on" 
            id={id} 
            name={name} 
            type={type} 
            className={cx(className, s.field, {[s.date]: type==="date"})} 
            placeholder={placeholder}
        />
    )
    
};

export default Input;