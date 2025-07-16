import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('Server is ready')
})

app.get('/api/jokes', (req, res) => {
    const jokes = [
  {
    id: 1,
    setup: "Why don't scientists trust atoms?",
    punchline: "Because they make up everything!",
    category: "Science",
    rating: 4.7
  },
  {
    id: 2,
    setup: "What do you call fake spaghetti?",
    punchline: "An impasta!",
    category: "Food",
    rating: 4.2
  },
  {
    id: 3,
    setup: "Why did the scarecrow win an award?",
    punchline: "Because he was outstanding in his field!",
    category: "Farm",
    rating: 4.5
  },
  {
    id: 4,
    setup: "Why did the bicycle fall over?",
    punchline: "Because it was two-tired!",
    category: "Puns",
    rating: 4.1
  },
  {
    id: 5,
    setup: "I told my wife she was drawing her eyebrows too high.",
    punchline: "She looked surprised.",
    category: "Relationship",
    rating: 4.6
  }
];
res.send(jokes);

})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
    
})