import cx from 'classnames';

import s from './FormItem.module.scss';

const FormItem = ({children, title, isFullWidth}) => {
    return (
        <div className={cx(s.root, {[s.root_full]: isFullWidth})}>
            {title ? <span className={s.label}>{title}</span> : ""}
            {children}
        </div>
    )
}
export default FormItem;