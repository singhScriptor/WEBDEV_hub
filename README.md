# 🚀 Web Development & Backend Engineering Portfolio

A robust repository featuring **Expense Tracker** and **Todo List** applications. This project demonstrates mastery in core Web Development—including **DOM Manipulation**, **Linked List** data structures, and **CRUD** operations—while currently integrating **Node.js** for backend logic.

### 🌟 Key Highlights
*   ✅ **Completed Web Development**: Successfully implemented full CRUD systems with dual-persistence (Local Storage & REST API).
*   🏗️ **Active Backend Integration**: Currently architecting the server-side logic using **Node.js**.
*   🧠 **Advanced Logic**: Built custom **Linked List** structures to handle dynamic data flow beyond basic arrays.
*   🖱️ **Interactive UI**: Fully functional **Edit** and **Delete** systems powered by dynamic DOM event listeners.
*   🔄 **Smart Refresh Handling**: Implemented logic to ensure data persists and UI state is restored automatically upon page refresh.

---

## 📂 Core Projects

### 💰 Expense Tracker (Dual-Mode)
A financial dashboard to monitor income and spending.
*   **Local Storage**: Instant persistence using `window.localStorage`.
*   **REST API**: Full **CRUD** flow synced with a remote server via Fetch.
*   **Dynamic UI**: Includes dedicated **Edit** and **Delete** buttons for each transaction.
*   **Logic**: Implemented a **Linked List** to manage transaction history for optimized data insertion.

### ✅ Todo List (Dual-Mode)
A streamlined productivity tool for task management.
*   **Local Storage**: Uses **JSON serialization** to save tasks in the browser cache.
*   **REST API**: Fetches and updates task states via asynchronous API calls.
*   **Task Control**: Integrated **Edit** functionality to modify tasks and **Delete** functions to remove them.

---

## 🔄 State Persistence & Refresh Handling

I implemented specialized logic to handle browser refreshes, ensuring a seamless user experience:
*   **Auto-Initialization**: On `DOMContentLoaded`, the app checks for existing data in **Local Storage** or triggers an initial **GET request** to the REST API.
*   **State Recovery**: The UI is dynamically rebuilt using the stored data, ensuring the **Linked List** and visual list items are perfectly synced.
*   **Persistent UI**: Hover effects and event listeners are re-attached to all dynamically generated elements (like Edit/Delete buttons) immediately after the refresh.

---

## 🎨 Interactive User Experience (UX)

Advanced **DOM Event Listeners** bridge the gap between UI and Logic:
*   ✨ **Hover In (`mouseenter`)**: Triggers dynamic scaling and color shifts via **Tailwind** and **Bootstrap**.
*   🌑 **Hover Out (`mouseleave`)**: Smoothly reverts elements to their original state.
*   ⚙️ **Action Triggers**: Custom listeners for **Edit** and **Delete** buttons that trigger state changes and API/Local Storage updates.

---

## 🛠️ Technical Stack

*   **Logic & Engineering**: **ES6+ JavaScript**, **Linked List** Data Structures, and **Node.js** (Current Focus).
*   **Structure & Styling**: Semantic **HTML5**, **Tailwind CSS**, and **Bootstrap 5**.
*   **Data Persistence**: 
    *   💾 **Local Storage**: Reliable browser-based data caching.
    *   🌐 **REST API**: Professional server-side data management.
*   **Verification**: Custom **Event Tests** to ensure listener stability and logic flow.

---
