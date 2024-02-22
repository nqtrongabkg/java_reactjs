/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const AccountOverview = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});

  // Function to simulate login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Function to simulate logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  

  return (
    <section className="section-content padding-y">
      <div className="container">
        <div className="row">
          <aside className="col-md-3">
            <nav className="list-group">
              {isLoggedIn ? (
                <>
                  <a className="list-group-item" href="#nt" onClick={handleLogout}>
                    Đăng xuất
                  </a>
                </>
              ) : (
                <>
                  <a className="list-group-item" href="/user_login">
                    Đăng Nhập
                  </a>
                  <a className="list-group-item" href="/user_register">
                    Đăng Ký
                  </a>
                </>
              )}
            </nav>
          </aside>
          <main className="col-md-9">
            <article className="card mb-3">
              <div className="card-body">
                <figure className="icontext">
                  <div className="icon">
                    <img
                      className="rounded-circle img-sm border"
                      src={require('../../assets/images/avatars/avatar3.jpg')}
                      alt="hinh"
                    />
                  </div>
                  <div className="text">
                    <strong>{isLoggedIn ? userData.name : 'Vui Lòng đăng nhập, nếu chưa có tài khoản hãy đăng ký.'}</strong> <br />
                    <p className="mb-2">{isLoggedIn ? userData.email : ''}</p>
                    {isLoggedIn ? (
                      <button className="btn btn-light btn-sm">Edit</button>
                    ) : null}
                  </div>
                </figure>
                <hr />
                {isLoggedIn ? (
                  <>
                    <p>
                      <i className="fa fa-signature text-muted" /> &nbsp; Tên:
                      <br />
                      {userData.name} &nbsp;
                      <button className="btn btn-light btn-sm">Edit</button>
                    </p>
                    {/* Hiển thị các thông tin khác của người dùng */}
                  </>
                ) : null}
              </div>
            </article>
          </main>
        </div>
      </div>
    </section>
  );
};

export default AccountOverview;
