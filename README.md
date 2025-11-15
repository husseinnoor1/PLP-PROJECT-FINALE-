# PLP-PROJECT-FINALE-
Poverty Alleviation App – SDG 1: No Poverty
Overview

This project is a simple web application designed to support SDG 1: No Poverty by providing users with basic financial-literacy tools.
The app enables low-income users to learn budgeting skills, track expenses, and access helpful tips for saving and managing money.

The application uses HTML, CSS, JavaScript for the frontend and MongoDB for data storage (users, expenses, and tips). It is designed to be lightweight, simple, and easy to use for educational purposes.

Features
1. Financial Literacy Lessons

Simple, easy-to-understand lessons about saving, budgeting, avoiding debt, and managing income.

2. Expense Tracking

Users can add and view basic expense records.

Data is stored in MongoDB.

Helps users understand where their money goes.

3. Budgeting Tips

Displays budgeting tips stored in the database.

Tips are tailored to low-income households.

4. User-Friendly Interface

Simple HTML interface suitable for low-literacy users.

Responsive design for mobile use.

Technologies Used
Component	Technology
Frontend	HTML, CSS, JavaScript
Backend	Node.js + Express.js
Database	MongoDB
Tools	Mongoose, Nodemon (optional)
Folder Structure
project-folder/
│
├── public/
│   ├── index.html
│   ├── styles.css
│   └── app.js
│
├── server.js
├── models/
│   ├── Expense.js
│   └── Tip.js
│
├── routes/
│   ├── expenses.js
│   └── tips.js
│
├── package.json
└── README.md

How to Install and Run
1. Clone the Project
git clone <repository-url>
cd project-folder

2. Install Dependencies
npm install

3. Set Environment Variables

Create a .env file:

MONGO_URI=your_mongodb_connection_string
PORT=5000

4. Start the Server
node server.js


or, if using nodemon:

npm run dev

5. Open the App

Visit in your browser:

http://localhost:5000

API Endpoints
Expenses
Method	Endpoint	Description
POST	/api/expenses	Add expense
GET	/api/expenses	Get all expenses
Budgeting Tips
Method	Endpoint	Description
GET	/api/tips	Get all financial-literacy tips
Sample Data Stored in MongoDB
Financial Tips Example
[
  { "text": "Track your expenses daily to avoid overspending." },
  { "text": "Save at least 10% of your income whenever possible." },
  { "text": "Prioritize buying essential items before anything else." }
]

Expense Example
{
  "category": "Food",
  "amount": 150,
  "date": "2025-01-10"
}

How This Project Supports SDG 1: No Poverty

This project contributes to poverty reduction by:

Providing accessible financial education for low-income families.

Promoting responsible spending and saving habits.

Offering tools for users to better understand and manage their limited income.

Encouraging self-reliance through better financial decision-making.

Future Improvements


Author

HUSSEIN NOOR GEDI
Software Engineering Assignment – SDG Application
Date: 2025
