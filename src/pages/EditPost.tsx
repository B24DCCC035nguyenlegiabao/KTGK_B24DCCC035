import { useParams, useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm";
import { Post } from "../types/Post";

interface EditPostProps {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

const EditPost = ({ posts, setPosts }: EditPostProps) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const postToEdit = posts.find((p) => p.id === id);

  const handleEdit = (data: Post) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => (post.id === id ? data : post))
    );
    alert("Cập nhật thành công!");
    navigate(`/posts/${id}`);
  };

  if (!postToEdit) {
    return <div>Không tìm thấy bài viết.</div>;
  }

  return (
    <div>
      <h1>Chỉnh sửa bài viết</h1>
      <PostForm mode="edit" initialData={postToEdit} onSubmit={handleEdit} />
    </div>
  );
};

export default EditPost;
