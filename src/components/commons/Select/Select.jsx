import cx from 'classnames';

import s from './Select.module.scss';

const Select = ({className, options, id, isRequired}) => {
    return (
    <div className={cx(className,s.root)}>
        <select required = {isRequired} id={id} name={id} className={cx(s.field, s.direction)}>
            {options.map((option, idx) => (
                <option 
                key={idx}
                className={s.option} 
                value={option.value} 
                disabled = {option.disabled? true: false} 
                defaultValue = {option.selected? true: false}
                >{option.text}</option>
            ))}
        </select>
    </div>
    )
};

export default Select;