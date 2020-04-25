import React, { useState } from 'react'

export default function HookPractice () {
  
  const [count, setCount ] = useState(0);
  return(
    <div>
      <p>You Click {count}</p>
      <button onClick={
       () => {
         setCount( count + 1 )
       }
      }>Click</button>      
    </div>

  );
}
