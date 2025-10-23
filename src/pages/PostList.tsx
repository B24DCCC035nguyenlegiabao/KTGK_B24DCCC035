import { useState } from "react";
import { Link } from "react-router-dom";
import { Post } from "../types/Post";
import PostCard from "../components/PostCard";

interface PostListProps {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

const PostList = ({ posts, setPosts }: PostListProps) => {
  const [filter, setFilter] = useState("");

  const handleDelete = (id: string) => {
    if (window.confirm("Bạn có chắc muốn xóa bài viết này?")) {
      setPosts(posts.filter((post) => post.id !== id));
    }
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="post-list-container">
      <div className="post-list-header">
        <h1>Danh sách bài viết ({filteredPosts.length})</h1>
        <div className="controls">
          <input
            type="text"
            placeholder="Tìm theo tiêu đề..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="filter-input"
          />
          <Link to="/create" className="btn btn-primary">
            Viết bài mới
          </Link>
        </div>
      </div>
      <div className="post-grid">
        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default PostList;
