import { useEffect, useState } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import axios from "axios";

const Home = () => {
  const [workouts, setWorkouts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/workouts");
        const data = response.data;
        setWorkouts(data);
      } catch (err) {
        setError("Error fetching workouts");
      }
    };

    fetchWorkouts();
  }, []);

  const handleCreateWorkout = (newWorkout) => {
    setWorkouts([newWorkout, ...workouts]);
  };

  const handleDeleteWorkout = (deletedWorkoutId) => {
    setWorkouts(workouts.filter((workout) => workout._id !== deletedWorkoutId));
  };

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => {
            return (
              <WorkoutDetails
                key={workout._id}
                workout={workout}
                onDelete={handleDeleteWorkout}
              />
            );
          })}
      </div>
      <WorkoutForm onCreate={handleCreateWorkout} />
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default Home;
