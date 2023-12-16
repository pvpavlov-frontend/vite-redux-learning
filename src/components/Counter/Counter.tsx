import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, multiply, divide } from 'store/redux/counterSlice';
import { RootState } from 'store/redux/store';
import { Count, CounterWrapper } from './styles';
import Button from 'components/Button';

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);

  const onPlus = () => {
    dispatch(increment(1));
  };

  const onMinus = () => {
    dispatch(decrement(1));
  };

  const onMultiply = () => {
    dispatch(multiply(2));
  };

  const onDivide = () => {
    dispatch(divide(2));
  };

  return (
    <CounterWrapper>
      <Button onClick={onDivide} name="Divide by 2" />
      <Button onClick={onMinus} name="Decrement" />
      <Count>Counter: {count.toFixed(2)}</Count>
      <Button onClick={onPlus} name="Increment" />
      <Button onClick={onMultiply} name="Multiply by 2" />
    </CounterWrapper>
  );
};

export default Counter;