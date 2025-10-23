import { useState } from "react";
import type { Post } from "../types/Post";
import PostCard from "../components/PostCard";

export default function PostList() {
  const [posts] = useState<Post[]>([
    {
      id: 1,
      title: "Lập trình React cơ bản",
      author: "Nguyễn Lê Gia Bảo",
      thumbnail: "https://picsum.photos/400/200?random=1",
      content: "Bài viết giới thiệu về React và cách hoạt động...",
      category: "Công nghệ thông tin ",
      date: "2025-15-23",
    },
    {
      id: 2,
      title: "Du lịch Hà Nội Mùa Thu",
      author: "Đào Gia Huy ",
      thumbnail: "https://picsum.photos/400/200?random=2",
      content: "Một chuyến đi tuyệt vời đến Hà Nội ..",
      category: "Du lịch",
      date: "2023-5-11",
    },
    {
      id: 3,
      title: "Thiên Dường ẩm thực ",
      author: "Đào mạnh dũng ",
      thumbnail: "https://picsum.photos/400/200?random=4",
      content: "Thieen dường của đồ ăn  ..",
      category: "ẩm thực",
      date: "2023-7-4",
    },
  ]);

  return (
    <div style={{ padding: "30px" }}>
      <h2>Danh sách bài viết ({posts.length})</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {posts.map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
