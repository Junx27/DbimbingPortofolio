import { NavLink } from "react-router-dom";
import { navbar } from "../Data/Navbar";
import Button from "./Layouts/Button";
import { useState } from "react";

function Navbar() {
  const [mobile, setMobile] = useState(true);

  return (
    <div>
      <div className="hidden absolute z-50 w-full md:flex justify-between items-center px-10 py-3 text-xs shadow-lg">
        <div>
          <h1 className="font-bold bg-blue-600 text-white text-xs w-32 p-2 text-center rounded-full uppercase">
            portfolio
          </h1>
        </div>
        <div className="flex flex-row gap-5">
          {navbar.map((navbar) => (
            <div
              key={navbar.id}
              className="flex justify-center relative overflow-hidden w-20 h-7 p-1 items-center border border-blue-600 rounded-full"
            >
              <NavLink
                to={navbar.link}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-yellow-500 px-20 md:px-6 py-5 text-white"
                    : "peer p-8 relative z-50 text-blue-600 hover:text-white"
                }
              >
                {navbar.nama}
              </NavLink>
              <p className="transition-all duration-500 absolute inset-0 -translate-x-32 peer-hover:translate-x-0 peer-hover:bg-blue-600 w-full h-full rounded-full z-0"></p>
            </div>
          ))}
        </div>
        <div>
          <a
            href="https://wa.me/6281217114742/"
            className="flex items-center hover:text-blue-600 my-3"
            target="blank"
          >
            <Button nameButton={"Whatsapp"} />
          </a>
        </div>
      </div>
      <div
        className={`md:hidden transition-all duration-700 fixed z-50 w-full flex flex-col items-center px-10 pt-4 text-xs shadow-lg rounded-b-[30px] ${
          mobile
            ? "overflow-hidden h-[60px] backdrop-blur-md md:backdrop-blur-none bg-white/10"
            : "h-[310px] md:h-auto bg-white"
        }`}
      >
        <div onClick={() => setMobile(!mobile)}>
          <h1 className="font-bold bg-blue-600 text-white text-xs w-32 p-2 text-center rounded-full uppercase">
            {mobile ? "portfolio" : "close"}
          </h1>
        </div>
        <div
          className="flex flex-col gap-5 mt-5"
          onClick={() => setMobile(!mobile)}
        >
          {navbar.map((navbar) => (
            <div
              key={navbar.id}
              className={`transition-all duration-1000 flex justify-center relative overflow-hidden w-32 md:w-20 h-7 p-1 items-center border border-blue-600 rounded-full ${
                mobile ? "translate-y-3 opacity-0" : "translate-y-0 opacity-100"
              }`}
            >
              <NavLink
                to={navbar.link}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-yellow-500 px-20 md:px-6 py-5 text-white"
                    : "peer p-8 relative z-50 text-blue-600 hover:text-white"
                }
              >
                {navbar.nama}
              </NavLink>
              <p className="transition-all duration-500 absolute inset-0 -translate-x-32 peer-hover:translate-x-0 peer-hover:bg-blue-600 w-full h-full rounded-full z-0"></p>
            </div>
          ))}
        </div>
        <div
          className={`transition-all duration-1000 delay-300 ${
            mobile ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
        >
          <a
            href="https://wa.me/6281217114742/"
            className="flex items-center hover:text-blue-600 my-3"
            target="blank"
          >
            <Button nameButton={"Whatsapp"} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
