import type { Post } from "../types/Post";
import { useNavigate } from "react-router-dom";

export default function PostCard({ post }: { post: Post }) {
  const navigate = useNavigate();

  return (
    <div style={{ border: "1px solid #ccc", borderRadius: 8, padding: 10 }}>
      <img src={post.thumbnail} alt={post.title} width="100%" height="150" style={{ objectFit: "cover" }} />
      <h3>{post.title}</h3>
      <p><b>Tác giả:</b> {post.author}</p>
      <p><b>Ngày:</b> {post.date}</p>
      <p>{post.content.substring(0, 100)}...</p>
      <button onClick={() => navigate(`/posts/${post.id}`)}>Đọc thêm</button>
    </div>
  );
}

