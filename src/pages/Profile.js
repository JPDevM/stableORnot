// Dependencies
import React, { useRef, useState, Fragment } from "react";
import { Link, useHistory } from "react-router-dom";

// Components
import { useAuth } from "../middlewares/AuthContext";

// Styles


const Profile = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { currentUser, updatePassword, updateEmail } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    const promises = []
    setLoading(true)
    setError("")

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises)
      .then(() => {
        history.push("/")
      })
      .catch(() => {
        setError("Failed to update account")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <Fragment>

      <div className="bg-white sm:bg-gray-200 h-screen w-screen flex flex-col justify-center items-center">
      <div className="bg-white shadow-none sm:shadow-lg px-8 sm:px-12 w-full xs:w-full sm:w-8/12 md:w-7/12 lg:w-7/12 xl:w-2/6 h-screen sm:h-auto py-8">

        <div className="text-center w-full font-bold text-3xl text-gray-600 p-4">
          UPDATE PROFILE
        </div>

        <div>
          {error && <div className="danger">{error}</div>}
        </div>

        <div
            className="w-full bg-gray-200 my-3" style={{height: "1px"}}
        ></div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 px-0 py-4">

            <div>
              <label className="text-gray-700">Email address</label>
              <input
                className="py-2 pl-10 border border-gray-200 w-full"
                placeholder="Email address"
                type="email" ref={emailRef} required 
                defaultValue={currentUser.email}
              />
            </div>

            <div>
              <label className="text-gray-700">Password</label>
              <input
                className="py-2 pl-10 border border-gray-200 w-full"
                type="password" ref={passwordRef} required 
                placeholder="Leave blank to keep the same"
              />
            </div>

            <div>
              <label className="text-gray-700">Password Confirmation</label>
              <input
                className="py-2 pl-10 border border-gray-200 w-full"
                type="password" ref={passwordConfirmRef} required 
                placeholder="Leave blank to keep the same"/>
            </div>

            <div className="w-full flex flex-row gap-2">
              <button
                disabled={loading}
                className="border border-indigo-500 hover:bg-indigo-500 hover:text-white duration-100 ease-in-out w-6/12 text-indigo-500 p-0 flex flex-row justify-center items-center gap-1"
                type="submit">
                   Update
              </button>
            </div>

            <div className="w-full flex flex-row justify-end">
              <Link to="/">Cancel</Link>
            </div>

          </div>
        </form>
      </div>
    </div>
    </Fragment>
  )
}

export default Profile;