import cx from 'classnames';
import Radio from '../Radio';
import s from './Adult.module.scss';

const Adult = () => {
    return (
        <div className={s.adult} required>
            <div className={s.adultItem}>
                <Radio value="yes" id="yes" name="adult" label="Да"></Radio>
            </div>
            <div className={s.adultItem}>
                <Radio value="no" id="no" name="adult" label="Нет"></Radio>
            </div>
        </div>
    )
};

export default Adult;