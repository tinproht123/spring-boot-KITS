import { useState, useEffect } from "react";
import { fetchAuthorList } from "../../store/features/authorSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AuthorPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [deletedId, setDeletedId] = useState();

  const { isLoading, authors, isError, errMsg } = useSelector(
    (state) => state.author
  );
  const isLogin = localStorage.getItem("isLogin");

  if (!isLogin) {
    navigate("/login");
  }
  useEffect(() => {
    dispatch(fetchAuthorList());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (isError) {
    toast.error(errMsg);
    return <div className="text-danger">Error</div>;
  }

  return (
    <div className="container">
      <button className="btn btn-success mb-4">Thêm mới</button>
      <table className="table table-striped align-middle text-center">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Ảnh</th>
            <th scope="col">Tên</th>
            <th scope="col">#</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((item) => (
            <tr key={item.id}>
              <th>{item.id}</th>
              <th>
                <img
                  src={item.imagePath}
                  alt="image"
                  className="img-fluid"
                  style={{
                    maxWidth: "200px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
              </th>
              <th>{item.name}</th>
              <th>
                <button
                  className="btn text-success"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="Edit"
                >
                  <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
                </button>
                <button
                  className="btn text-danger"
                  data-bs-toggle="modal"
                  data-bs-placement="bottom"
                  title="Delete"
                  data-bs-target="#exampleModal"
                  onClick={() => {
                    setDeletedId(item.id);
                  }}
                >
                  <FontAwesomeIcon icon="fa-solid fa-trash" />
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered p-3">
          <div className="modal-content">
            <div className="modal-body h6">
              Bạn có chắc muốn xóa thông tin này chứ?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Thoát
              </button>
              <button type="button" className="btn btn-danger">
                Xóa
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorPage;
