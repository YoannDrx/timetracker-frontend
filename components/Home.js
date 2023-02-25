import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addActivity } from '../reducers/activities';
import Activity from './Activity';
import styles from '../styles/Home.module.css';

function Home() {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities.value);

  const [activityName, setActivityName] = useState('');

  const createActivity = () => {
    const newActivity = { name: activityName, timer: 0, ongoing: false };
    dispatch(addActivity(newActivity));
    setActivityName('');
  };

  const activitiesComponents = activities.map((data, i) => {
    return <Activity key={i} name={data.name} timer={data.timer} ongoing={data.ongoing} />;
  });

  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <div className={styles.trackerWindow}>
          <div className={styles.trackerHeader}>
            Time tracker
          </div>
          <div className={styles.addSection}>
            <input
              type="text"
              placeholder="Activity name"
              id="activityName"
              onChange={(e) => setActivityName(e.target.value)}
              value={activityName}
            />
            <button id="add" onClick={() => createActivity()}>Add activity</button>
          </div>
        </div>
      </div>

      <div className={styles.bottomSection}>
        {activitiesComponents}
      </div>
    </div>
  );
}

export default Home;
