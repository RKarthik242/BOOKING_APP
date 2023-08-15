import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data});
      navigate("/")
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };


  return (
    <div>
        <div className="logo-container">
            <Link to="/" style={{ color: "inherit", textDecoration: "none", fontSize: "30px" }}>
                <span className="logo">Rkbooking</span>
            </Link>
        </div>
        <div className="login">
            <div className="lContainer">
                <input
                    type="text"
                    placeholder="username"
                    id="username"
                    onChange={handleChange}
                    className="lInput"
                />
                <input
                    type="password"
                    placeholder="password"
                    id="password"
                    onChange={handleChange}
                    className="lInput"
                />
                <button disabled={loading} onClick={handleClick} className="lButton">
                Login
                </button>
                {error && <span>{error.message}</span>}
            </div>
        </div>
    </div>
    
  );
};

export default Login;