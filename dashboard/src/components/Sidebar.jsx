import React, { useContext, useState } from "react";
import { TiHome } from "react-icons/ti";
import { RiLogoutBoxFill } from "react-icons/ri";
import { AiFillMessage } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserMd } from "react-icons/fa"; // Corrected import
import { MdAddModerator } from "react-icons/md";
import { IoPersonAddSharp } from "react-icons/io5";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const handleLogout = async () => {
    await axios
      .get("https://hms-mern-backend.vercel.app/api/v1/user/admin/logout", {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
        setIsAuthenticated(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const navigateTo = useNavigate();

  const gotoHomePage = () => {
    navigateTo("/");
    setShow(false);
  };
  const gotoDoctorsPage = () => {
    navigateTo("/doctors");
    setShow(false);
  };
  const gotoMessagesPage = () => {
    navigateTo("/messages");
    setShow(false);
  };
  const gotoAddNewDoctor = () => {
    navigateTo("/doctor/addnew");
    setShow(false);
  };
  const gotoAddNewAdmin = () => {
    navigateTo("/admin/addnew");
    setShow(false);
  };

  return (
    <>
      {/* Sidebar for large screens */}
      <nav
        className={`fixed top-0 left-0 z-20 h-full bg-gray-800 p-4 transition-all ease-in-out duration-300 ${
          show ? "w-54" : "w-54"
        } hidden lg:flex flex-col items-center space-y-6`}
        style={!isAuthenticated ? { display: "none" } : { display: "flex" }}
      >
        <TiHome
          onClick={gotoHomePage}
          className="text-white text-3xl cursor-pointer"
        />
        <FaUserMd
          onClick={gotoDoctorsPage}
          className="text-white text-3xl cursor-pointer"
        />
        <MdAddModerator
          onClick={gotoAddNewAdmin}
          className="text-white text-3xl cursor-pointer"
        />
        <IoPersonAddSharp
          onClick={gotoAddNewDoctor}
          className="text-white text-3xl cursor-pointer"
        />
        <AiFillMessage
          onClick={gotoMessagesPage}
          className="text-white text-3xl cursor-pointer"
        />
        <RiLogoutBoxFill
          onClick={handleLogout}
          className="text-white text-3xl cursor-pointer"
        />
      </nav>

      {/* Hamburger icon for mobile */}
      <div
        className="lg:hidden fixed top-4 left-4 z-30 cursor-pointer"
        onClick={() => setShow(!show)}
      >
        <GiHamburgerMenu className="text-3xl text-gray-800" />
      </div>

      {/* Mobile Sidebar
      <nav
        className={`fixed top-0 left-0 z-20 h-full bg-gray-800 p-4 transform transition-all ease-in-out duration-300 ${
          show ? "w-64" : "w-0"
        } lg:hidden flex flex-col items-center space-y-6`}
        style={!isAuthenticated ? { display: "none" } : { display: "flex" }}
      >
        <TiHome
          onClick={gotoHomePage}
          className="text-white text-3xl cursor-pointer"
        />
        <FaUserMd
          onClick={gotoDoctorsPage}
          className="text-white text-3xl cursor-pointer"
        />
        <MdAddModerator
          onClick={gotoAddNewAdmin}
          className="text-white text-3xl cursor-pointer"
        />
        <IoPersonAddSharp
          onClick={gotoAddNewDoctor}
          className="text-white text-3xl cursor-pointer"
        />
        <AiFillMessage
          onClick={gotoMessagesPage}
          className="text-white text-3xl cursor-pointer"
        />
        <RiLogoutBoxFill
          onClick={handleLogout}
          className="text-white text-3xl cursor-pointer"
        />
      </nav> */}
    </>
  );
};

export default Sidebar;
