# React Auth + Live Preview + Todo

## Description
This project is a **React authentication system** with advanced features:

- Signup form with live preview
- Password show/hide with eye icon
- Form validation (required fields, password match)
- Terms & Privacy clickable modal
- Login form with email/password check
- Todo list displayed **after successful login**
- Mobile responsive and styled with black-blue theme

This project is ideal for learning **React forms, state management, and conditional rendering**.
Check it out live: https://react-signup-login-jhangir.netlify.app

---

## Features

1. **Signup Form**
   - First Name, Last Name, Email, Phone, Password, Confirm Password
   - Checkbox for Terms & Privacy
   - Live preview of entered data
   - Password toggle (eye icon)

2. **Login Form**
   - Email & Password validation
   - Checks against stored signup users
   - Displays Todo list on successful login
   - Logout button with matching style

3. **Terms & Privacy**
   - Clickable Terms & Privacy
   - Modal popup with information
   - Fully reusable component

4. **Todo List**
   - Add, Delete, Complete tasks
   - Mobile friendly layout
   - Styled buttons consistent with auth system

---

## Folder Structure

reactthapaapp/
│
├─ public/
│   ├─ images/             # any images you use
│   └─ vite.svg
│
├─ src/
│   ├─ api/                # optional API calls if needed
│   ├─ assets/             # static assets like icons, logos
│   ├─ components/
│   │   ├─ projects/
│   │   │   └─ RegistrationForm/
│   │   │       ├─ RegistrationForm.jsx
│   │   │       ├─ LoginForm.jsx
│   │   │       └─ TermsAndPrivacy.jsx
│   │   │
│   │   ├─ todo/
│   │   │   ├─ Todo.jsx
│   │   │   ├─ TodoForm.jsx
│   │   │   ├─ TodoList.jsx
│   │   │   ├─ TodoDateTime.jsx
│   │   │   ├─ TodoFooter.jsx
│   │   │   ├─ TodoLocalStorage.jsx
│   │   │   └─ Todo.css
│   │   │
│   │   └─ ToggleSwitch/
│   │       └─ ToggleSwitch.jsx
│   │
│   ├─ App.jsx
│   └─ main.jsx
│
├─ package.json
├─ vite.config.js
└─ README.md <img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/f3d26557-ab18-4689-bdf7-adb31ddbcfdb" />

