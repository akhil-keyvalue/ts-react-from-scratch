import { useState } from 'react';

export const ClickCounter = () => {
    const [count, setCount] = useState(0);
    return (
      <div>
        <button type="button" onClick={() => setCount(p => p+1)}> Counts {count}</button>
      </div>
    )
}