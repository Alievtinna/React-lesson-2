import React, { useState } from "react";

function Counter() {
  // Объявляем состояние count и функцию для его обновления
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Счётчик: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Увеличить</button>
      <button onClick={() => setCount(count - 1)}>Уменьшить</button>
      <button onClick={() => setCount(0)}>Сбросить</button>
    </div>
  );
}

export default Counter;
