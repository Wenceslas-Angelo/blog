import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <button
<<<<<<< HEAD
          type="button"
=======
>>>>>>> ede59cb98cd74d53e9ee820b15f1ffb32a9286cb
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
<<<<<<< HEAD
          type="button"
=======
>>>>>>> ede59cb98cd74d53e9ee820b15f1ffb32a9286cb
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
<<<<<<< HEAD
          type="button"
=======
>>>>>>> ede59cb98cd74d53e9ee820b15f1ffb32a9286cb
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
<<<<<<< HEAD
          type="button"
=======
>>>>>>> ede59cb98cd74d53e9ee820b15f1ffb32a9286cb
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
<<<<<<< HEAD
          type="button"
=======
>>>>>>> ede59cb98cd74d53e9ee820b15f1ffb32a9286cb
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}
