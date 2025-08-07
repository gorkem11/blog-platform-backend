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