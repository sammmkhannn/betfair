import "./Schedule.css";

const Schedule = () => {
  return (
    <div className="schedule">
      <div className="schedule__header">
        <p>Horse Racing Schedule</p>

        <div className="days">
          <button>Today</button>
          <button className="grey">Tomorrow</button>
          <button className="grey">Thursday</button>
        </div>
      </div>
      <div className="container">
        <p>There are no markets to be displayed</p>
      </div>
    </div>
  );
};

export default Schedule;
