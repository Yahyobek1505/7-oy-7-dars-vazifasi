import React, { useEffect, useState} from "react";
import { useTranslation } from "react-i18next";
import { BsCart3 } from "react-icons/bs";
import { NavLink, Link } from "react-router-dom";
import { US, UZ } from "country-flag-icons/react/3x2";
import DarkMode from "../DarkMode";
function Navbar() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("uz");
  function handleChange(e) {
    setLang(e.target.value);
    i18n.changeLanguage(e.target.value);
    localStorage.setItem("language", e.target.value);
  }
  useEffect(() => {
    if (localStorage.getItem("language")) {
      i18n.changeLanguage(localStorage.getItem("language"));
      setLang(localStorage.getItem("language"));
    } else {
      i18n.changeLanguage("en");
    }
  }, []);
  return (
    <div className="bg-[#f0f6ff] dark:bg-[#181920] dark:text-white">
      <div className="navBar py-3 flex justify-between align-element container px-16">
        <div className="logo  dark:text-black ">
          <button className="text-4xl text-white w-14 rounded-lg h-12 bg-[#0069e0] dark:bg-[#ff7ac6] dark:text-black">
            C
          </button>
        </div>
        <div className="navLink pt-3 ">
          <ul className="flex gap-8">
            <li>
              <NavLink
                className="text-lg navbarLInk rounded-lg duration-300 p-2"
                to="/">
                {t("home")}
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-lg navbarLInk rounded-lg duration-300 p-2"
                to="/about">
                {t("about")}
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-lg navbarLInk rounded-lg duration-300 p-2"
                to="/products">
                {t("products")}
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-lg navbarLInk rounded-lg duration-300 p-2"
                to="/cart">
                {t("cart")}
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="icons flex  gap-4 pt-3">
          <DarkMode></DarkMode>
          <Link to="/cart">
            <BsCart3 className="cursor-pointer text-2xl mt-2" />
          </Link>
          {/* {lang == "en" ? (
            <US title="United States" className="w-10 h-10" />
          ) : (
            <UZ title="Uzbekistan" className="w-10 h-10" />
          )}

          <select
            name=""
            id=""
            value={lang}
            onChange={handleChange}
            className="border p-2 rounded-lg outline-none dark:bg-[#1e2029] dark:text-white">
            <option value="en" className="border p-2 rounded-lg">
              English
            </option>
            <option value="uz" className="border p-2 rounded-lg">
              Uzbek
            </option>
          </select> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
