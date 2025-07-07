# Backend

# ⚡ Express.js Backend 

## ✅ Basic Flow
**Client → Express.js → Business Logic/API → Response**
![Screenshot 2025-07-05 174920](https://github.com/user-attachments/assets/c23fdece-21d5-4413-b04f-b33729637fbd)

---

## 🧱 Core Concepts

- **Express.js**: Node.js framework for APIs & routing.
- **Routes**: Define endpoints like `/`, `/login`, `/activity`.
- **Middleware**: Functions that run before routes (e.g., `express.json()`).
- **Environment Variables**: Use `.env` to store sensitive data (`PORT=3000`).

---

## 📄 Basic Server Structure

```js
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Running on ${port}`));
```
## Proxy Configuration to Avoid CORS

> When the frontend and backend are running on different ports (e.g., 5173 and 3000), you may face **CORS** issues. Vite allows us to set a **proxy** in `vite.config.js`:
```js
server: {
  proxy: {
    '/api': 'http://localhost:3000',
  }
}
```
