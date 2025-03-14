import React, { useState } from "react";
import { useNavigate } from "react-router";
import styles from "../../css/Login.module.css";
import axios from "axios"; // Thêm dòng này để tránh lỗi


const FormInput = ({
  type = "text",
  placeholder,
  value,
  onChange,
  disabled = false,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={styles.formInput}
      aria-label={placeholder}
      disabled={disabled}
    />
  );
};

const SocialSignup = () => {
  return (
    <>
      <p className={styles.socialText}>
        Fast Login With Your Favorite Social Profile
      </p>
      <div className={styles.socialIcons}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/36f2a5df6af477b8f488e6660d3f345419a2ead8eba8b1796aef0095e894726c?placeholderIfAbsent=true&apiKey=984f5f16093f404496efb89b97e969e5"
          alt="Social Media Icon 1"
          className={styles.socialIcon}
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a881df476598d55c2f2261f776546eb2ce30a174f3e30da669e3b2dbf629bc88?placeholderIfAbsent=true&apiKey=984f5f16093f404496efb89b97e969e5"
          alt="Social Media Icon 2"
          className={styles.socialIcon}
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/19e28b24f039f3d4a4b88020bf7193375824f173d57ffb85377f966825337709?placeholderIfAbsent=true&apiKey=984f5f16093f404496efb89b97e969e5"
          alt="Social Media Icon 3"
          className={styles.socialIcon}
        />
      </div>
    </>
  );
};

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (field) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    try {
      const res = await axios.get("http://localhost:3001/users", {
        params: { email: formData.email, password: formData.password },
      });
  
      if (res.data.length > 0) {
        const user = res.data[0];
        localStorage.setItem("token", JSON.stringify(user));
  
        // Chuyển hướng dựa trên vai trò
        if (user.role === "admin") {
          navigate("/admin/dashboard");
        } else {
          navigate("/home-login"); // Cả "student" và "parent" đều về trang này
        }
      } else {
        alert("Sai email hoặc mật khẩu!");
      }
    } catch (error) {
      console.error("Lỗi đăng nhập:", error);
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <main className={styles.container}>
      <section className={styles.loginSection}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/574eef191e6311f610bf830fb7102a4068aba5bd0e6800e03ce53027c58e80a7?placeholderIfAbsent=true&apiKey=984f5f16093f404496efb89b97e969e5"
          alt="Background"
          className={styles.backgroundImage}
        />
        <div className={styles.contentWrapper}>
          <div className={styles.columns}>
            <div className={styles.imageColumn}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/32f5944cd2eff950debb548d75ec27dc29557b1eba7f3831a0fcd675473ab53d?placeholderIfAbsent=true&apiKey=984f5f16093f404496efb89b97e969e5"
                alt="Login illustration"
                className={styles.illustration}
              />
            </div>
            <div className={styles.formColumn}>
              <form onSubmit={handleSubmit} className={styles.formContainer}>
                <h1 className={styles.formTitle}>Login</h1>
                <FormInput
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange("email")}
                  disabled={isLoading}
                />
                <FormInput
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange("password")}
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  className={styles.loginButton}
                  disabled={isLoading}
                >
                  {isLoading ? "Đang đăng nhập..." : "Đăng nhập"}
                </button>
                <div className={styles.registerLink}>
                  Don't have an account?{" "}
                  <button
                    type="button"
                    onClick={() => navigate("/register")}
                    className={styles.registerButton}
                  >
                    Register
                  </button>
                </div>
                <SocialSignup />
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;