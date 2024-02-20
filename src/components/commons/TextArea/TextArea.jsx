import cx from 'classnames';

import s from './TextArea.module.scss';

const TextArea = ({className, id}) => {
    return <textarea id={id} name={id}  className={cx(s.field, s.textarea)}></textarea>
};

export default TextArea;