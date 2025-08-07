# Blog Platform Backend

## Project Purpose
This project is a simple **Blog Platform Backend API** developed using **Node.js**, **Express**, and **TypeScript**.  
It demonstrates the concept of a **relational data model** by creating a relationship between **Post** and **Comment** entities.  
The data is stored **in-memory**.

---

## Features
- Create, list, and retrieve single **Post**
- Add and list **Comments** (linked to a Post)
- **TypeScript** type safety
- Modular structure with **Express Router**
- Unique ID generation with **UUID**
- Proper HTTP responses (400, 404) for invalid IDs
- **Postman** collection support for testing

---

## Project Structure

```plaintext
src/
├── data/
│   └── db.ts           # In-memory data stores (posts, comments)
├── models/
│   └── types.ts        # TypeScript interface definitions
├── routes/
│   └── postRoutes.ts   # Post & Comment endpoints
└── index.ts            # Express application entry point


---
# Blog Platformu Backend

## Proje Amacı 
Bu proje; **Node.js**, **Express** ve **TypesScript** kullanılarak geliştirilmiş basit bir **Blog Platformu API**'sidir.
Proje, **ilişkili veri modeli** mantığını öğretmek amacıyla **Post** ve  **Comment** yapıları arasında ilişki kurar
Veriler **in-memory**'de saklanır.

---

## Özeliikler
- **Post** oluşturma, listeleme, tekil getirme
- **Comment** ekleme ve listeleme (Post'a bağlı)
- **TypeScript tip güvenliği** 
- **Express Router** ile modüler yapı
- **UUID** ile benzersi ID oluşturma
- Hatalı ID'ler için uygun HTTP yanıtları (400, 404)
- Postman koleksiyonu ile test desteği 

--- 

## Proje Yapısı 

```plaintext
src/
├── data/
│   └── db.ts           # In-memory veri depoları (posts, comments)
├── models/
│   └── types.ts        # TypeScript interface tanımları
├── routes/
│   └── postRoutes.ts   # Post & Comment endpointleri
└── index.ts            # Express uygulama giriş noktası