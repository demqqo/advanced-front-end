import { useState } from 'react'
import classes from "./Counter.module.scss";
 function Counter  ()  {
    const [count, setCount] = useState(0)
  return (
    <div ><h1 className={classes.header} >Counter <div>{count}</div></h1>
        <button onClick={()=>{setCount(count+1)}}>+</button>
        <button onClick={()=>{setCount(count-1)}}>-</button>

    </div>
    
  )
}


export default Counter