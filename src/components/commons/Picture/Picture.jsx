import cx from 'classnames';

import s from './Picture.module.scss';


const Picture = ({url, isLarge, alt}) => {
  return (
    <div className={cx(s.item, {[s.large]: isLarge, [s.small]: !isLarge})}>
      <img src={url} alt={alt} className={s.img}/>
    </div>
  )
};

export default Picture;