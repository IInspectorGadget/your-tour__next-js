import cx from 'classnames';

import s from './FormItem.module.scss';

const FormItem = ({children, title, fullWidth}) => {
    return (
        <div className={fullWidth? cx(s.item, s.item_full): s.item}>
            {title ? <span className={s.label}>{title}</span> : ""}
            {children}
        </div>
    )
}
export default FormItem;