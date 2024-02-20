import cx from 'classnames';

import Row from '../Row';
import s from './Gallery.module.scss';

const Gallery = ({pictures}) => {
    return (
        <div className={s.list}>
            <Row isSmallGap={false} pictures={pictures.slice(0,4)} isSmallImages={false}/>
            <Row isSmallGap={true} pictures={pictures.slice(4,9)} isSmallImages={true}/>
            <Row isSmallGap={true} pictures={pictures.slice(9)} isSmallImages={false}/>
        </div>
    )
};

export default Gallery;