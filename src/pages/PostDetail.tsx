import { useParams, useNavigate, Link } from "react-router-dom";
import { Post } from "../types/Post";

interface PostDetailProps {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

const PostDetail = ({ posts, setPosts }: PostDetailProps) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <div>
        Không tìm thấy bài viết. <Link to="/">Quay lại</Link>
      </div>
    );
  }

  const handleDelete = () => {
    if (window.confirm("Bạn có chắc muốn xóa bài viết này?")) {
      setPosts(posts.filter((p) => p.id !== id));
      navigate("/"); // Chuyển về trang chủ sau khi xóa
    }
  };

  return (
    <div className="post-detail-container">
      <div className="post-detail-actions">
        <button onClick={() => navigate("/")} className="btn btn-secondary">
          &larr; Quay lại
        </button>
        <div>
          <Link to={`/posts/edit/${post.id}`} className="btn btn-primary">
            Chỉnh sửa
          </Link>
          <button onClick={handleDelete} className="btn btn-danger">
            Xóa bài viết
          </button>
        </div>
      </div>
      <h1 className="post-detail-title">{post.title}</h1>
      <p className="post-detail-meta">
        <strong>Tác giả:</strong> {post.author} | <strong>Ngày đăng:</strong>{" "}
        {post.publishedDate} | <strong>Thể loại:</strong> {post.category}
      </p>
      <img
        src={post.thumbnailUrl}
        alt={post.title}
        className="post-detail-img"
      />
      <div className="post-detail-content">
        {/* Dùng pre-wrap để giữ nguyên định dạng xuống dòng của textarea */}
        <p style={{ whiteSpace: "pre-wrap" }}>{post.content}</p>
      </div>
    </div>
  );
};

export default PostDetail;
