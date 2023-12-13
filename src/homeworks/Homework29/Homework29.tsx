import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { BgMain, EnteredData, InputWrapper } from "./styles";

function Homework29() {

    const [inputValue, setInputValue] = useState<string>('');
    const [displayValue, setDisplayValue] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleButtonClick = () => {
        if (inputValue.trim() === '') {
            alert('Введите данные в Input');
        } else {
            setDisplayValue(inputValue);
        }
    };

    return (
        <BgMain>
            <InputWrapper>
                <Input type="text" value={inputValue} onChange={handleInputChange} labelName="Enter text" />
                <Button name="Send" onClick={handleButtonClick} disabled={false} />
                {displayValue && <EnteredData>Введенные данные: {displayValue}</EnteredData>}
            </InputWrapper>
        </BgMain>
    );
};

export default Homework29;
