import React, { useState, Fragment } from "react"
import { useAuth } from "../middlewares/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <Fragment>
      {/* {currentUser.email} */}
        <Link to="/profile" className="btn btn-primary w-100 mt-3">
          Update Profile
        </Link>

        <button
          className="border border-indigo-500 hover:bg-indigo-500 hover:text-white duration-100 ease-in-out w-6/12 text-indigo-500 p-0 flex flex-row justify-center items-center gap-1"
          onClick={handleLogout}>
              Log Out
        </button>
    </Fragment>
  )
}