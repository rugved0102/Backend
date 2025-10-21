<!-- 1. npm init
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
    .prettierignore file for ignoring files/folders from formatting -->


 
# How to Setup a Professional Backend Project
This guide provides a step-by-step approach to setting up a professional backend project using Node.js. It covers essential configurations, folder structures, and tools to streamline development.
## Step 1: Initialize npm
Start by initializing a new npm project:
```bash
npm init -y
``` 
## Step 2: Set Up Git
Initialize a new Git repository to manage your project versioning:  
```bash
git init
```     
## Step 3: Create Folder Structure
Create the necessary folders for your backend project:
```bash
mkdir src controllers utils db models middlewares routes
```
## Step 4: Add .gitkeep to Empty Folders
To ensure Git tracks empty folders, add a `.gitkeep` file in each empty folder:
```bash
touch controllers/.gitkeep utils/.gitkeep db/.gitkeep models/.gitkeep middlewares/.gitkeep routes/.gitkeep
```
## Step 5: Create .gitignore
Create a `.gitignore` file to exclude unnecessary files and folders from being tracked by Git.
You can generate a `.gitignore` file using [this generator](https://mrkandreev.name/snippets/gitignore-generator/).
## Step 6: Create README.md
Create a `README.md` file to document your project.
## Step 7: Create .env File
Create a `.env` file to store environment variables.
## Step 8: Create src Folder
Create a `src` folder to hold your source code.
## Step 9: Configure ES6 Modules
To use ES6 Modules (import/export) in your project, add the following line to your `package.json` file:
```json
"type": "module"
```
## Step 10: Install Nodemon
Install `nodemon` as a development dependency to automatically restart your server during development:
```bash
npm install --save-dev nodemon
```
Add a `dev` script to your `package.json` to run your server with nodemon:
```json
"scripts": {
  "dev": "nodemon src/index.js"
}
```
## Step 11: Create Initial Files in src
Inside the `src` folder, create the following initial files:
```bash
touch src/app.js src/constants.js src/index.js
```
## Step 12: Install Prettier
Install `prettier` as a development dependency for code formatting:
```bash
npm install --save-dev prettier
```
Create a `.prettierrc` file to configure Prettier settings:
```json
{
  "singleQuote": false,
  "bracketSpacing": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "semi": true
}
```
Create a `.prettierignore` file to specify files and folders to ignore during formatting:
```
/.vscode
/node_modules   
./dist
*.env
.env
.env.*
```
With these steps, you will have a well-structured and professional backend project setup ready for development.
