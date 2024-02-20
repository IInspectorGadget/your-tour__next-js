import cx from 'classnames';

import s from './Radio.module.scss';

const Radio = ({className, value, id, name, label}) => {
    return (
        <>
            <div className={s.radioButton}>
                <input value={value} id={id} name={name} type="radio" className={s.radio}></input>
            </div>
            <label htmlFor={id} className={s.radioLabel}>{label}</label>
        </>
    )
};

export default Radio;