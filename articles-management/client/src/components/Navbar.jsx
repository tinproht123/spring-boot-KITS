import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinkStyle = ({ isActive }) => ({
    fontWeight: isActive && "700",
  });

  const isLogin = localStorage.getItem("isLogin");

  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light shadow shadow-lg">
      <div className="container-fluid">
        <h4 className="navbar-brand">Music Page</h4>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <NavLink to="/" className="mx-2 py-2 nav-item" style={navLinkStyle}>
              <p>Trang chủ</p>
            </NavLink>
            {isLogin ? (
              <>
                <NavLink
                  to="/genres"
                  className="mx-2 py-2 nav-item"
                  style={navLinkStyle}
                >
                  <p>Thể loại</p>
                </NavLink>
                <NavLink
                  to="/authors"
                  className="mx-2 py-2 nav-item"
                  style={navLinkStyle}
                >
                  <p>Tác giả</p>
                </NavLink>
                <NavLink
                  to="/posts"
                  className="mx-2 py-2 nav-item"
                  style={navLinkStyle}
                >
                  <p>Bài viêt</p>
                </NavLink>
              </>
            ) : (
              <NavLink
                to="/login"
                className="mx-2 py-2 nav-item"
                style={navLinkStyle}
              >
                <p>Đăng nhập</p>
              </NavLink>
            )}
          </ul>
          <form className="d-flex justify-content-end">
            <div className="input-group">
              <input
                className="form-control rounded text-dark"
                type="search"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <span className="input-group-text border-0 btn" id="search-addon">
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
