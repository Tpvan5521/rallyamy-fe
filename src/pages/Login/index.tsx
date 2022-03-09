import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const LoginPage = ({ useAuth }: { useAuth: any }) => {
  const navigate = useNavigate();
  const location: any = useLocation();
  const auth = useAuth();

  const from: string = location.state.from.pathname || "/";

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get("username") as string;

    auth.signin(username, () => {
      navigate(from, { replace: true });
    });
  }

  return (
    <div>
      <p>You must log in to view the page at {from}</p>
      <form onSubmit={handleSubmit}>
        <label>
          Username: <input name="username" type="text" />
        </label>{" "}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
