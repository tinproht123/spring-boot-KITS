import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const taskButtons = [
  {
    icon: <FontAwesomeIcon icon="fa-solid fa-ellipsis" />,
  },
  {
    icon: <FontAwesomeIcon icon="fa-solid fa-comment" />,
  },
  {
    icon: <FontAwesomeIcon icon="fa-solid fa-bell" />,
  },
  {
    icon: <FontAwesomeIcon icon="fa-solid fa-caret-down" />,
  },
];

const Navbar = () => {
  return (
    <div className="position-fixed top-0 start-0 py-1 px-2 shadow shadow-lg border border-danger w-100">
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex">
          <img
            src="/imgs/fb-logo.png"
            alt="Flexbook Logo"
            width="50"
            height="50"
          />
          <div className="input-group border rounded-pill ms-1 bg-secondary">
            <span className="input-group-text">
              <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </span>
            <input
              type="text"
              className="form-control form-control-sm fs-7 border-start-0 bg-light"
              placeholder="Search Flexbook"
              style={{ width: "12rem" }}
            />
          </div>
        </div>
        <div className="d-flex center-btns">
          <button className="btn px-4 mx-3 border rounded border-0">
            <FontAwesomeIcon icon="fa-solid fa-house" size="xl" />
          </button>
          <button className="btn px-4 mx-3 border rounded border-0">
            <FontAwesomeIcon icon="fa-solid fa-store" size="xl" />
          </button>
          <button className="btn px-4 mx-3 border rounded border-0">
            <FontAwesomeIcon icon="fa-solid fa-users" size="xl" />
          </button>
          <button className="btn px-4 mx-3 border rounded border-0">
            <FontAwesomeIcon icon="fa-solid fa-gamepad" size="xl" />
          </button>
        </div>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center">
            <img
              src="/imgs/the_batman.jpg"
              className="border rounded-circle"
              style={{ objectFit: "cover" }}
              alt=""
              width="50"
              height="50"
            />
            <p className="mb-0 ms-2">Minh Anh</p>
          </div>
          {taskButtons.map((item, idx) => (
            <button
              key={idx}
              className="btn rounded rounded-circle mx-2"
              style={{ backgroundColor: "#eee", width: "40px", height: "40px" }}
            >
              {item.icon}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
