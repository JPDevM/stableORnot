// Dependencies;
import React, { useRef, useState, Fragment } from "react"
import { useAuth } from "../middlewares/AuthContext"
import { Link } from "react-router-dom"

// Components
// Styles

// Media
import Logo from '../../src/assets/img/logo/logo-white.png';

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Revisa tu casilla para continuar");
    } catch {
      setError("Error de email o de connección");
    }
    setLoading(false);
  }

  return (
    <Fragment>
    <div className="h-screen bg-gradient-to-tl from-green-400 to-indigo-900 w-full py-16 px-4">
      <div className="flex flex-col items-center justify-center">
        
        <img className="logo" src={Logo} alt="Logo Name" />

        <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
          <p
            tabIndex={0}
            className="text-2xl font-extrabold leading-6 text-gray-800"
          >
            Recuperar Contraseña
          </p>

          <div className="w-full flex items-center justify-between py-5">
            {error && <div className="text-center	uppercase text-red-600">{error}</div>}
            {message && <div className="text-center	uppercase text-green-700">{message}</div>}  
          </div>

          <form onSubmit={handleSubmit}>
            <div>
              <label className="text-sm font-medium leading-none text-gray-800">
                Email
              </label>
              <input
                type="email"
                ref={emailRef}
                required
                className="bg-gray-200 border rounded focus:outline-none focus:border-black focus:border-4 text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
            </div>

            
            <div className="mt-8">
              <button
                type="submit"
                disabled={loading}
                className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
              >
                Recuperar
              </button>
            </div>
            <div>
              <p className="text-sm mt-4 font-medium leading-none text-gray-500">
                Sabes tus datos
                <span
                  tabIndex={0}
                  className="pl-1 text-sm font-medium leading-none underline text-gray-800 cursor-pointer"
                >
                  <Link to="/logIn">Ingresa!</Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
    </Fragment>
  )
}