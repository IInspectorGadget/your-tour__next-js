import cx from 'classnames';

import s from './Button.module.scss';

const Button = ({className, value, type}) => {
    return <input value={value} type={type} className={cx(className, s.root)}/>
}

export default Button;