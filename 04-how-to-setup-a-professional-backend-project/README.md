1. npm init
2. git setup
3. create folders
4. gitkeep in empty folders
5. gitignore, you can generate using https://mrkandreev.name/snippets/gitignore-generator/
6. README.md
7. .env
8. src
9. javascript me 2 type se import kar sakte hai
   - CommonJS (require) - old way
   - ES6 Modules (import) - new way 
   package.json me "type": "module" add karna padega agar ES6 Modules use karna hai to
10. nodemon for auto restart server during development
11. "dev" : "nodemon src/index.js" in scripts of package.json
12. in src/
    touch app.js constants.js index.js
    mkdir controllers utils db models middlewares routes
13. prettier for code formatting
    npm install -D prettier
    .prettierrc file for prettier configuration
    .prettierignore file for ignoring files/folders from formatting
