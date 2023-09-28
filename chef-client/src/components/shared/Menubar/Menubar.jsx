import { useContext, useEffect, useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import logoImage from "../../../assets/images/logo.png";

import { HiOutlineX } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Button } from "@mantine/core";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";
import UserMenu from "../../UserMenu/UserMenu";


const navigation = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Blog", link: "/blog" },
  { name: "Dashboard", link: "/dashboard" },
];

const determineDeviceType = () => {
  return window.innerWidth >= 1024 ? "large" : "small";
};

const Menubar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [deviceType, setDeviceType] = useState(determineDeviceType);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const handleResize = () => {
      setDeviceType(determineDeviceType);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleOpenMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const largeDevice =
    "text-sm sm:block font-semibold leading-6 no-underline text-gray-900 hover:text-blue-500";
  const smallDevice =
    "-mx-3 block rounded-lg no-underline px-3 py-2 text-base font-semibold  text-gray-900 hover:bg-gray-50";
  const items = navigation.map((item) => (
    <Link
      key={item.name}
      to={item.link}
      className={`bg-${deviceType === "large" ? largeDevice : smallDevice}`}
    >
      {item.name}
    </Link>
  ));
  return (
    <header className="inset-x-0 top-0 bg-slate-100 shadow-sm">
      <nav
        className="flex items-center justify-between p-4 lg:px-10"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="lg:h-10 h-14 w-full" src={logoImage} alt="" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={handleOpenMenu}
          >
            <span className="sr-only">Open main menu</span>
            <AiOutlineBars className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">{items}</div>
        <div className="flex lg:flex-1 lg:justify-end justify-center">
          {user ? (
            <UserMenu />
          ) : (
            <Link
              to="/login"
              className="text-sm font-semibold no-underline leading-6 text-gray-900"
            >
              <Button>
                {" "}
                Log in{" "}
                <span aria-hidden="true" className="ms-1">
                  &rarr;
                </span>
              </Button>
            </Link>
          )}
        </div>
      </nav>
      <div className={`lg:hidden ${mobileMenuOpen ? "block" : "hidden"}`}>
        <div className="fixed inset-0 z-50" />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-10 w-auto" src={logoImage} alt="" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={handleOpenMenu}
            >
              <span className="sr-only">Close menu</span>
              <HiOutlineX className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">{items}</div>
              {/* <div className="py-2 lg:py-0">
                <Link
                  to="#"
                  className="-mx-3 block  rounded-lg px-3 py-2 no-underline text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Menubar;
