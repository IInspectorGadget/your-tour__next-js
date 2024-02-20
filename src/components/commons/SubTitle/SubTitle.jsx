import cx from 'classnames';

import s from './SubTitle.module.scss';

const SubTitle = ({className, children}) => {
    return <p className={cx(s.subtitle, className)}>{children}</p>;
};

export default SubTitle;