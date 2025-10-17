# CookBook — Static Website Prototype

### Assignment 3 - UI look & feel and Programming to use AI (Botpress) | Phase 1: Static Website

CookBook is a **ingredient-based recipe platform** designed to help users explore cuisines, view popular dishes, visualize recipe data, and interact via a chatbot.  
This static prototype represents the **UI and structure** of the final dynamic web application to be deployed on Azure.

---

## Live Demo (Static Prototype)
> 

---

## Overview

| Feature |                 | Description |
|----------|                |-------------|
| **Home Page** |           | Overview of the CookBook project and navigation to other sections. |
| **Charts Page** |         | Displays sample visualizations using Chart.js (e.g., recipe trends by cuisine, difficulty, and month). |
| **CRUD Page (Preview)** | | Static mock-up of Create, Read, Update, Delete operations for managing recipes. |
| **Botpress Chatbot** |    | Embedded chatbot for user assistance and feedback. |
| **About Us Page** |       | Team member details, GitHub link, and project description. |
| **Dark/Light Mode** |     | UI toggle to improve accessibility and design contrast. |

---

## Project Structure


CookBook_Static/
├── index.html
├── charts.html
├── crud.html
├── about.html
├── /css
│ └── styles.css
├── /js
│ ├── charts.js
│ └── main.js
├── /assets
│ ├── images/
│ └── icons/
└── README.md

---


## Team Members

Name	                Responsibilities
Shivani Jagannatham		Project structure, navigation, dark mode, overall UI design
Member 2	            Chart.js graphs and statistical layout
Member 3	            Botpress integration, feedback form
Member 4	            About Us page, README, report consolidation

---

## Tech Stack

Area	                Technology
Frontend	            HTML5, CSS3, JavaScript (Vanilla)
Charts & Visualization	Chart.js
Chatbot	                Botpress (Web Embed)
Version Control	        Git + GitHub
Deployment (Static)	    GitHub Pages / Azure Static Web Apps

---

## Static Prototype → Dynamic Conversion Plan

This static prototype will evolve into the CookBook_Dynamic web application (Phase 2).
The final app will include:

Full MVC architecture (Node.js + Express + MongoDB)

CRUD operations for recipes

API integration (Spoonacular)

Azure App Service deployment

Persistent database and user management

---