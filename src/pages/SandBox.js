import React, { useState, Fragment } from "react"
import { useAuth } from "../middlewares/AuthContext"
import { Link, useHistory } from "react-router-dom"

// Media

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
      <div>
        <div>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <div className="danger">{error}</div>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </div>
      </div>
        <div className="w-full flex flex-row gap-2">
          <button
            className="border border-indigo-500 hover:bg-indigo-500 hover:text-white duration-100 ease-in-out w-6/12 text-indigo-500 p-0 flex flex-row justify-center items-center gap-1"
            onClick={handleLogout}>
                Log Out
          </button>
        </div>
    </Fragment>
  )
}