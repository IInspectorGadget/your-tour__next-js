import cx from 'classnames';

import s from './License.module.scss';

const License = ({className ,isRequired}) => {
    return (
        <div className={cx(className, s.root)}>
            <div className={s.wrapper}>
                <input required={isRequired} id="license" name="license" type="checkbox" className={s.checkbox}/>
            </div>
            <label htmlFor="license" className={s.label}>Нажимая кнопку, я принимаю условия <a href="#" className={s.link}>Лицензионного договора</a></label>
        </div>
    )
};

export default License;