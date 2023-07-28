const LoginPage = () => {
  return (
    <>
      <div className="mt-5 pt-5 w-100 mx-auto d-flex justify-content-evenly">
        <div className="mt-5 pt-5 w-100">
          <h1 className="text-primary display-4 fw-bold">flexbook</h1>
          <p className="w-75 fs-4">
            Flexbook helps you connect and share with the people in your life.
          </p>
        </div>
        <div className="w-100" style={{ maxWidth: "28rem" }}>
          <div className="bg-white shadow shadow-lg rounded px-3 py-4 w-100">
            <div className="my-3">
              <input type="text" className="form-control" placeholder="Email" />
            </div>
            <div className="my-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <button className="btn btn-primary w-100 my-3">Login</button>
            <p className="text-center text-primary">Forgot password?</p>
            <hr />
            <div className="text-center my-4">
              <button className="btn btn-success btn-lg">
                Create new account
              </button>
            </div>
          </div>
          <div className="my-5 pb-5 text-center">
            <p>
              <span className="fw-bold">Create a Page</span> for celebrity, band
              or business.
            </p>
          </div>
        </div>
      </div>
      <footer
        className="bg-white w-100 p-4 shadow shadow-lg start-0"
        style={{ position: "fixed", bottom: 0 }}
      >
        <div className="container mx-auto px-1">
          <div className="d-flex">
            <p className="mx-2 fs-7 mb-0">English(UK)</p>
            <p className="mx-2 fs-7 mb-0">Tiếng Việt</p>
            <p className="mx-2 fs-7 mb-0">中文(台灣)</p>
            <p className="mx-2 fs-7 mb-0">한국어</p>
            <p className="mx-2 fs-7 mb-0">日本語</p>
          </div>
          <hr />
          <div className="d-flex">
            <p className="mx-2 fs-7 mb-0">Sign up</p>
            <p className="mx-2 fs-7 mb-0">Login</p>
            <p className="mx-2 fs-7 mb-0">Messenger</p>
            <p className="mx-2 fs-7 mb-0">Facebook Lite</p>
            <p className="mx-2 fs-7 mb-0">Watch</p>
          </div>
          <p className="mx-2 fs-7 mt-4">Facebook@2023</p>
        </div>
      </footer>
    </>
  );
};

export default LoginPage;
