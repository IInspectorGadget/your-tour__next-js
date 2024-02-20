import cx from 'classnames';

import s from './License.module.scss';

const License = () => {
    return (
        <div className={s.license}>
            <div className={s.checkboxWrapper}>
                <input required id="license" name="license" type="checkbox" className={s.checkbox}></input>
            </div>
            <label htmlFor="license" className={s.checkboxLabel}>Нажимая кнопку, я принимаю условия <a href="#" className={s.licenseLink}>Лицензионного договора</a></label>
        </div>
    )
};

export default License;