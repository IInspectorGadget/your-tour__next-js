import cx from 'classnames';

import s from './Picture.module.scss';


const Picture = ({id, isMiddle}) => {
  return (
    <div className="travel-photo__item travel-photo__item_1 travel-photo__item_width_25">
      <img src="@/assets/images/travel/travel_photo-1.jpg" alt="travel_photo-1" className="travel-photo__img"></img>
    </div>
  )
};

export default Picture;