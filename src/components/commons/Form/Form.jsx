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

const Form = ({}) => {
    return (
            <form action="#" className={s.fieldset}>
                <FormItem title="Имя">
                    <Input className={s.item} type="text" placeholder="Введите Ваше имя" name="name"></Input>
                </FormItem>

                <FormItem title="Направление">
                    <Select id="direction" options={options} defaultValue={0}></Select>
                </FormItem>

                <FormItem title="Email">
                    <Input type="email" placeholder="example@mail.com" name="email"></Input>
                </FormItem>

                <FormItem title="Телефон">
                    <Input type="tel" placeholder="+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _" name="tel" maxLength={19}></Input>
                </FormItem>

                <FormItem title="Дата от">
                    <Input type="date" name="date-start" max="9999-12-31"></Input>
                </FormItem>

                <FormItem title="Дата до">
                    <Input type="date" name="date-end" max="9999-12-31"></Input>
                </FormItem>

                <FormItem title="Комментарий" fullWidth={true}>
                    <TextArea></TextArea>
                </FormItem>

                <FormItem title="Вам есть 18 лет?" fullWidth={true}>
                    <Adult></Adult>
                </FormItem>
          

                <FormItem fullWidth={true}>
                    <License></License>
                </FormItem>

                <FormItem fullWidth={true}>
                    <div className={s.buttons}>
                        <Button type="submit" value="Найти тур"></Button>
                        <Button type="reset" value="Сбросить"></Button>
                    </div>
                </FormItem>
         
            </form>
    );
};

export default Form;