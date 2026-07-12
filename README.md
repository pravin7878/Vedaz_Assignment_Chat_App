# 🚀 Pulse Chat

A modern real-time chat application built with **React**, **Node.js**, **Express**, **Socket.io**, and **MongoDB**. Users can exchange messages instantly, view chat history, see online users, and get typing indicators.

> **Assignment Submission** – Vedaz Internshala Assignment

---

## 🌐 Live Demo

**Frontend:** https://pulse-chat-pk.vercel.app/

**Backend API:** https://chat-app-8h95.onrender.com/api/messages

---

## ✨ Features

### Core Features

- Real-time messaging using Socket.io
- Send and receive messages instantly
- Chat history persists after refresh
- Message timestamps
- Responsive and clean UI

### Bonus Features

- Username-based login (Local Storage)
- Typing indicator
- Online user count
- Auto-scroll to latest message
- Leave chat functionality
- MongoDB message persistence
- Deployed on Vercel & Render

---

# 🛠 Tech Stack

## Frontend

- React (Vite)
- Tailwind CSS
- Axios
- Socket.io Client
- React Icons

## Backend

- Node.js
- Express.js
- Socket.io
- MongoDB Atlas
- Mongoose

## Deployment

- Vercel (Frontend)
- Render (Backend)

---

# 📂 Project Structure

```
pulse-chat/
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── services/
│   │   └── utils/
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── sockets/
│   │   ├── utils/
│   │   ├── app.js
│   │   └── server.js
│   └── package.json
│
└── README.md
```

---

# ⚙️ Environment Variables

## Backend (.env)

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

CLIENT_URL=http://localhost:5173
```

---

## Frontend (.env)

```env
VITE_API_URL=http://localhost:5000/api

VITE_SOCKET_URL=http://localhost:5000
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/pravin7878/Vedaz_Assignment_Chat_App
```

---

# Backend Setup

```bash
cd backend

npm install

npm run dev
```

Server runs on

```
http://localhost:5000
```

---

# Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

# 📡 REST API

## Fetch Chat History

```http
GET /api/messages
```

### Response

```json
[
  {
    "_id": "...",
    "username": "Pravin",
    "message": "Hello",
    "createdAt": "..."
  }
]
```

---

## Send Message

```http
POST /api/messages
```

### Request Body

```json
{
  "username": "Pravin",
  "message": "Hello"
}
```

---

# 🔌 Socket Events

## Client → Server

| Event | Description |
|--------|-------------|
| `join-chat` | Join chat room |
| `send-message` | Send new message |
| `typing` | User started typing |
| `stop-typing` | User stopped typing |

---

## Server → Client

| Event | Description |
|--------|-------------|
| `receive-message` | Receive new message |
| `online-users` | Online user count |
| `user-typing` | Typing indicator |
| `user-stop-typing` | Stop typing indicator |

---

# 🏗 Design Decisions

- React custom hook (`useChat`) manages chat state and Socket.io communication.
- REST API is used to fetch previous chat history.
- Socket.io is used for real-time message delivery.
- Messages are stored in MongoDB for persistence.
- Username is stored in Local Storage for a simple login experience.
- Clean folder structure separates API, UI, services, hooks, and backend logic.

---

# 📝 Assumptions

- This application uses a single global chat room.
- Username authentication is intentionally lightweight (dummy login).
- Messages are public and visible to all connected users.
- Read receipts are not implemented as they were an optional requirement.

---


# 🔮 Future Improvements

- Private chat rooms
- Group chats
- Read receipts
- User avatars
- Emoji picker
- File sharing
- Message editing & deletion

---

# 👨‍💻 Author

**Pravin Kumar**

GitHub: https://github.com/pravin7878

LinkedIn: https://www.linkedin.com/in/pravin-kumar24/