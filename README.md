
**Assessment 1.2 (Total Marks **20**)**

Assignment: **Software requirements analysis and design (**Full-Stack CRUD Application Development with DevOps Practices**)**


----Project Overview----

Motif of the Project:
During my school years, having a warm meal was something I never questioned. Over time, I came to understand that every meal reflects planning, coordination, and care behind the scenes. School meals are not just food—they are part of a system that supports students’ wellbeing and daily learning.

This project is built on a simple idea:
Every child deserves a reliable and well-managed meal experience at school.

The School Canteen Meal Planner and Access Management System extends a provided full-stack starter application (Node.js, React, MongoDB) to implement meaningful CRUD operations tailored to school meal management. The system includes both user and administrative functionalities, enabling structured control and interaction within the platform.

Students can engage with the system through features such as likes and comments, providing real-time feedback, while administrators manage meal plans and menu items efficiently. At the same time, parents gain visibility into meal schedules, enhancing transparency and trust.

This project also integrates version control and CI/CD practices, ensuring continuous development and automated deployment through GitHub and AWS.


----Main Features of the Project (current version)----

User Authentication
CRUD operations for menu items
GitHub-based version control and CI/CD deployment


----Main Features of the Project (to be continued)----

Role-based views 
CRUD operations for meal plan entries
Calendar-based meal plan viewing and navigation
Menu details including nutrition and allergens
Student interaction through like and comment features


----Features----

The system provides both user and administrative functionalities, supported by core CRUD operations:

*User Authentication
*Secure login and registration using the provided starter project
*Menu Item Management (CRUD)
*Admin (Canteen Manager, Staff) users can create, update, and delete menu items
*Admin can view available menu items
*Meal Plan Calendar
*Users can view meal plans in a structured weekly or monthly calendar format
*Navigation allows access to past and upcoming schedules
*Interactive Feedback System
*Students can like and comment on menu items, enabling real-time feedback
*Information Transparency
*Menu items include descriptions, categories, and availability for informed decision-making
*Role-Based Access Control
*Differentiation between admin (management) and user (view/interact) functionalities

 
----Tech Stack----

The application is developed using a full-stack architecture:

Frontend: React.js
Backend: Node.js, Express.js
Database: MongoDB (Mongoose ODM)
Authentication: JWT-based authentication (provided starter project)
Version Control: GitHub
CI/CD: GitHub Actions (self-hosted runner)
Deployment: AWS EC2
Process Management: PM2
Testing: Mocha, Chai, Sinon


Project Structure

The project is organised into frontend and backend components:


Meal-Plan-App/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   ├── server.js
│   └── test/
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   └── tailwind.config.js    
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── .github/workflows/


----Deployment----

The application is deployed on AWS EC2 and managed using PM2.
CI/CD is implemented using GitHub Actions with a self-hosted runner.

Public URL: http://13.211.227.248

Instance ID: i-08b6cb08cf95bbff5 (MPA)

----Author----

Jaejun Lee
N12218278

Unit: IFN636 Software Lifecycle Management
Queensland University of Technology


----Reference project----
**GitHub link of the starter project: **[https://github.com/nahaQUT/sampleapp_IFQ636.git](https://github.com/nahaQUT/sampleapp_IFQ636.git)


