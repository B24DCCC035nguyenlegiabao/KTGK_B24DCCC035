export interface Post {
  id: string;
  title: string;
  author: string;
  content: string;
  thumbnailUrl: string;
  category: "Công nghệ" | "Du lịch" | "Ẩm thực" | "Đời sống" | "Khác";
  publishedDate: string; // Định dạng YYYY-MM-DD
}
