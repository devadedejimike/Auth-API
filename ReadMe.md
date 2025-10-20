# 🔐 Auth API  

A secure and modular **Authentication API** built with **Express.js**, **TypeScript**, and **MongoDB**.  
It handles user registration, login, and JWT-based authentication for protecting API routes.

---

## 🛠️ Tech Stack  
🟦 TypeScript &nbsp;&nbsp; ⚙️ Express.js &nbsp;&nbsp; 🍃 MongoDB &nbsp;&nbsp; 🟢 Node.js &nbsp;&nbsp; 🔑 JWT  

---

## 📁 Project Structure  

auth-api/
┣ src/
┃ ┣ controllers/
┃ ┣ middlewares/
┃ ┣ models/
┃ ┣ routes/
┃ ┗ index.ts
┣ .env
┣ .gitignore
┣ package.json
┣ tsconfig.json
┗ README.md

yaml
Copy code

---

## 🚀 Features  
- 🧾 **User Registration** (sign up with validation)  
- 🔐 **Login with JWT** (JSON Web Token authentication)  
- 🔑 **Protected Routes** for authenticated users only  
- 🧩 **TypeScript support** for better type safety  
- ⚙️ Modular and scalable folder structure  

---

## ⚙️ Installation & Setup  

1. **Clone the repository**
   ```bash
   git clone https://github.com/<your-username>/auth-api.git
   cd auth-api
Install dependencies

bash
Copy code
npm install
Create a .env file and add your environment variables:

ini
Copy code
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
Compile TypeScript

bash
Copy code
npm run build
Run the server

bash
Copy code
npm run dev
📬 API Endpoints
Method	Endpoint	Description
POST	/api/auth/register	Register a new user
POST	/api/auth/login	Log in a user
GET	/api/auth/profile	Get user profile (protected route)

🧠 Learning Focus
This project helps reinforce:

Authentication and authorization with JWT

Using bcrypt for password hashing

Writing clean middleware for route protection

TypeScript and Express integration

Secure environment configuration


👨‍💻 Author
Adeyemi Adedeji Michael