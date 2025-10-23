import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px 30px", background: "#222", color: "#fff" }}>
      <h2 style={{ cursor: "pointer" }} onClick={() => navigate("/")}> Blog Management</h2>
      <div>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            marginRight: "20px",
            color: isActive ? "Green" : "white",
          })}
        >
          Trang chủ
        </NavLink>
        <button onClick={() => navigate("/create")}> Viết bài</button>
      </div>
    </nav>
  );
}
