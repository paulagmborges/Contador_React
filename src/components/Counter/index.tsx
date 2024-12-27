import React, { useState } from 'react';

type Props = {
  title: string;
  initialValue: number;
};

function Counter({ title, initialValue }: Props) {
  const [count, setCount] = useState<number>(0 || initialValue);

  function handleChangeValue(value:number){
    const nextValue = count!+(value)
    if(nextValue<0){
        return;
    }
    setCount(nextValue)

  }
  return (
    <div className='container-counter'>
      <h1>{title}</h1>
      <h2>Contagem atual: {count}</h2>
      <button onClick={ ()=>handleChangeValue(1)}>
        Increment</button>
      <button onClick={ ()=>handleChangeValue(-1)}>
        Decrement</button>
    </div>
  );
}

export default Counter;


