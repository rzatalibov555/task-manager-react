import "./TodoItem.css"
import { useState, useEffect } from "react";

function TodoItem() {


    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        
        fetch('http://localhost:3004/todos')
            .then((response) => response.json())
            .then((data) => setWorkouts(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);





    return <div className="workout-details">

        {workouts.map((workout) => (
            <div key={workout.id}>
                <h3>Title: {workout.title}</h3>
                <p>Description: {workout.description}</p>
                <button >
                    delete
                </button>
            </div>

        ))}



    </div>
}

export default TodoItem