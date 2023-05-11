import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { signIn } = useContext(AuthContext);
  const [loginError, setLoginEroor] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const { signinWithGoogle } = useContext(AuthContext);

  const handleSigninWithGoogle = () => {
    signinWithGoogle()
      .then((result) => {
        navigate(from, { replace: true });
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log(user.displayName);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogin = (data) => {
    setLoginEroor("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setLoginEroor(error.message);
      });

    console.log(data);
  };
  return (
    <div className="h-[600px] flex justify-center items-center">
      <div className="w-96 shadow-2xl p-11 rounded-2xl">
        <h2 className="text-xl text-center">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: "Email Address is required" })}
              type="email"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p role="alert" className="text-red-600">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be 8 Character",
                },
              })}
              type="password"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p role="alert" className="text-red-600">
                {errors.password?.message}
              </p>
            )}
            <label className="label">
              <span className="label-text">Forgot password?</span>
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <input
              type="submit"
              className="btn btn-accent text-white"
              value="Login "
            />
            {loginError && (
              <p className="text-red-600 text-center">{loginError}</p>
            )}
          </div>
        </form>
        <p className="text-sm text-center my-3">
          New to Doctors Portal?{" "}
          <Link to="/signup" className="text-secondary">
            Create New Account
          </Link>
        </p>
        <div className="divider">OR</div>
        <button
          onClick={handleSigninWithGoogle}
          className="btn btn-outline w-full max-w-xs"
        >
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
