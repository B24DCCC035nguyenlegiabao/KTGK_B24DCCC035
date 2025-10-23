import { useParams, useNavigate } from "react-router-dom";

export default function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Chi tiết bài viết #{id}</h2>
      <p>Hiển thị nội dung đầy đủ của bài viết...</p>
      <button onClick={() => navigate(-1)}>⬅️ Quay lại</button>
      <button onClick={() => navigate(`/posts/edit/${id}`)}>✏️ Chỉnh sửa</button>
    </div>
  );
}
