import cx from 'classnames';

import s from './Title.module.scss';

const Title = ({className, children}) => {
    return <h2 className={cx(s.root, className)}>{children}</h2>;
};

export default Title;