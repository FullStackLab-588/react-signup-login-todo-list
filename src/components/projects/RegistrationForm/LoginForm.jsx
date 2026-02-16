import { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { SignupForm } from "./RegistrationForm"; // your existing signup form
import { Todo } from "../todo/Todo";

export const AuthPage = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Store login data for demo
  const [users, setUsers] = useState([]);

  // Load saved users from localStorage
  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(savedUsers);
  }, []);

  // Update localStorage when users change
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  if (isLoggedIn) {
    return (
      <div >
        <div className="auth-box">
         
          <Todo/>
  <button
  onClick={() => setIsLoggedIn(false)}
  style={{
    width: "120px",
    padding: "6px 12px",
    marginTop: "15px",
    backgroundColor: "#1d4ed8", // darker blue like signup
    border: "none",
    borderRadius: "6px",
    color: "white",
    fontWeight: "600",
    fontSize: "13px",
    cursor: "pointer",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    transition: "0.3s ease"
  }}
  onMouseEnter={(e) => (e.target.style.backgroundColor = "#2563eb")}
  onMouseLeave={(e) => (e.target.style.backgroundColor = "#1d4ed8")}
>
  Logout
</button>
        </div>
      </div>
    );
  }

  return (
    <div className="container-login">
      <div className="auth-box">
        {!showSignup ? (
          <LoginForm users={users} onLogin={() => setIsLoggedIn(true)} onRegisterClick={() => setShowSignup(true)} />
        ) : (
          <>
            <SignupForm onAddUser={(user) => setUsers([...users, user])} />
            <p className="switch-text">
              Already have an account?{" "}
              <span className="switch-btn" onClick={() => setShowSignup(false)}>
                Login Here
              </span>
            </p>
          </>
        )}
      </div>

      <style>{`
        .container {
          height: 100%;
          max-width : 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #0f172a;
          padding: 20px;
          font-family: Arial;
        }
         .container-login {
          min-height: 100vh;
          max-width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #0f172a;
          padding: 20px;
          font-family: Arial;
        }

        .auth-box {
          width: 100%;
          max-width: 450px;
          background: #111827;
          padding: 25px;
          border-radius: 10px;
          box-shadow: 0 0 20px rgba(0,0,255,0.4);
          color: white;
          display: flex;
          flex-direction: column;
        }

        .switch-text {
          text-align: center;
          margin-top: 15px;
          font-size: 13px;
        }
          .container-login {
          height: 100%;
          max-width : 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #0f172a;
          padding: 20px;
          font-family: Arial;
        }

        .switch-btn {
          color: #3b82f6;
          font-weight: bold;
          cursor: pointer;
        }

        .switch-btn:hover {
          text-decoration: underline;
        }

        .submit-btn {
          width: 100%;
          padding: 10px;
          margin-top: 15px;
          background: #2563eb;
          border: none;
          border-radius: 5px;
          color: white;
          font-weight: bold;
          cursor: pointer;
        }

        .submit-btn:hover {
          background: #1d4ed8;
        }

        @media (max-width: 480px) {
          .auth-box {
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
};

// ---------------- Login Form ----------------
const LoginForm = ({ users, onLogin, onRegisterClick }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.email) newErrors.email = "Email required";
    if (!formData.password) newErrors.password = "Password required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    setLoginError("");

    if (Object.keys(validationErrors).length === 0) {
      const user = users.find(
        (u) => u.email === formData.email && u.password === formData.password
      );
      if (user) {
        onLogin();
      } else {
        setLoginError("Email or Password is incorrect");
      }
    }
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <span className="error">{errors.email}</span>

        <div className="input-group">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <span
            className="icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <span className="error">{errors.password}</span>
        <span className="error">{loginError}</span>

        <button type="submit" className="submit-btn">
          Login
        </button>
      </form>

      <p className="switch-text">
        Don't have an account?{" "}
        <span className="switch-btn" onClick={onRegisterClick}>
          Register Account
        </span>
      </p>

      <style>{`
        input {
          width: 100%;
          padding: 10px;
          margin-top: 8px;
          border-radius: 5px;
          border: 1px solid #1e40af;
          background: #0f172a;
          color: white;
          box-sizing: border-box;
        }

        input:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 5px #3b82f6;
        }

        .input-group {
          position: relative;
        }

        .input-group input {
          padding-right: 40px;
        }

        .icon {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
          color: #3b82f6;
          font-size: 18px;
        }

        .error {
          color: #f87171;
          font-size: 12px;
        }
      `}</style>
    </>
  );
};