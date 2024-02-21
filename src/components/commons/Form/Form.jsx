import {memo, useCallback, useMemo} from 'react'

import cx from 'classnames';

import Input from '../Input';
import FormItem from '../FormItem';
import TextArea from '../TextArea';
import Select from '../Select';
import License from '../License';
import Adult from '../Adult';
import Button from '../Button';

import s from './Form.module.scss';

const options = [
    {
        value: 1,
        text: "Куда хотите ехать",
        disabled: true, 
        selected: true,
    },
    {
        value: 2,
        text: "Путешествие в горы",
        disabled: false, 
        selected: false,
    },
    {
        value: 3,
        text: "Путешествие в горы",
        disabled: false, 
        selected: false,
    },

]

const Form = ({className}) => {

    const numberReg = useMemo(() => new RegExp(/\D/g), []);

    const getInputNumbersValue = useCallback((input) => {
        return input.value.replace(numberReg, '');
    },[])
    
    const updateText = useCallback((inputNumbersValue) =>{
        let formattedInputValue = "";
        if (inputNumbersValue[0] === "9" || inputNumbersValue[0] === "7") {

            if (inputNumbersValue[0] === "9") inputNumbersValue = "7" + inputNumbersValue;
            
            formattedInputValue =  "+ 7 ";

            const cases = [
                { length: 1, start: 1, end: 4, separator: '(' },
                { length: 5, start: 4, end: 7, separator: ') ' },
                { length: 8, start: 7, end: 9, separator: '-' },
                { length: 10, start: 9, end: 11, separator: '-' }
            ];
    
            for (const { length, start, end, separator } of cases) {
                if (inputNumbersValue.length >= length) {
                    formattedInputValue += separator + inputNumbersValue.substring(start, end);
                }
            }

        } 
        return formattedInputValue
    },[])

    const onPhoneInput = (e) => {
        const input = e.target
        const inputNumbersValue = getInputNumbersValue(input)
        const selectionStart = input.selectionStart
        
        if (!inputNumbersValue)  return input.value = "";

        // Change characters in the middle of text
        if (input.value.length != selectionStart) {
            //We make changes if the input is correct and change the cursor location
            if (e.data && numberReg.test(e.data)) {
                input.value = updateText(inputNumbersValue);
                input.selectionEnd= selectionStart - 1
                input.selectionStart= selectionStart -1
            }
            input.value = updateText(inputNumbersValue);
            return 
        }
        
        input.value = updateText(inputNumbersValue, input);

    }
    
    const onPhoneKeyDown =  (e) => {
        // Remove the last character
        if (/[0-9]/.test(e.key)) return
        const inputValue = e.target.value.replace(numberReg, '');
        if (e.keyCode == 8 && inputValue.length == 1) {
            e.target.value = "";
        }
    }

    const phoneHandlers = {
        "onKeyDown": onPhoneKeyDown,
        "onChange": onPhoneInput,
    }

        
    return (
        <form className={cx(className,s.root)}>
            <FormItem title="Имя">
                <Input id={"name"} isRequired={true} className={s.item} type="text" placeholder="Введите Ваше имя" name="name"></Input>
            </FormItem>

            <FormItem title="Направление">
                <Select isRequired={true} id="direction" options={options} defaultValue={0}></Select>
            </FormItem>

            <FormItem title="Email">
                <Input id="email" isRequired={true} type="email" placeholder="example@mail.com" name="email"></Input>
            </FormItem>

            <FormItem title="Телефон">
                <Input id="tel" isRequired={true} handlers={phoneHandlers} type="tel" placeholder="+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _" name="tel" maxLength={19}></Input>
            </FormItem>

            <FormItem title="Дата от">
                <Input id="date-start" isRequired={true} type="date" name="date-start" max="9999-12-31"></Input>
            </FormItem>

            <FormItem title="Дата до">
                <Input id="date-end" isRequired={true} type="date" name="date-end" max="9999-12-31"></Input>
            </FormItem>

            <FormItem title="Комментарий" isFullWidth={true}>
                <TextArea id={"comment"}></TextArea>
            </FormItem>

            <FormItem title="Вам есть 18 лет?" isFullWidth={true}>
                <Adult isRequired={true}></Adult>
            </FormItem>
        

            <FormItem isFullWidth={true}>
                <License isRequired={true}></License>
            </FormItem>

            <FormItem isFullWidth={true}>
                <div className={s.buttons}>
                    <Button type="submit" value="Найти тур"></Button>
                    <Button type="reset" value="Сбросить"></Button>
                </div>
            </FormItem>
        </form>
    );
};

export default  memo(Form);