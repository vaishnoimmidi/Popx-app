import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="card register">
        <h1>Create your PopX account</h1>

        <div className="form-group">
          <label>Full Name*</label>
          <input type="text" placeholder="Marry Doe" />
        </div>

        <div className="form-group">
          <label>Phone number*</label>
          <input type="text" placeholder="Marry Doe" />
        </div>

        <div className="form-group">
          <label>Email address*</label>
          <input type="email" placeholder="Marry Doe" />
        </div>

        <div className="form-group">
          <label>Password*</label>
          <input type="password" placeholder="Marry Doe" />
        </div>

        <div className="form-group">
          <label>Company name</label>
          <input type="text" placeholder="Marry Doe" />
        </div>

        <p className="agency">Are you an Agency?</p>

        <div className="radio">
          <label><input type="radio" name="agency" /> Yes</label>
          <label><input type="radio" name="agency" /> No</label>
        </div>

        <button className="btn primary" onClick={() => navigate("/account")}>
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Register;