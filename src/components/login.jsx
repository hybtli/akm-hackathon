import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post(`http://192.168.140.215:8001/api/login`, {
        email: email,
        password: password,
      })
      .then((response) => {
        navigate("/dashboard");
        console.log(response.data.token);
        localStorage.setItem("token", response.data.token);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <section className="h-screen">
      <div className="container h-full px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center justify-center">
          {/* Left column container with background */}
          <div className="mb-12 md:mb-0">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Phone image"
            />
          </div>

          {/* Right column container with form */}
          <div className="md:w-full lg:ml-6">
            <form onSubmit={handleSubmit}>
              {/* Email input */}
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full border-b-2 border-gray-300 focus:border-primary focus:outline-none py-2 px-4 rounded-lg text-sm transition duration-300"
                  placeholder="Enter your email"
                />
              </div>

              {/* Password input */}
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="w-full border-b-2 border-gray-300 focus:border-primary focus:outline-none py-2 px-4 rounded-lg text-sm transition duration-300"
                  placeholder="Enter your password"
                />
              </div>

              {/* Submit button */}
              <div>
                <button
                  type="submit"
                  className="block w-full bg-primary text-white rounded-lg py-3 text-sm font-medium transition duration-300 ease-in-out hover:bg-primary-600 focus:outline-none focus:bg-primary-600"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
