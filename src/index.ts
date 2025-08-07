// Express ana modülünü içe aktarma
import express from "express";

// Post & Comment ile ilgili tüm endpointleri barındıran routerı içe aktarma
import postRoutes from "./routes/postRoutes";

// Express uygulaması oluşturma
const app = express();

// Sunucunun dinleyeceği port (gerekirse ortam değişkeni ile override edilir)
const PORT = process.env.PORT || 5050;

// Middleware: Gelen gövede (body) verilerini json olarak parse etmek için
// Not: Bu satır yoksa req.body undefined olur -> 400/500 hataları
app.use(express.json());

// Basit sağlık kontrolü (opsiyonel ama faydalı)
// GET / -> {ok: true} döner; hızlı canlılık testi
app.get("/", (_req, res) => {
    res.json(({ok: true}));
});

// Uygulamayı asıl rotalarını bağlarız
// postRoutes içinde /posts ve /posts/:id/comments vb. yollar var
app.use("/", postRoutes);

// (Opsiyonel) 404 yakalayıcı: Tanımsız rota isteklerinde çalışır
app.use((_req, res) => {
    return res.status(404).json({message: "Rota bulunamadı."});
});

// (Opsiyonel) Basit hata ayıklayıcı middleware (try/catch dışı hatalar için)
app.use(
    // eslint-disable-next-line @typescript-eslint/no-unsed-vars
    (err: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
        console.error("[UNCAUGHT]", err);
        return res.status(500).json({message: "Beklenmeyen bir hata oluştu."});
    }
);

// Sunucuyu uçuşa geçirme
app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor`);  
});

app.use((req, _res, next) => {
  console.log(`[REQ] ${req.method} ${req.url}`);
  next();
});
