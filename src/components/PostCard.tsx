import { Link } from "react-router-dom";
import { Post } from "../types/Post";

interface PostCardProps {
  post: Post;
  onDelete: (id: string) => void;
}

const PostCard = ({ post, onDelete }: PostCardProps) => {
  const shortDescription =
    post.content.length > 100
      ? post.content.substring(0, 100) + "..."
      : post.content;

  return (
    <div className="post-card">
      <img src={post.thumbnailUrl} alt={post.title} className="card-img" />
      <div className="card-content">
        <h3 className="card-title">{post.title}</h3>
        <p className="card-meta">
          Tác giả: {post.author} | Ngày: {post.publishedDate}
        </p>
        <p className="card-desc">{shortDescription}</p>
        <div className="card-actions">
          <Link to={`/posts/${post.id}`} className="btn btn-secondary">
            Đọc thêm
          </Link>
          <button onClick={() => onDelete(post.id)} className="btn btn-danger">
            Xóa
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
