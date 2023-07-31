import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllGenres } from "../../store/features/genreSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const GenrePage = () => {
  const { genres, isLoading, isError, errMsg } = useSelector(
    (state) => state.genre
  );
  const isLogin = localStorage.getItem("isLogin");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!isLogin) {
    navigate("/login");
  }

  useEffect(() => {
    dispatch(fetchAllGenres());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    toast.error(errMsg);
    return <div>Error</div>;
  }

  return (
    <div className="container">
      <button className="btn btn-success mb-4">Thêm mới</button>
      <table className="table table-striped align-center text-center">
        <thead>
          <th scope="col">ID</th>
          <th scope="col">Tên</th>
          <th scope="col">Bài viết</th>
        </thead>
        <tbody>
          {genres.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                <a href="">Links</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GenrePage;
