// Post tipi: Her blog yazısı için temel yapı 
export interface Post {
    id: string;
    title: string;
    content: string;
}

// Comment tipi: Belirli bir post'a yapılmış yorumlar için yapı
export interface Comment {
    id: string;
    postId: string;
    content: string;
}