import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        My Blog
      </Link>
      <div className="navbar-links">
        <NavLink
          to="/"
          end // 'end' prop để đảm bảo nó chỉ active khi ở chính xác trang chủ
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Trang chủ
        </NavLink>
        <NavLink
          to="/create"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Viết bài mới
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
