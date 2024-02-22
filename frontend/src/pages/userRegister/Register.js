import React, { useState } from 'react';
import { GET_ADD } from '../../api/Service';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullname: '',
    address: '',
    phone_number: '',
    role: {
      id: 2,
    },
    deleted: 0,
  });

  const [registrationStatus, setRegistrationStatus] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    GET_ADD('users', formData)
      .then((response) => {
        console.log('User registered successfully!', response.data);
        setRegistrationStatus('success');
      })
      .catch((error) => {
        console.error('Error registering user:', error);
        setRegistrationStatus('error');
      });
  };

  return (
    <section className="section-content padding-y">
      <div className="card mx-auto" style={{ maxWidth: 520, marginTop: 40 }}>
        <article className="card-body">
          <header className="mb-4">
            <h4 className="card-title">Đăng ký tài khoản</h4>
          </header>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <small className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Full name</label>
              <input
                type="text"
                name="fullname"
                className="form-control"
                placeholder="Enter your full name"
                value={formData.fullname}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                name="address"
                className="form-control"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Phone number</label>
              <input
                type="text"
                name="phone_number"
                className="form-control"
                placeholder="Enter your phone number"
                value={formData.phone_number}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              {registrationStatus === 'success' ? (
                <button type="submit" className="btn btn-success btn-block">
                  Đăng ký thành công
                </button>
              ) : (
                <button type="submit" className="btn btn-primary btn-block">
                  Đăng ký
                </button>
              )}
            </div>
          </form>
        </article>
      </div>
      <p className="text-center mt-4">
        Have an account? <a href="#t">Log In</a>
      </p>
    </section>
  );
};

export default Register;
