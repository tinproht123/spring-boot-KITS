import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinkStyle = ({ isActive }) => ({
    fontWeight: isActive && "500",
  });

  const isLogin = useSelector((state) => state.auth.isLogin);

  return (
    <div className="navbar navbar-light bg-light shadow shadow-lg">
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <h4>Music Page</h4>
          <NavLink to="/" className="mx-2" style={navLinkStyle}>
            <p>Trang chủ</p>
          </NavLink>
          {isLogin ? (
            <>
              <NavLink to="/genres" className="mx-2" style={navLinkStyle}>
                <p>Thể loại</p>
              </NavLink>
              <NavLink to="/authors" className="mx-2" style={navLinkStyle}>
                <p>Tác giả</p>
              </NavLink>
              <NavLink to="/posts" className="mx-2" style={navLinkStyle}>
                <p>Bài viêt</p>
              </NavLink>
            </>
          ) : (
            <NavLink to="/login" className="mx-2" style={navLinkStyle}>
              <p>Đăng nhập</p>
            </NavLink>
          )}
        </div>
        <form className="input-group d-flex w-auto">
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
        </form>
      </div>
    </div>
  );
};

export default Navbar;
