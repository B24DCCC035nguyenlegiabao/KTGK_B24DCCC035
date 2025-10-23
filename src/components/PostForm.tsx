export default function PostForm() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>📝 Viết bài mới</h2>
      <form style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: 600 }}>
        <input type="text" placeholder="Tiêu đề bài viết" required minLength={10} />
        <input type="text" placeholder="Tác giả" required minLength={3} />
        <input type="text" placeholder="URL ảnh thumbnail" />
        <select>
          <option>Công nghệ</option>
          <option>Du lịch</option>
          <option>Ẩm thực</option>
          <option>Đời sống</option>
          <option>Khác</option>
        </select>
        <textarea placeholder="Nội dung bài viết" rows={10} required minLength={50}></textarea>
        <div>
          <button type="submit">Đăng bài</button>
          <button type="button" style={{ marginLeft: 10 }}>Hủy</button>
        </div>
      </form>
    </div>
  );
}
