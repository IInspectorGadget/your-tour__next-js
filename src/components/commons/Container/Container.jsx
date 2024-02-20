import cx from "classnames"

import s from "./Container.module.scss"

export default function Container({className, children, isTopOffset}){
    return <div className={isTopOffset? cx(s.container, s.paddingTop, className) : cx(s.container, className)}>{children}</div>
} 
