import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaHamburger, FaTimes } from "react-icons/fa";
import ActiveLink from "../ActiveLink/ActiveLink";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { userInfo, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div className="navbar bg-neutral-900 mt-1 rounded-2xl flex justify-between fixed top-0 z-10">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden block ml-4"
        >
          {isOpen === true ? (
            <FaTimes className="text-white" />
          ) : (
            <FaHamburger className="text-white" />
          )}
        </div>

        <div>
          <Link to="/" className="font-bold md:text-3xl ml-3 text-white">
            Flavors of Italy
          </Link>
        </div>
        <div className=" text-white hidden md:block ">
          <ActiveLink
            to="/"
            className="mr-5 font-semibold hover:text-orange-400"
          >
            Home
          </ActiveLink>
          <ActiveLink
            to="/about"
            className="mr-5 font-semibold hover:text-orange-400"
          >
            About
          </ActiveLink>
          <ActiveLink
            to="/menu"
            className="mr-5 font-semibold hover:text-orange-400"
          >
            Menu
          </ActiveLink>
          <ActiveLink
            to="/blog"
            className="mr-5 font-semibold hover:text-orange-400"
          >
            Blog
          </ActiveLink>
        </div>
        <div>
          {userInfo ? (
            <div className="flex">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom tooltip-secondary"
                data-tip={userInfo.displayName}
              >
                <div className="w-10 rounded-full">
                  <img src={userInfo.photoURL} />
                </div>
              </label>

              <button onClick={handleLogOut} className="btn btn-primary">
                Sign Out
              </button>
            </div>
          ) : (
            <div className="flex">
              <FaUserCircle className="text-white text-4xl mr-4"></FaUserCircle>
              <Link to="/login">
                <button className="btn btn-primary">Login</button>
              </Link>
            </div>
          )}
        </div>
      </div>
      <div
        className={`md:hidden ml-4 bg-slate-400 fixed z-10 p-5  flex flex-col ${
          isOpen === true ? "top-16" : "-top-40"
        }`}
      >
        <ActiveLink to="/" className="mr-5 font-semibold hover:text-orange-400">
          Home
        </ActiveLink>
        <ActiveLink
          to="/about"
          className="mr-5 font-semibold hover:text-orange-400"
        >
          About
        </ActiveLink>
        <ActiveLink
          to="/menu"
          className="mr-5 font-semibold hover:text-orange-400"
        >
          Menu
        </ActiveLink>
        <ActiveLink
          to="/blog"
          className="mr-5 font-semibold hover:text-orange-400"
        >
          Blog
        </ActiveLink>
      </div>
    </div>
  );
};

export default Header;
