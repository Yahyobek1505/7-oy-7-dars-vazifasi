import React from "react";
import { useState, useEffect } from "react";
import TopHeader from "../components/TopHeader";
import Navbar from "../components/Navbar";
import { useTranslation } from "react-i18next";
function About() {
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
    <div>
      <TopHeader></TopHeader>
      <Navbar></Navbar>
      <section className="align-element py-20 dark:bg-[#272935] dark:text-white h-[100vh]">
        <div className="flex flex-wrap gap-4 sm:gap-x-6 items-center justify-center">
          <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
            {t("love")}
          </h1>
          <div className="stats bg-primary ml-3 shadow-md px-4 py-3  rounded-2xl">
            <div className="stat">
              <div className="stat-title text-white text-primary-content text-4xl font-bold tracking-widest">
                {t("comfy")}
              </div>
            </div>
          </div>
        </div>
        <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
          {t("aboutDesc")}
        </p>
      </section>
    </div>
  );
}

export default About;
