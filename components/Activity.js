import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeActivity, startTimer, stopTimer, updateTimer } from '../reducers/activities';
import styles from '../styles/Activity.module.css';

function Activity(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    let interval;

    if (props.ongoing) {
      interval = setInterval(() => dispatch(updateTimer(props)), 1000);
    } else {
      clearInterval(interval);
    }

    return () => { clearInterval(interval); };
  }, [props.ongoing]);

  const timer = new Date(props.timer * 1000).toISOString().slice(11, 19);

  return (
    <>
      <div className={styles.activityWindow}>
        <div className={styles.activityHeader}>
          {props.name}
          <div className={styles.delete} onClick={() => dispatch(removeActivity(props))}>X</div>
        </div>
        <div>
        </div>

        {timer}

        <div className={styles.buttonSection}>
          <button onClick={() => dispatch(startTimer(props))}>Start</button>
          <button onClick={() => dispatch(stopTimer(props))}>Stop</button>
        </div>
      </div>
    </>
  );
}

export default Activity;
