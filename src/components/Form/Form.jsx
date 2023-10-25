import "./Form.css"
import { useState } from "react";
function Form() {


    const [title, setExerciseTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const newWorkout = {
            title,
            description,
        };

        try {
            const response = await fetch('http://localhost:3004/todos', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(newWorkout),
            });
      
            if (response.ok) {
              // Form inputlarinin icini bowaltmaq ucun
              setExerciseTitle('');
              setDescription('');
            } else {
              console.error('Failed to add workout.');
            }
          } catch (error) {
            console.error('Error:', error);
          }
        };


    return (
        <form className="create">
            <h3>Add a New Workout</h3>

            <label>Excersize Title:</label>
            <input type="text"
                value={title}
                onChange={(e) => setExerciseTitle(e.target.value)} />

            <label>Description:</label>
            <input type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)} />

            <button type="submit" onClick={handleSubmit}>Add Workout</button>
        </form>
    );
}

export default Form;