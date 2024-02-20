import cx from 'classnames';

import s from './Button.module.scss';

const Button = ({value, type}) => {
    return <input value={value} type={type} className={s.button}></input>
}
export default Button;