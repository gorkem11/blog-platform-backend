# Blog Platform Backend / Blog Platformu Backend

---

## Project Purpose / Proje Amacı
**EN:**  
This project is a simple **Blog Platform Backend API** developed using **Node.js**, **Express**, and **TypeScript**.  
It demonstrates the concept of a **relational data model** by creating a relationship between **Post** and **Comment** entities.  
The data is stored **in-memory**.

**TR:**  
Bu proje, **Node.js**, **Express** ve **TypeScript** kullanılarak geliştirilmiş basit bir **Blog Platformu Backend API**’sidir.  
Proje, **ilişkili veri modeli** mantığını öğretmek amacıyla **Post** ve **Comment** yapıları arasında ilişki kurar.  
Veriler **in-memory (bellekte)** saklanır.

---

## Features / Özellikler
**EN:**
- Create, list, and retrieve single **Post**
- Add and list **Comments** (linked to a Post)
- **TypeScript** type safety
- Modular structure with **Express Router**
- Unique ID generation with **UUID**
- Proper HTTP responses (400, 404) for invalid IDs
- **Postman** collection support for testing

**TR:**
- **Post** oluşturma, listeleme, tekil getirme
- **Comment** ekleme ve listeleme (Post’a bağlı)
- **TypeScript** tip güvenliği
- **Express Router** ile modüler yapı
- **UUID** ile benzersiz ID oluşturma
- Hatalı ID’ler için uygun HTTP yanıtları (400, 404)
- **Postman** koleksiyonu ile test desteği

---

## Project Structure / Proje Yapısı

```plaintext
src/
├── data/
│   └── db.ts           # EN: In-memory data stores (posts, comments)
│                       # TR: In-memory veri depoları (posts, comments)
├── models/
│   └── types.ts        # EN: TypeScript interface definitions
│                       # TR: TypeScript interface tanımları
├── routes/
│   └── postRoutes.ts   # EN: Post & Comment endpoints
│                       # TR: Post & Comment endpointleri
└── index.ts            # EN: Express application entry point
│                       # TR: Express uygulama giriş noktası
