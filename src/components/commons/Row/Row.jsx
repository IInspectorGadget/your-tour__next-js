import { memo } from 'react';
import cx from 'classnames';

import Picture from '../Picture';

import s from './Row.module.scss';

const Row = ({ pictures,isSmallGap, isSmallImages}) => {
    return (
    <div className={cx(s.listLine, {[s.smallGap]: isSmallGap})}>
        {pictures.map(el => <Picture key={el.id} url={el.url} isLarge={!isSmallImages}/>)}
    </div>
    )
};

export default memo(Row);