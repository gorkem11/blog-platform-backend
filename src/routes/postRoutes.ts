import express, { Request, Response } from "express"; // Express ve tip tanımları
import { v4 as uuidv4 } from "uuid"; // ID üretimi için
import { posts, comments } from "../data/db"; // In-memory veritabanımız
import { Post, Comment } from "../models/types"; // Tip tanımları

const router = express.Router(); // Alt router tanımı (modüler yapı)

// Yeni bir blog gönderisi oluşturma 
router.post("/posts", (req: Request, res: Response) => {
    const { title, content } = req.body; // İstekten gelen veriyi al

    // Eğer başlık veya içerik eksikse kullanıcıyı bilgilendir
    if(!title || !content) {
        return res.status(400).json({message: "Başlık ve içerik zorunludur."});
    }

    // Yeni gönderi nesnesi oluşturur
    const newPost: Post = {
        id: uuidv4(), // Benzersiz ID üret
        title,
        content,
    };

    posts.push(newPost); // In-memory veri dizisine ekle
    res.status(201).json(newPost); // Başarıyla oluşturuldu yanıtı
});

// Tüm gönderileri JSON olarak döndürür
router.get("/posts", (req: Request, res: Response) => {
    res.json(posts); // post dizisini döndürür
});

// ID ile bir gönderiyi getirme
router.get("/posts/:id", (req: Request, res: Response) => {
    const post = posts.find(p => p.id === req.params.id); // ID eşleşmesi ara

    if(!post) {
        return res.status(404).json({message: "Post bulunamadı."});
    }

    res.json(post); // Eşleşen postu döndürür
});

// Bir post'a yorum ekleme
router.get("/posts/:id/comments", (req: Request, res: Response) => {
    const { content } = req.body; // Yorum içeriğini al
    const post = posts.find(p => p.id === req.params.id) // ilgili postu bul

    if (!post) {
        return res.status(404).json({message: "Post bulunamadı."}); 
    }

    if(!content) {
        return res.status(400).json({message: "Yorum içeriği zorunludur."});
    }

    // Yeni yorum nesnesi oluşturma
    const newComment: Comment = {
        id: uuidv4(),
        postId: post.id, // Hangi posta ait olduğu
        content
    };
 
    comments.push(newComment); // Yorumu in-memory veriye ekle
    res.status(201).json(newComment);
} );

// Belirli bir postun yorumlarını getir
router.get("/posts/:id/comments", (req: Request, res: Response) =>{
    const post = posts.find(p => p.id === req.params.id); // İlgili postu bul

    if(!post) {
        return res.status(404).json({message: "Post bulunamadı."});
    }

    const postComments = comments.filter(c => c.postId === post.id); // Bu posta ait yorumları al
    res.json(postComments); // Yorumları döndür
})

// Bu routerı dışa aktarma, böylece index.ts'te kullanılablece
export default router;
