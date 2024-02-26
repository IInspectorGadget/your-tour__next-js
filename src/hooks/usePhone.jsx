import { useCallback, useRef, useState } from "react";

const numberReg = new RegExp(/\D/g);

const usePhone = () => {
  const [value, setValue] = useState("");

  const input = useRef(null);

  const getInputNumbersValue = useCallback((value) => {
    return value.replace(numberReg, "");
  }, []);

  const updateMobileText = useCallback((inputNumbersValue) => {
    let formattedInputValue = "";
    if (inputNumbersValue[0] === "9" || inputNumbersValue[0] === "7") {
      if (inputNumbersValue[0] === "9") {
        inputNumbersValue = "7" + inputNumbersValue;
      }

      formattedInputValue = "+ 7 ";

      const cases = [
        { length: 1, start: 1, end: 4, separator: "(" },
        { length: 5, start: 4, end: 7, separator: ") " },
        { length: 8, start: 7, end: 9, separator: "-" },
        { length: 10, start: 9, end: 11, separator: "-" },
      ];

      for (const { length, start, end, separator } of cases) {
        if (inputNumbersValue.length >= length) {
          formattedInputValue += separator + inputNumbersValue.substring(start, end);
        }
      }
    }
    return formattedInputValue;
  }, []);

  const onPhoneInput = useCallback(
    (e) => {
      const newValue = e.currentTarget.value;
      const inputNumbersValue = getInputNumbersValue(newValue);
      const selectionStart = e.currentTarget.selectionStart;

      if (!inputNumbersValue) {
        setValue("");
        return;
      }

      // Change characters in the middle of text
      if (newValue.length != selectionStart) {
        //We make changes if the input is correct and change the cursor location
        if (e.data && numberReg.test(e.data)) {
          setValue(updateMobileText(inputNumbersValue));
          input.selectionEnd = selectionStart - 1;
          input.selectionStart = selectionStart - 1;
        }
        setValue(updateMobileText(inputNumbersValue));
        return;
      }

      setValue(updateMobileText(inputNumbersValue));
    },
    [setValue, getInputNumbersValue, updateMobileText],
  );

  const onPhoneKeyDown = useCallback(
    (e) => {
      // Remove the last character
      if (/[0-9]/.test(e.key)) {
        return;
      }
      const inputValue = e.currentTarget.value.replace(numberReg, "");
      if (e.keyCode == 8 && inputValue.length == 1) {
        setValue("");
      }
    },
    [setValue],
  );

  const phoneHandlers = {
    onKeyDown: onPhoneKeyDown,
    onChange: onPhoneInput,
  };

  return [input, value, phoneHandlers];
};

export default usePhone;
