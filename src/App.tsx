import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Post } from "./types/Post";
import { initialPosts } from "./data/mockPosts";
import MainLayout from "./layouts/MainLayout";
import PostList from "./pages/PostList";
import PostDetail from "./pages/PostDetail";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import "./App.css"; // Sẽ thêm CSS ở file index.css

function App() {
  // Quản lý state tập trung tại App
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Trang chủ */}
          <Route
            index
            element={<PostList posts={posts} setPosts={setPosts} />}
          />
          <Route
            path="/posts"
            element={<PostList posts={posts} setPosts={setPosts} />}
          />

          {/* Trang Tạo bài */}
          <Route path="/create" element={<CreatePost setPosts={setPosts} />} />
          <Route
            path="/posts/create"
            element={<CreatePost setPosts={setPosts} />}
          />

          {/* Trang Chi tiết */}
          <Route
            path="/posts/:id"
            element={<PostDetail posts={posts} setPosts={setPosts} />}
          />

          {/* Trang Chỉnh sửa */}
          <Route
            path="/posts/edit/:id"
            element={<EditPost posts={posts} setPosts={setPosts} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
