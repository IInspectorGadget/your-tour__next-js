import { useCallback, useEffect, useMemo, useRef, useState } from "react"

const usePhone = (props) => {

    const [value, setValue] = useState("")

    const numberReg = useMemo(() => new RegExp(/\D/g), []);
    const input = useRef(null);

    const getInputNumbersValue = useCallback((value) => {
        return value.replace(numberReg, '');
    },[])
    
    const updateMobileText = useCallback((inputNumbersValue) =>{
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
        const newValue = e.target.value;
        const inputNumbersValue = getInputNumbersValue(newValue)
        const selectionStart = e.target.selectionStart

        if (!inputNumbersValue)  return setValue("");

        // Change characters in the middle of text
        if (newValue.length != selectionStart) {
            //We make changes if the input is correct and change the cursor location
            if (e.data && numberReg.test(e.data)) {
                setValue(updateMobileText(inputNumbersValue));
                input.selectionEnd= selectionStart - 1
                input.selectionStart= selectionStart -1
            }
            setValue(updateMobileText(inputNumbersValue));
            return 
        }
        
        setValue(updateMobileText(inputNumbersValue, newValue));

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


    return [input, value, phoneHandlers]

}


export default usePhone