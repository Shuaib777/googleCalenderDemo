import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.scss';

const Login = () => {
//   const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple check if user exists (for demo purposes)
    // const user = localStorage.getItem('user');
    if (user) {
    //   navigate('/calendar');
    } else {
      alert('Please register first');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">Login</h1>
        
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn-primary">
            Login
          </button>

          <p className="auth-link">
            Don't have an account? 
            {/* <Link to="/register">Register</Link> */}
            <a href="">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;