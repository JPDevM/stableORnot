// Dependencies
import React, { useRef, useState, Fragment } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';

// Components
import { useAuth } from '../middlewares/AuthContext';

// Styles

const Profile = () => {
  // params from url: /profile/:username
  const { userName } = useParams();

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updatePassword, updateEmail } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }

    const promises = [];
    setLoading(true);
    setError('');

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        history.push('/');
      })
      .catch(() => {
        setError('Failed to update account');
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <Fragment>
      <div className="bg-white sm:bg-gray-200 h-screen w-screen flex flex-col justify-center items-center">
        <div className="bg-white shadow-none sm:shadow-lg px-8 sm:px-12 w-full xs:w-full sm:w-8/12 md:w-7/12 lg:w-7/12 xl:w-2/6 h-screen sm:h-auto py-8">
          <div className="text-center w-full font-bold text-3xl text-gray-600 p-4">
            UPDATE PROFILE: {userName}
          </div>

          <div>{error && <div className="danger">{error}</div>}</div>

          <div
            className="w-full bg-gray-200 my-3"
            style={{ height: '1px' }}
          ></div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4 px-0 py-4">
              <div>
                <label className="text-gray-700">Email address</label>
                <input
                  className="py-2 pl-10 border border-gray-200 w-full"
                  placeholder="Email address"
                  type="email"
                  ref={emailRef}
                  required
                  defaultValue={currentUser.email}
                />
              </div>

              <div>
                <label className="text-gray-700">Password</label>
                <input
                  className="py-2 pl-10 border border-gray-200 w-full"
                  type="password"
                  ref={passwordRef}
                  required
                  placeholder="Leave blank to keep the same"
                />
              </div>

              <div>
                <label className="text-gray-700">Password Confirmation</label>
                <input
                  className="py-2 pl-10 border border-gray-200 w-full"
                  type="password"
                  ref={passwordConfirmRef}
                  required
                  placeholder="Leave blank to keep the same"
                />
              </div>

              <div className="w-full flex flex-row justify-between items-center ">
                <button
                  disabled={loading}
                  className="border border-indigo-500 hover:bg-indigo-500 hover:text-white duration-100 ease-in-out px-8 text-indigo-500 p-1"
                  type="submit"
                >
                  Update
                </button>
                <Link to="/" className="border border-gray-400 hover:bg-gray-400 hover:text-white duration-100 ease-in-out px-8 text-gray-500 p-1">Cancel</Link>
              </div>
            </div>
          </form>
          {/* Main color */}
          <div className="flex flex-col mb-8">
            <p className="text-xl border-b">Color principal</p>
            <p className="text-sm italic my-2 text-gray-400">
              Este color se usa en tal y tal lado
            </p>
            <div className="flex flex-row justify-between items-center">
              <div className="rounded-full flex-none w-12 h-12 bg-purple-600 border-2 shadow-md"></div>
              <div className="flex-grow h-8 bg-gradient-to-r from-purple-600 to-pink-600 border-2 shadow-md mx-2"></div>
              <div className="rounded-full flex-none w-12 h-12 bg-pink-600 border-2 shadow-md"></div>
            </div>
            <div className="flex flex-row justify-between">
              <p className="font-mono text-xs mt-1 text-gray-400">#7492756</p>
              <p className="font-mono text-xs mt-1 text-gray-400">#5694565</p>
            </div>
          </div>
          {/* Secondary color */}
          <div className="flex flex-col mb-8">
            <p className="text-xl border-b">Color secundario</p>
            <p className="text-sm italic my-2 text-gray-400">
              Este color se usa en tal y tal lado
            </p>
            <div className="flex flex-row justify-between items-center">
              <div className="rounded-full flex-none w-12 h-12 bg-green-600 border-2 shadow-md"></div>
              <div className="flex-grow h-8 bg-gradient-to-r from-green-600 to-yellow-600 border-2 shadow-md mx-2"></div>
              <div className="rounded-full flex-none w-12 h-12 bg-yellow-600 border-2 shadow-md"></div>
            </div>
            <div className="flex flex-row justify-between">
              <p className="font-mono text-xs mt-1 text-gray-400">#654B278</p>
              <p className="font-mono text-xs mt-1 text-gray-400">#74YY756</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
