import cx from 'classnames';

import s from './Picture.module.scss';


const Picture = ({className, url, isLarge, alt}) => {
  return (
    <div className={cx(className, s.root, {[s.large]: isLarge, [s.small]: !isLarge})}>
      <img src={url} alt={alt} className={s.img}/>
    </div>
  )
};

export default Picture;