import cx from 'classnames';
import { memo } from 'react';

import s from './SubTitle.module.scss';

const SubTitle = ({className, children}) => {
    return <p className={cx(s.root, className)}>{children}</p>;
};

export default memo(SubTitle);