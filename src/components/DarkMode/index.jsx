import React, { useEffect, useState } from 'react'
import { IoMdMoon } from "react-icons/io";
import { LuSun } from "react-icons/lu";
function DarkMode() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
  const element = document.documentElement;
  useEffect(() =>{
    if (theme == "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");      
    }else{
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme])
  return (
    <>
      <div className="relative">
      {
        theme == "dark" && <LuSun className="cursor-pointer text-3xl mt-2 absolute right-0 z-10" 
        onClick={() => setTheme(theme == "light" ? "dark" : "light")}/>
      }
          {
            theme == "light" && <IoMdMoon
            className="cursor-pointer text-2xl mt-2 right-2" onClick={() => setTheme(theme == "light" ? "dark" : "light")}/>
          }
      </div>
    </>
  )
}

export default DarkMode
