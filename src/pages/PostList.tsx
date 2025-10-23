import { useState } from "react";
import type { Post } from "../types/Post";
import PostCard from "../components/PostCard";

export default function PostList() {
  const [posts] = useState<Post[]>([
    {
      id: 1,
      title: "Lập trình React cơ bản",
      author: "Ngô Thành Đạt",
      thumbnail: "https://picsum.photos/400/200?random=1",
      content: "Bài viết giới thiệu về React và cách hoạt động...",
      category: "Công nghệ",
      date: "2025-10-23",
    },
    {
      id: 2,
      title: "Du lịch Đà Nẵng Mùa Thu",
      author: "Trần lan Anh",
      thumbnail: "https://picsum.photos/400/200?random=2",
      content: "Một chuyến đi tuyệt vời đến Đà Nẵng..",
      category: "Du lịch",
      date: "2025-10-21",
    },
  ]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Danh sách bài viết ({posts.length})</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "15px" }}>
        {posts.map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
