import React, { useEffect, useState } from "react";

import axios from "axios";

function Login() {
    const [rememberPassword, setRememberPassword] = useState(true);
    const [users, setUsers] = useState([]);
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [showLoginForm, setShowLoginForm] = useState(true);
    const [loginError, setLoginError] = useState(false); // New state for login error

    const handleRememberToggle = () => {
        setRememberPassword(!rememberPassword);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        // Get the input values (replace with actual input references)
        const emailInput = document.getElementById("emailInput").value;
        const passwordInput = document.getElementById("passwordInput").value;

        // Find the user with matching email
        const user = users.find(user => user.email === emailInput && user.password === passwordInput);

        if (user) {
            setLoggedInUser(user);
            setShowLoginForm(false);
            localStorage.setItem("loggedInUser", JSON.stringify(user));
            setLoginError(false); // Reset login error state
 
        } else {
            setLoginError(true); // Set login error state
        }
    };

    useEffect(() => {
        axios.get("http://localhost:8080/api/users").then((response) => {
            setUsers(response.data);
        });

        // Check if user is already logged in from Local Storage
        const savedUser = localStorage.getItem("loggedInUser");
        if (savedUser) {
            setLoggedInUser(JSON.parse(savedUser));
            setShowLoginForm(false);
        }
    }, []);

    const handleLogout = () => {
        setLoggedInUser(null);
        setShowLoginForm(true);
        localStorage.removeItem("loggedInUser");
    };

    return (
        <section className="section-conten padding-y" style={{ minHeight: '84vh' }}>
            <div className="card mx-auto" style={{ maxWidth: '380px', marginTop: '100px' }}>
                <div className="card-body">
                    <h4 className="card-title mb-4">Đăng nhập</h4>
                    {loggedInUser ? (
                        <div>
                            <p className="text-success">Bạn đã đăng nhập thành công!</p>
                            <button className="btn btn-primary btn-block" onClick={handleLogout}>Đăng xuất</button>
                        </div>
                    ) : (
                        showLoginForm && (
                            <form onSubmit={handleLogin}>
                                <div className="form-group">
                                    <input id="emailInput" name="email" className="form-control" placeholder="Username" type="text" />
                                </div>
                                <div className="form-group">
                                  <input id="passwordInput" name="password" className="form-control" placeholder="Password" type="password" />
                                </div>

                                <div className="form-group">
                                        <a href="/createAccount" className="float-right">Đăng ký</a>
                                    <label className="float-left custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" checked={rememberPassword} onChange={handleRememberToggle} />
                                        <div className="custom-control-label"> Ghi nhớ mật khẩu </div>
                                    </label>
                                </div>

                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-block"> Login  </button>
                                </div>

                                {loginError && (
                                    <p className="text-danger">Tài khoản hoặc mật khẩu không chính xác. Vui lòng thử lại.</p>
                                )}
                            </form>
                        )
                    )}
                </div>
            </div>
            {!loggedInUser && !showLoginForm && <p className="text-center mt-4">Don't have an account? <a href="/user_register">Sign up</a></p>}
        </section>
    );
}

export default Login;