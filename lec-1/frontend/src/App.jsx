import { useState, useEffect } from 'react';  // Add useEffect import
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);

  // Move axios call inside useEffect to prevent infinite loops
  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.error('Error fetching jokes:', error);
      });
  }, []);  // Empty dependency array means it runs once on mount

  return (
    <>
      <h1>Jokes</h1>
      <ul>  {/* Use <ul> for an unordered list */}
        {jokes.map((joke) => (
          <li key={joke.id}>  {/* Key on <li>, assuming joke.id exists */}
            <p>{joke.setup} {joke.punchline}</p>  {/* Render joke content */}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;