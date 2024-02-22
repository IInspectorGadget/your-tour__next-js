import {memo, useCallback, useMemo} from 'react'
import usePhone from '@/hooks/usePhone';

import cx from 'classnames';

import Input from '../Input';
import FormItem from '../FormItem';
import TextArea from '../TextArea';
import Select from '../Select';
import License from '../License';
import Adult from '../Adult';
import Button from '../Button';

import s from './Form.module.scss';
import {options} from '@/data';


const Form = ({className}) => {

    const [input, phone, phoneHandlers] = usePhone();
   
    return (
        <form className={cx(className,s.root)}>
            <FormItem title="Имя">
                <Input id={"name"} isRequired={true} className={s.item} type="text" placeholder="Введите Ваше имя" name="name"/>
            </FormItem>

            <FormItem title="Направление">
                <Select defaultValue={1} isRequired={true} id="direction" options={options}/>
            </FormItem>

            <FormItem title="Email">
                <Input id="email" isRequired={true} type="email" placeholder="example@mail.com" name="email"/>
            </FormItem>

            <FormItem title="Телефон">
                <Input ref={input} value={phone} id="tel" isRequired={true} handlers={phoneHandlers} type="tel" placeholder="+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _" name="tel" maxLength={19}/>
            </FormItem>

            <FormItem title="Дата от">
                <Input id="date-start" isRequired={true} type="date" name="date-start" max="9999-12-31"/>
            </FormItem>

            <FormItem title="Дата до">
                <Input id="date-end" isRequired={true} type="date" name="date-end" max="9999-12-31"/>
            </FormItem>

            <FormItem title="Комментарий" isFullWidth={true}>
                <TextArea id={"comment"}/>
            </FormItem>

            <FormItem title="Вам есть 18 лет?" isFullWidth={true}>
                <Adult isRequired={true}/>
            </FormItem>
        

            <FormItem isFullWidth={true}>
                <License isRequired={true}/>
            </FormItem>

            <FormItem isFullWidth={true}>
                <div className={s.buttons}>
                    <Button type="submit" value="Найти тур"/>
                    <Button type="reset" value="Сбросить"/>
                </div>
            </FormItem>
        </form>
    );
};

export default  memo(Form);