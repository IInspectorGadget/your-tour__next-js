import cx from 'classnames';
import Radio from '../Radio';
import s from './Adult.module.scss';

const Adult = ({className, isRequired}) => {
    return (
        <div className={cx(className, s.root)} required={isRequired}>
            <div className={s.item}>
                <Radio value="yes" id="yes" name="adult" label="Да"></Radio>
            </div>
            <div className={s.item}>
                <Radio value="no" id="no" name="adult" label="Нет"></Radio>
            </div>
        </div>
    )
};

export default Adult;