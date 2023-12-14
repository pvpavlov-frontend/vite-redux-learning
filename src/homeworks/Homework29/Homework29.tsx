import { useState, ChangeEvent, MouseEvent } from "react"

import Input from "components/Input"
import Button from "components/Button"

import { Homework29Wrapper, FormContainer } from "./styles"

function Homework29() {
  const [inputValue, setInputValue] = useState<string>("")
  const [text, setText] = useState<string | undefined>(undefined)

  const onChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const showText = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if (inputValue.length === 0) {
      alert("Input пустой, введите символы")
      return
    }

    setText(inputValue)
  }

  return (
    <Homework29Wrapper>
      <FormContainer>
        <Input
          onChange={onChangeInputValue}
          value={inputValue}
          placeholder="Enter value"
          labelName="Input"
        />
        <Button onClick={showText} type="button" name="Show text" />
        {text && <h2>{text}</h2>}
      </FormContainer>
    </Homework29Wrapper>
  )
}

export default Homework29
