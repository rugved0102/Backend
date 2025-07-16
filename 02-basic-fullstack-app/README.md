# Full Stack Joke App 😄

This is a **beginner-friendly full-stack web application** using:

- **Frontend:** React + Vite
- **Backend:** Express (Node.js)
- **Communication:** REST API with `/api/jokes` endpoint
- **Development Tools:** Vite Proxy to avoid CORS issues

---
## Screenshot
![Screenshot 2025-07-07 183937](https://github.com/user-attachments/assets/ca035f19-9f2a-4cad-aa2a-9d14c1591a0c)

---

## 📁 Project Structure

```
basic-fullstack-app/
├── backend/
│   └── server.js          # Express backend
├── frontend/
│   ├── src/
│   │   ├── App.jsx        # Main React component
│   │   ├── components/
│   │   │   └── TypingAnimatedText.jsx
│   │   └── main.jsx       # Entry point
│   ├── vite.config.js     # Vite config with proxy
│   └── index.html         # HTML template
```

---

## 🚀 How It Works

### Backend (`server.js`)

- Uses **Express** to serve an API at `/api/jokes`
- Sends a list of hardcoded jokes as JSON response
- Starts the server on port `3000`

```js
app.get('/api/jokes', (req, res) => {
  res.send([...jokeArray]);
});
```

### Frontend (`App.jsx`)

- Uses **Axios** to request data from `/api/jokes`
- Displays jokes in the browser
- Uses a custom component `TypingAnimatedText` for typing effect

### Vite Proxy (to fix CORS issue)

In `vite.config.js`, we added:
```js
server: {
  proxy: {
    '/api': 'http://localhost:3000',
  },
}
```

So requests to `/api/...` are proxied to the backend (Express) during development.

---

## 🛠️ Getting Started

### 1. Install Backend Dependencies

```bash
cd backend
npm init -y
npm install express
node server.js
```

Your backend will be running at: `http://localhost:3000`

### 2. Install Frontend Dependencies

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at: `http://localhost:5173`

Now your frontend can call the backend via `/api/jokes`.

---

## 🧠 Concepts Learned

- Express route handling (`app.get()`)
- JSON API responses
- React `useEffect` + `useState` for fetching data
- Axios for HTTP requests
- Avoiding CORS in dev using Vite proxy
- Breaking React components into reusable pieces

---

## ✅ Example Output

```
Full Stack Joke-App

TypingAnimatedText: "Hello" → "World" → "This" → ...

Category: Science
Setup: Why don't scientists trust atoms?
Punchline: Because they make up everything!
...
```

---

## 🧼 Tips

- Always check browser console for errors
- Confirm your backend is running **before** frontend requests API
- Use `console.log` to debug

---

## 📌 Final Thoughts

This project is a **solid starting point** for full-stack development. It helps you understand:

- how backend and frontend communicate
- how to serve data via API
- how React consumes that data

Happy coding! 🎉
