# 🍽️ Restaurant Menu API

A simple RESTful API built with Node.js, Express, and MongoDB to manage a restaurant's menu.

---

## 🔧 Tech Stack
- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose
- Dotenv

---

## 📦 Features (CRUD APIs)

| Method | Endpoint              | Description               |
|--------|------------------------|---------------------------|
| GET    | `/api/menu`           | Get all menu items        |
| POST   | `/api/menu`           | Add a new menu item       |
| PUT    | `/api/menu/:id`       | Update a menu item        |
| DELETE | `/api/menu/:id`       | Delete a menu item        |

---

## 🧑‍🍳 Sample Data Structure

```json
{
  "name": "Burger",
  "price": 99,
  "category": "Fast Food",
  "description": "Veggie Burger"
}
