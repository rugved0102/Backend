import { useEffect, useState } from 'react'
import './App.css'
import TypingAnimatedText from './components/TypingAnimatedText'
import axios from 'axios'


function App() {

  const [jokes, setjokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
    .then((response) => {
      setjokes(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  })

  return (
    <>
    <h1 className="text-white text-4xl mb-4">Full Stack Joke-App</h1>
    <TypingAnimatedText/>
    
    {
      jokes.map((joke, index) => (
        <div key={joke.id}>
          <h3>{joke.category}</h3>
          <p>{joke.setup}</p>
          <p>{joke.punchline}</p>
        </div>
      ))
    }

    </>
  );
}


export default App;
