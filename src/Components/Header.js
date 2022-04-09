import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import { auth } from '../firebase.init';

const Header = () => {
  const [user]=useAuthState(auth)
  console.log(user);
    return (
      <div className="text-center">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-300 ml-5 text-xl" : "text-black ml-5 text-xl"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-300 ml-5 text-xl" : "text-black ml-5 text-xl"
          }
          to="/order"
        >
          Order
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-300 ml-5 text-xl" : "text-black ml-5 text-xl"
          }
          to="/register"
        >
          Register
        </NavLink>
        {user?.uid ? (
          <button
            className="text-black ml-5 text-xl"
            onClick={() => signOut(auth)}
          >
            sign out
          </button>
        ) : (
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-red-300 ml-5 text-xl" : "text-black ml-5 text-xl"
            }
            to="/login"
          >
            Login
          </NavLink>
        )}
        <span className="ml-5">{user && user.displayName}</span>
      </div>
    );
};

export default Header;