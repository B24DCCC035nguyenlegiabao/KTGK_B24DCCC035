import { Post } from "../types/Post";

export const initialPosts: Post[] = [
  {
    id: "1",
    title: "Khám phá React 19: Những tính năng mới",
    author: "Admin",
    content:
      "React 19 hứa hẹn mang đến nhiều cải tiến về hiệu suất và API mới. Một trong những tính năng đáng chú ý nhất là... (đây là nội dung đầy đủ, dài hơn 50 ký tự để test validation).",
    thumbnailUrl: "https://via.placeholder.com/300x200?text=React+19",
    category: "Công nghệ",
    publishedDate: "2025-10-20",
  },
  {
    id: "2",
    title: "10 địa điểm du lịch Đà Nẵng không thể bỏ qua",
    author: "Travel Blogger",
    content:
      "Đà Nẵng, thành phố của những cây cầu, luôn là điểm đến hấp dẫn. Cùng khám phá 10 địa điểm hot nhất... (đây là nội dung đầy đủ, dài hơn 50 ký tự để test validation).",
    thumbnailUrl: "https://via.placeholder.com/300x200?text=Da+Nang",
    category: "Du lịch",
    publishedDate: "2025-10-18",
  },
  {
    id: "3",
    title: "Cách làm Phở Bò Hà Nội chuẩn vị",
    author: "Đầu bếp Việt",
    content:
      "Phở bò là tinh hoa ẩm thực Hà Nội. Để có một bát phở ngon, nước dùng là quan trọng nhất. Bí quyết nằm ở... (đây là nội dung đầy đủ, dài hơn 50 ký tự để test validation).",
    thumbnailUrl: "https://via.placeholder.com/300x200?text=Pho+Bo",
    category: "Ẩm thực",
    publishedDate: "2025-10-15",
  },
  {
    id: "4",
    title: "TypeScript: Tại sao nên dùng?",
    author: "Dev Senior",
    content:
      "TypeScript giúp phát hiện lỗi sớm, code dễ bảo trì hơn và hỗ trợ tốt cho lập trình hướng đối tượng. Đây là lý do... (đây là nội dung đầy đủ, dài hơn 50 ký tự để test validation).",
    thumbnailUrl: "https://via.placeholder.com/300x200?text=TypeScript",
    category: "Công nghệ",
    publishedDate: "2025-10-12",
  },
  {
    id: "5",
    title: "5 Mẹo quản lý thời gian hiệu quả",
    author: "Chuyên gia Life Coach",
    content:
      "Bạn có cảm thấy mình luôn bận rộn nhưng không hiệu quả? Hãy thử áp dụng 5 mẹo sau đây để làm chủ thời gian... (đây là nội dung đầy đủ, dài hơn 50 ký tự để test validation).",
    thumbnailUrl: "https://via.placeholder.com/300x200?text=Time+Mgmt",
    category: "Đời sống",
    publishedDate: "2025-10-10",
  },
];
