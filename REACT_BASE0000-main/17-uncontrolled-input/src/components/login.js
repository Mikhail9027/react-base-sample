function Login() {
 function handeIFormSubmit(event) {
  event.preventDefault();
  console.log({
   username: event.target.username.value,
   password: event.target.password.value,
 });
 }
 return (
    <>
    <h1>Login Form</h1>
    <form onSubmit={handeIFormSubmit}>
        <label>
            Username: <input type="text" name="username" />
        </label>
        <label>
            Password: <input type="password" name="password" />
        </label>
        <button type="submit">Login</button>
    </form>
    </>
 );
}

export default Login