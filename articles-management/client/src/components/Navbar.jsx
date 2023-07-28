import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar navbar-light bg-light shadow shadow-lg">
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <Link to="/" className="navbar-brand">
            <p>Music Page</p>
          </Link>
          <Link to="/" className="mx-2">
            <p>Trang chủ</p>
          </Link>
          <Link to="/login" className="mx-2">
            <p>Đăng nhập</p>
          </Link>
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
