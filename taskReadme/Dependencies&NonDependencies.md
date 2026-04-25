# Difference Between Dependencies and Dev Dependencies

## Step 1: Understanding Dev Dependencies
Dev dependencies are tools or packages required only during the **development phase** of a project. They are not part of the final product but are used for tasks like testing, code formatting, and building.

**Example:**
* **Nodemon** (used for automatically restarting the server during development)

**Installation Command:**
```bash
npm install <package> --save-dev
```

---

## Step 2: Understanding Dependencies
Dependencies are **essential packages** that your application needs to function in production. They are part of the final build of your project.

**Example:**
* **Express.js** (used for building web applications)

**Installation Command:**
```bash
npm install <package>
```

---

## Step 3: Key Difference
* **Dev Dependencies:** Needed only in development, not in production.
* **Dependencies:** Needed in both development and production.

**When running:**
```bash
npm install --production
```
Only the packages listed under **"dependencies"** in `package.json` will be installed.

---

## Step 4: Removing a Package
To remove any npm package:
```bash
npm remove <package>
```

---

## Final Answer
* **Dependencies:** Required for the app to run in production (e.g., Express.js). Install with: `npm install <package>`
* **Dev Dependencies:** Required only during development (e.g., Nodemon). Install with: `npm install <package> --save-dev`
* **Production Install:** `npm install --production`
* **Remove Package:** `npm remove <package>`