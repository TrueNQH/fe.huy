import React, { useState } from 'react';
import './style.css';

function Login() {
  const [errors, setErrors] = useState({});

  function validateForm(data) {
    const errors = {};
    if (!data.username) {
      errors.username = "Số điện thoại không được để trống";
    } else if (!/^\d{10,11}$/.test(data.username)) {
      errors.username = "Số điện thoại phải có 10-11 chữ số";
    }
    if (!data.password) {
      errors.password = "Mật khẩu không được để trống";
    }
    return errors;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const data = {
      phone: formData.get("username"),
      password: formData.get("password"),
    };

    const validationErrors = validateForm(data);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.message == "Successfully") {
        const responseData = await response.json();
        console.log("Response:", responseData);
        alert("Login Successful");
      } else {
        console.error("Error:", response.statusCode);
        alert("Login Failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred");
    }
  }

  return (
    <div className="d-lg-flex half">
      <div className="bg order-1 order-md-2 background"></div>
      <div className="contents order-2 order-md-1">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-7">
              <h3>Đăng Nhập vào <strong>Vungmogioi</strong></h3>
              <p className="mb-4">Đăng nhập để trải nghiệm ứng dụng.</p>
              <form onSubmit={handleSubmit}>
                <div className="form-group first">
                  <label htmlFor="phone">Số Điện Thoại</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="username"
                    name="username"
                  />
                  {errors.phone && (
                    <span className="error">{errors.phone}</span>
                  )}
                </div>
                <div className="form-group last mb-3">
                  <label htmlFor="password">Mật Khẩu</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Your Password"
                    name="password"
                  />
                  {errors.password && (
                    <span className="error">{errors.password}</span>
                  )}
                </div>

                <div className="d-flex mb-5 align-items-center">
                  <label className="control control--checkbox mb-0">
                    <span className="caption">Ghi nhớ đăng nhập</span>
                    <input type="checkbox" defaultChecked="checked" />
                    <div className="control__indicator"></div>
                  </label>
                  <span className="ml-auto">
                    <a href="#" className="forgot-pass">Quên mật khẩu</a>
                  </span>
                </div>

                <input
                  type="submit"
                  value="Log In"
                  className="btn btn-block btn-red"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
