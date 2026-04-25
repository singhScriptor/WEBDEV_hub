

# nodemon, package.json and npm

**Date:** Sunday, 26 April 2026  
**Time:** 3:09 AM

---

## 1. Initializing Your Project
To create your `package.json` file, use the following command in your terminal:

`npm init`

> **Note:** During initialization, you can either change the version name and number inside the terminal or you can leave it as default.

---

## 2. Why do we need `package.json`?
Imagine you are working on a project within a group. Rather than telling every person what tools or packages you have installed so far, the `package.json` file tracks everything for you.

* **Tracking:** It keeps track of all the details of your project.
* **Portability:** Other developers just need to run `npm install` to get all the necessary dependencies.
* **Scripts:** It is used to specify scripts to run various commands.

**Example:**
If you add a package using `npm i fs`, the details will be recorded inside the `package.json`. 

> **Summary:** It basically defines project metadata, dependencies, and scripts.

---

## 3. NODEMON
Nodemon is a tool that helps to restart or refresh your server automatically whenever you make changes to your code.

### Installation
* **Local installation:** `npm i nodemon`
* **Global installation:** `npm install -g nodemon` (Note: The handwritten note says `-y`, but typically `-g` is used for global installation).

### Usage
To run your project with nodemon, use the following command:

`nodemon <filename>`  
*(e.g., `nodemon index.js`)*