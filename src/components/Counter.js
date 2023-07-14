import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD, ADD_NUMBER, SUBTRACT, RESET } from '../store/slice/counterSlice'
import { TOGGLE_AUTH } from '../store/slice/authSlice'

function Counter() {
    const count = useSelector((state) => state.counter.count)
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
    
    const dispatch = useDispatch()

   let color = "#444";

   if(count >= 1) {
    color = "blue";
   } else if (count < 0) {
    color = "red";
   } else {
    color = "#444"
   }
    
  return (
    <section className="--flex-center --100vh --bg-primary">
    <div className="container --bg-light --p2 --m2 --center-all">
        
        <button className='--btn --btn-danger'
        onClick={() => dispatch(TOGGLE_AUTH())}>{isLoggedIn ? "Log Out" : "Log in"}</button>
        {!isLoggedIn ? (
            <p>Please log in</p>
        ) : (
            <>
    <h3>React Counter App</h3>
    <h1 style={{color: color}}>{count}</h1>

    <div className="buttons --flex-center">
      <button onClick={() => dispatch(SUBTRACT())} className=" --btn-danger --btn">Substract</button>
      <button onClick={() => dispatch(RESET())} className="--btn">Reset</button>
      <button onClick={() => dispatch(ADD())} className="--btn-primary --btn">Add</button>
      <button onClick={() => dispatch(ADD_NUMBER(5))} 
      className="--btn-primary --btn">Add 5</button>
    </div>
            </>

        )}
    </div>
</section>
  )
}

export default Counter