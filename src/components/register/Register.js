import React, { useState } from "react";
import "./style.css";

function Register() {
  const [errors, setErrors] = useState({});

  function validateForm(data) {
    const errors = {};
    if (!data.userName) {
      errors.userName = "Tên tài khoản không được để trống";
    }
    if (!data.password) {
      errors.password = "Mật khẩu không được để trống";
    } else if (data.password.length < 8) {
      errors.password = "Mật khẩu phải có ít nhất 8 ký tự";
    }
    if (!data.fullName) {
      errors.fullName = "Họ tên không được để trống";
    }
    if (!data.email) {
      errors.email = "Email không được để trống";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email không hợp lệ";
    }
    if (!data.phone) {
      errors.phone = "Số điện thoại không được để trống";
    } else if (!/^\d{10,11}$/.test(data.phone)) {
      errors.phone = "Số điện thoại phải có 10-11 chữ số";
    }
    return errors;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const data = {
      userName: formData.get("username"),
      password: formData.get("password"),
      fullName: formData.get("name"),
      isActive: true,
      email: formData.get("email"),
      phone: formData.get("phone"),
    };

    const validationErrors = validateForm(data);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.message== "Successfully") {
        const responseData = await response.json();
        console.log("Response:", responseData);
        alert("Registration Successful");
      } else {
        console.error("Error:", response.statusCode);
        alert("Registration Failed");
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
              <h3 className="last">
                Đăng Ký sử dụng <strong>Vungmogioi</strong>
              </h3>

              <form onSubmit={handleSubmit}>
                <div className="form-group first">
                  <label htmlFor="phone">Số Điện Thoại</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="0917832564"
                    name="phone"
                  />
                  {errors.phone && (
                    <span className="error">{errors.phone}</span>
                  )}
                </div>
                <div className="form-group last mb-3">
                  <label htmlFor="username">Tên Tài Khoản</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="usernameA"
                    name="username"
                  />
                  {errors.userName && (
                    <span className="error">{errors.userName}</span>
                  )}
                </div>
                <div className="form-group last mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                  />
                  {errors.email && (
                    <span className="error">{errors.email}</span>
                  )}
                </div>
                <div className="form-group last mb-3">
                  <label htmlFor="name">Họ Tên</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nguyễn Văn A"
                    name="name"
                  />
                  {errors.fullName && (
                    <span className="error">{errors.fullName}</span>
                  )}
                </div>
                <div className="form-group last mb-3">
                  <label htmlFor="password">Mật Khẩu</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Mật khẩu"
                    name="password"
                  />
                  {errors.password && (
                    <span className="error">{errors.password}</span>
                  )}
                </div>
                <div className="d-flex mb-5 align-items-center">
                  <span className="ml-auto">
                    <a href="#" className="forgot-pass">
                      Đã có tài khoản
                    </a>
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

export default Register;
