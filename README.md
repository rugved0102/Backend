<!-- # Backend Learning Journal

This repository is my personal learning log for backend development. It contains small projects, experiments, notes, and examples that help me learn concepts like REST APIs, authentication, databases, testing, and deployment.

## Goals
- Track hands-on learning and experiments.
- Keep runnable examples for common backend patterns.
- Record notes, caveats, and references for future review.
- Build a portfolio of small, focused projects.

## What you'll find here
- /examples — small, focused example projects (one per folder) using different stacks.
- /notes — short markdown notes about concepts, commands, troubleshooting.
- /projects — larger mini-projects that combine multiple concepts.
- /docs — reference material, API sketches, and architecture diagrams.
- Dockerfiles and docker-compose examples for local testing.
- CI config and simple tests where applicable.

## Sample stacks (examples you might include)
- Node.js + Express + PostgreSQL
- Python + FastAPI + SQLite/Postgres
- Django REST Framework
- Java + Spring Boot
- Go net/http or Gin

## Quick start
1. Clone the repo:
   git clone https://github.com/your-username/Backend.git
2. Browse the folder for the stack you want to try, e.g. `examples/node-express`.
3. Each example has its own README with install/run instructions (look for README.md inside the example).
4. Use Docker where available to run services quickly:
   docker-compose up --build

## How I organize experiments
- Each experiment is self-contained in its folder with a README explaining objectives, steps, and lessons learned.
- Commits are frequent and small, with descriptive messages about what I learned or changed.

## Contributing / Notes to future me
- This is primarily a personal learning repo; feel free to open PRs or suggest improvements.
- If you reuse code from tutorials, note the source in the example's README.
- Tag TODOs and follow-up tasks with issues or TODO.md.

## Contact
- GitHub: @rugved0102 -->


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
