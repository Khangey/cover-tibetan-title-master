"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/icons/logo.png";
import cover1 from "../../../public/images/cover1.webp";
import cover2 from "../../../public/images/cover2.webp";
import cover3 from "../../../public/images/cover3.webp";
import cover4 from "../../../public/images/cover4.webp";

import step1 from "../../../public/images/step1.png";
import step2 from "../../../public/images/step2.png";
import hashnodeLogo from "../../../public/images/hashnode-logo.png";
import devLogo from "../../../public/images/dev-logo.png";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <div className="text-xl  flex border-b border-gray-100  p-2 md:w-10/12 mx-auto">
        <div className="flex items-center">
          <Image src={logo} alt="logo" className="w-8 h-8 mx-2 rounded-xl" />
          <h1 className="font-semibold md:text-xl text-lg font-Inter">དཔལ་ཡོན་རྩོམ་ཡིག་ཁ་བྱང་བཟོ་ཆས།</h1>
        </div>

        <a
          href="https://github.com/khangey"
          target="_blank"
          rel="noreferrer"
          className="hover:translate-x-2 duration-300 bg-gray-700 group rounded-xl md:px-4 text-white md:text-sm text-xs ml-auto mr-4 font-Inter font-semibold p-2"
        >
          <span className="text-sm">⭐ Star on Github</span>
        </a>
      </div>

      <div className="  mx-auto md:px-20 py-6   flex flex-col items-center">
        <h1 className="md:w-7/12 m-10 text-center md:text-5xl text-3xl font-extrabold text-gray-700 font-Inter">
          རང་གི་རྩོམ་ཡིག་ཡག་པོ་དེར་ཁ་བྱང་ཡག་པོ་ཞིག་བཟོ་ཡོང་ངམ།
        </h1>
        <Link
          href="/editor"
          className="hover:translate-x-2 duration-300 bg-gray-700 hover:bg-gray-800 group rounded-full px-4 md:px-8 text-white md:text-2xl text-lg mx-auto font-Inter font-semibold md:p-4 p-2"
        >
          <span className="md:text-2xl text-lg">མྱུར་དུ་བཟོ། &rarr;</span>
        </Link>
      </div>

      <div className=" temple flex flex-row items-center justify-center mx-auto md:w-10/12">
        <div className="m-4 transform -translate-y-20 border animate hover:scale-105 hover:-rotate-3  rotate-6 duration-100 bg-white p-2 shadow-sm w-1/5 rounded-lg flex flex-col ">
          <Image src={cover2} className="border border-gray-100 rounded mb-2" alt="cover1" />
          <p className="animate animate-pulse bg-gray-50 md:h-5 h-2 rounded mb-2"></p>
          <p className="animate animate-pulse w-8/12 bg-gray-50 md:h-5 h-2 rounded mb-2"></p>
        </div>

        <div className="m-4 transform hover:scale-105 hover:rotate-3 -rotate-2  duration-300 bg-white p-4 shadow-sm w-1/3 rounded-lg flex flex-col ">
          <Image src={cover1} className="rounded border border-gray-100 mb-2" alt="cover-2" />
          <p className="animate animate-pulse bg-gray-50 md:h-6 h-3 rounded mb-2"></p>
          <p className="animate animate-pulse w-8/12 bg-gray-50 md:h-6 h-3 rounded mb-2"></p>
        </div>

        <div className="m-4 transform -translate-y-20 border animate hover:scale-105 hover:rotate-3 -rotate-6 duration-100 bg-white p-2 shadow-sm w-1/5 rounded-lg flex flex-col ">
          <Image src={cover3} className="rounded border border-gray-100 mb-2" alt="cover3" />
          <p className="animate animate-pulse bg-gray-50 md:h-5 h-2 rounded mb-2"></p>
          <p className="animate animate-pulse w-8/12 bg-gray-50 md:odd:h-5 h-2 rounded mb-2"></p>
        </div>
      </div>

      

      <footer className="bg-white p-10 flex justify-center items-center">
        <div className="text-center md:w-7/12">
          <span className="text-lg font-Inter">
            དཔལ་ཡོན་རྩོམ་ཡིག་ཁ་བྱང་བཟོ་ཆས་འདི་ནི་བོད་ལྗོངས་དཔལ་ཡོན་ཚན་རྩལ་ནས་བཟོས། ཆ་འཕྲིན་ལག་རྩལ་པ་ཁྱུང་བུ་གངས་རྒྱན་ཡིན།
          </span>
        </div>
      </footer>
    </div>
  );
}
