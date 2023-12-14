import { useState } from 'react';
import Button from "components/Button"

import { CounterWrapper, Count } from "./styles"

function Counter() {
  const [count, setCount] = useState(0);

  const onPlus = () => {
    setCount(count + 1);
  };

  const onMinus = () => {
    setCount(count - 1);
  };

  const multiply = () => {
    setCount(count * 2);
  };

  const divide = () => {
    setCount(count / 2);
  };
  return (
    <CounterWrapper>
      <Button name="Divide by 2" onClick={divide} />
      <Button name="-" onClick={onMinus} />
      <Count>{count.toFixed(2)}</Count>
      <Button name="+" onClick={onPlus} />
      <Button name="Multiply by 2" onClick={multiply} />
    </CounterWrapper>
  )
}

export default Counter
