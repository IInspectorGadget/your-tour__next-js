import cx from "classnames";

import { memo } from "react";

import s from "./SocialLink.module.scss";

const SocialLink = ({ className, classLink, name, iconUrl, link }) => {
  return (
    <li className={cx(className, s.root)}>
      {iconUrl && <img src={iconUrl} alt={name} className={s.icon} />}
      <a href={link} className={cx(classLink, s.link)}>
        {name}
      </a>
    </li>
  );
};

export default memo(SocialLink);
