
function Login() {
  return (
    <div className="login">
      <h1>Login page</h1>

      <div>
        <label htmlFor="ttt">User Name</label>
        <a href="#"><i className="fa-solid fa-user"></i></a>
        <input type="text" id="ttt" placeholder="Enter your username" />
      </div>

      <div>
        <label htmlFor="ggg">Password</label>
        <input type="password" id="ggg" placeholder="Enter password" />
      </div>

      <input type="submit" value="Login" />
      <br />
      <a href="#">Forget password</a>
    </div>
  );
}

export default Login;
