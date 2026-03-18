import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="card login">

        <h1>Signin to your PopX account</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <div className="form-group">
          <label>Email Address</label>
          <input type="email" placeholder="Enter email address" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Enter password" />
        </div>

        <button className="btn primary" onClick={() => navigate("/account")}>
          Login
        </button>

      </div>
    </div>
  );
}

export default Login;