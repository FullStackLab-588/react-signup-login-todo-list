import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { TermsPrivacy } from "./TermsAndPrivacy";
import {AuthPage } from "./LoginForm";

export const SignupForm = ({ onAddUser }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First Name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";

    if (!formData.email) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Invalid Email";

    if (!formData.phone) newErrors.phone = "Phone is required";
    else if (!/^[0-9]{10,15}$/.test(formData.phone)) newErrors.phone = "Invalid Phone Number";

    if (!formData.password) newErrors.password = "Password required";
    else if (formData.password.length < 6) newErrors.password = "Minimum 6 characters";

    if (!formData.confirmPassword) newErrors.confirmPassword = "Confirm Password required";
    else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";

    if (!formData.agree) newErrors.agree = "You must agree to Terms & Privacy";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Add user to parent
      if (onAddUser) {
        const newUser = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
        };
        onAddUser(newUser);
      }
      // < AuthPage/>

      alert("Account Created Successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        agree: false,
      });
      setErrors({});
      setShowPassword(false);
      setShowConfirmPassword(false);
    }
  };

  return (
    <div className="signup-form">
      {/* Live Preview */}
      <div className="preview">
        <h3>Live Preview</h3>
        <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Phone:</strong> {formData.phone}</p>
        <p><strong>Password:</strong> {"*".repeat(formData.password.length)}</p>
      </div>

      <form onSubmit={handleSubmit}>
        <h2>Create Account</h2>

        <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange}/>
        <span className="error">{errors.firstName}</span>

        <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange}/>
        <span className="error">{errors.lastName}</span>

        <input type="text" name="email" placeholder="Email" value={formData.email} onChange={handleChange}/>
        <span className="error">{errors.email}</span>

        <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange}/>
        <span className="error">{errors.phone}</span>

        {/* Password */}
        <div className="input-group">
          <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" value={formData.password} onChange={handleChange}/>
          <span className="icon" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <span className="error">{errors.password}</span>

        {/* Confirm Password */}
        <div className="input-group">
          <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange}/>
          <span className="icon" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <span className="error">{errors.confirmPassword}</span>

        <label className="checkbox">
  <input
    type="checkbox"
    name="agree"
    checked={formData.agree}
    onChange={handleChange}
  />
  <TermsPrivacy />
</label>
        <span className="error">{errors.agree}</span>

        <button type="submit" className="submit-btn">Sign Up</button>
      </form>

      <h3 className="footer">Created by Jhangir using React © 2026</h3>

      <style>{`
        .signup-form { display: flex; flex-direction: column; }
        input { width: 100%; padding: 10px; margin-top: 8px; border-radius:5px; border:1px solid #1e40af; background:#0f172a; color:white; box-sizing:border-box; }
        input:focus { outline:none; border-color:#3b82f6; box-shadow:0 0 5px #3b82f6; }
        .input-group { position:relative; }
        .input-group input { padding-right:40px; }
        .icon { position:absolute; right:12px; top:50%; transform:translateY(-50%); cursor:pointer; color:#3b82f6; font-size:18px; }
        .error { color:#f87171; font-size:12px; }
        .checkbox { display:flex; align-items:center; gap:6px; font-size:12px; margin-top:10px; }
        .checkbox input { width:14px; height:14px; }
        .submit-btn { width:100%; padding:10px; margin-top:15px; background:#2563eb; border:none; border-radius:5px; color:white; font-weight:bold; cursor:pointer; }
        .submit-btn:hover { background:#1d4ed8; }
        .footer { text-align:center; margin-top:20px; color:#3b82f6; font-size:14px; }
        .preview { background:#0f172a; padding:10px; border-radius:5px; margin-bottom:15px; border:1px solid #1e40af; font-size:13px; max-height:150px; overflow-y:auto; word-break:break-word; overflow-wrap:break-word; white-space:pre-wrap; }
        .preview h3 { color:#3b82f6; margin-bottom:5px; }
      `}</style>
    </div>
  );
};