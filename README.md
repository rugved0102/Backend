# Backend

# ⚡ Express.js Backend 

## ✅ Basic Flow
**Client → Express.js → Business Logic/API → Response**

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