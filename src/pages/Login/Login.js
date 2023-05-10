import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const handleLogin = (data) => {
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
              {...register("email")}
              type="email"
              className="input input-bordered w-full max-w-xs"
              required
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password")}
              type="password"
              className="input input-bordered w-full max-w-xs"
              required
            />
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
          </div>
        </form>
        <p className="text-sm text-center my-3">
          New to Doctors Portal?{" "}
          <Link to="/signup" className="text-secondary">
            Create New Account
          </Link>
        </p>
        <div className="divider">OR</div>
        <div className="btn btn-outline w-full max-w-xs">
          CONTINUE WITH GOOGLE
        </div>
      </div>
    </div>
  );
};

export default Login;
