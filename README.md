# 📝 To-Do List Web Application

A fully featured and polished To-Do List application, built using **HTML**, **CSS**, and **JavaScript**, with modern features like filtering, counters, and persistent data storage.

## 🎯 Project Overview

This project is a practical, easy-to-use task manager where you can add, complete, filter, and remove tasks. Tasks persist between sessions using **LocalStorage**, and the interface updates dynamically with smooth UX/UI interactions.

## ✨ Features

* ➕ **Add new tasks**
* ✅ **Mark tasks as completed/uncompleted**
* 🗑️ **Delete tasks**
* 🔂 **Filter tasks** by:

  * 📋 All
  * ✅ Completed
  * 🕓 Pending
* 📊 **Live counters** showing:

  * Total tasks
  * Completed tasks
  * Pending tasks
* 📅 **LocalStorage** for persistent tasks between sessions
* ⚡ **Input validation** (prevents empty tasks)
* 📲 **Responsive design** for mobile and desktop
* 🔔 **Alert notifications** using **Alertify.js**

## 📋 Core Functionality

### 🔝 User Interface (HTML)

* 📌 Input field to enter new tasks
* ➕ Button to add tasks
* 💽 Filter buttons with live task counts
* 📁 Dynamic list displaying tasks with controls

### 💻 Application Logic (JavaScript)

* ➕ Create new tasks with text input or pressing **Enter**
* 📁 Tasks rendered dynamically to the page
* ✅ **Checkbox** to toggle completion (adds strike-through styling)
* ❌ **Delete** button to remove tasks
* 🔂 **Filter** tasks in real-time (All, Completed, Pending)
* 🔢 **Counters** for each filter category update automatically
* 📅 Save to and load from **LocalStorage**
* 🔔 Feedback messages via Alertify.js

### 🎨 Styling (CSS)

* Modern, clean, and responsive UI
* Distinct styling for completed tasks
* Smooth hover effects and transitions
* Highlight active filter button
* Full mobile responsiveness

## 🚀 Getting Started

1. 📂 Clone or download this repository
2. 🌐 Open `index.html` in your web browser
3. ✍️ Start managing your tasks!

## 📁 File Structure

```
📁 / (root)
 ├ 📄 index.html     → Main HTML structure
 ├ 🎨 style.css      → Styling for the application
 └ ⚙️ main.js        → JavaScript functionality
```

## 📦 External Libraries Used

* ✔️ [Alertify.js](https://alertifyjs.com/) → For user notifications
* ✔️ [Font Awesome](https://fontawesome.com/) → For UI icons

---

**Author:** Kale-8
**License:** MIT