// Dependencies
import React, { useRef, useState, Fragment } from "react";
import { Link, useHistory } from "react-router-dom";

// Components
import { useAuth } from "../middlewares/AuthContext";

// Styles

const SingUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { singup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await singup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <Fragment>
      <div className="bg-white sm:bg-gray-200 h-screen w-screen flex flex-col justify-center items-center">
      <div className="bg-white shadow-none sm:shadow-lg px-8 sm:px-12 w-full xs:w-full sm:w-8/12 md:w-7/12 lg:w-7/12 xl:w-2/6 h-screen sm:h-auto py-8">

        <div className="text-center w-full font-bold text-3xl text-gray-600 p-4">
          REGISTER
        </div>

        <div>
          {error && <div className="danger">{error}</div>}
        </div>

        <div
            className="w-full bg-gray-200 my-3" style= {{height: "1px"}}
        ></div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 px-0 py-4">

            <div>
              <label className="text-gray-700">Email address</label>
              <input
                className="py-2 pl-10 border border-gray-200 w-full"
                placeholder="Email address"
                type="email" ref={emailRef} required 
              />
            </div>

            <div>
              <label className="text-gray-700">Password</label>
              <input
                className="py-2 pl-10 border border-gray-200 w-full"
                placeholder="Password"
                type="password" ref={passwordRef} required 
              />
            </div>

            <div>
              <label className="text-gray-700">Password Confirmation</label>
              <input
                className="py-2 pl-10 border border-gray-200 w-full"
                placeholder="Password"
                type="password" ref={passwordConfirmRef} required 
              />
            </div>

            <div className="w-full flex flex-row gap-2">
              <button
                disabled={loading}
                className="border border-indigo-500 hover:bg-indigo-500 hover:text-white duration-100 ease-in-out w-6/12 text-indigo-500 p-0 flex flex-row justify-center items-center gap-1"
                type="submit">
                   Sign Up
              </button>
            </div>

            <div className="w-full flex flex-row justify-end">
              Already have an account? <Link to="/login">Log In</Link>
            </div>

          </div>
        </form>
      </div>
    </div>
    </Fragment>
  )
}

export default SingUp;