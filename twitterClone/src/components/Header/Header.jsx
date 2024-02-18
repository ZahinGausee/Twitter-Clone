import React from "react";
import Logo from "../Logo";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import UserProfile from "./UserProfile";
import LogoutBtn from "./LogoutBtn";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);

  const navItems = [
    {
      logo: "home",
      title: "Home",
      path: "/",
      active: true,
    },
    {
      logo: "search",
      title: "Explore",
      path: "/explore",
      active: true,
    },
    {
      logo: 'login',
      title: "Login",
      path: "/login",
      active: !authStatus,
    },
    {
      logo: 'person_add',
      title: "Signup",
      path: "/signup",
      active: !authStatus,
    },
    {
      logo: 'add',
      title: "Add Posts",
      path: "/add-post",
      active: authStatus,
    },
    {
      logo: 'all',
      title: "All Posts",
      path: "/all-posts",
      active: authStatus,
    },
    {
      logo: 'person',
      title: "Profile",
      path: "/your-profile",
      active: authStatus,
    },
  ];

  return (
    <div className="first w-16 md:w-[70%]">
      <div className="sidebar flex md:items-end  flex-col sticky top-0">
        <Logo />
        <ul className="flex flex-col text-2xl space-y-3 md:px-11 font-bold w-full  ">
            {navItems.map((item) => (
                item.active && 
                <Link to={item.path} key={item.title}>
                <li
                className="flex md:justify-start items-center gap-3 justify-center  mr-4 md:w-fit  hover:bg-gray-900 hover:cursor-pointer px-5 py-3 hover:rounded-full"
                >
                        <span className="text-3xl material-symbols-outlined">
                            {item.logo}
                        </span>
                <span className="hidden md:block">{item.title}</span>
                </li>
                </Link>
            ))}
            {authStatus && <li>
                <div 
                class="button w-full text-center my-4">
                    <LogoutBtn className="hidden md:block bg-[#1d9bf0] px-20 text-xl rounded-full py-3 text-white" />
                    <Link to='/login'>
                        <button class="md:hidden bg-[#1d9bf0]  px-2 md:px-4 text-xl rounded-full py-1 md:py-3 text-white">
                            <span class="material-symbols-outlined">logout</span>
                        </button>
                    </Link>
                </div>
            </li>}   
        </ul>
        {authStatus && <UserProfile />}
      </div>
    </div>
  );
}

export default Header;

