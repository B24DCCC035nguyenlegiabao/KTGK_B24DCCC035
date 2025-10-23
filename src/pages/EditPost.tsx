import { useParams } from "react-router-dom";
import PostForm from "../components/PostForm";

export default function EditPost() {
  const { id } = useParams();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Chỉnh sửa bài viết #{id}</h2>
      <PostForm />
    </div>
  );
}
