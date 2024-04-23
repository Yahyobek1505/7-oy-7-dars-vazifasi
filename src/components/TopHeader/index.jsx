import React from 'react'
import './index.css'
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom'
function TopHeader() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("uz");
  function handleChange(e) {
    setLang(e.target.value);
    i18n.changeLanguage(e.target.value);
    localStorage.setItem('language', e.target.value)
  }
  useEffect(() =>{
    if (localStorage.getItem('language')) {
    i18n.changeLanguage(localStorage.getItem('language'));
    }else{
        i18n.changeLanguage('uz');
    }
  }, [])

  return (
    <div className=' top bg-[#021431] py-1 px-20 dark:bg-[#272935] dark:text-white'>
      <div>
      <div className="container flex justify-end gap-4 px-2">
        <NavLink className='text-[#c7c9d1]' to='/login'>{t("login")}</NavLink>
        <NavLink className='text-[#c7c9d1]' to='/register'>{t("register")}</NavLink>
      </div>
      </div>
    </div>
  )
}

export default TopHeader

