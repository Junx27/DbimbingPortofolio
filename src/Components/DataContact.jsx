import { useEffect, useState } from "react";

function DataContact() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const startLoading = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 800);
    };
    startLoading();
  }, []);
  return (
    <div
      className={`transition-all duration-500 bg-top p-5 pt-12 md:pt-20 md:p-20 w-full h-screen bg-[url('https://dbimbing-portofolio.vercel.app/cover.png')] overflow-auto ${
        loading ? "scale-[101%]" : "scale-100"
      }`}
    >
      <div
        className={`transition-all duration-700 delay-100 bg-white/50 md:bg-white/20 w-full md:w-[500px] mx-0 md:mx-auto rounded-[30px] mt-10 p-10 shadow-lg shadow-sky-600/20 ${
          loading ? "opacity-0 [transform:rotateY(180deg)]" : "opacity-100"
        }`}
      >
        <h1 className="text-center font-bold text-xl">Contact Me</h1>
        <div className="text-[10px] md:text-xs flex flex-col mt-10 mx-0 md:mx-5">
          <a
            href="https://www.linkedin.com/in/tri-saptono/"
            className="flex items-center hover:text-blue-600 my-3"
            target="blank"
          >
            <img src="linkedin.png" alt="" className="w-10 h-10 mr-3" />
            https://www.linkedin.com/in/tri-saptono/
          </a>
          <a
            href="https://www.instagram.com/junx_webdev/"
            className="flex items-center hover:text-blue-600 my-3"
            target="blank"
          >
            <img src="instagram.png" alt="" className="w-10 h-10 mr-3" />
            https://www.instagram.com/junx_webdev/
          </a>
          <a
            href="https://www.facebook.com/jung.gurit/"
            className="flex items-center hover:text-blue-600 my-3"
            target="blank"
          >
            <img src="facebook.png" alt="" className="w-10 h-10 mr-3" />
            https://www.facebook.com/jung.gurit/
          </a>
          <a
            href="mailto:trisaptonoitsumo@gmail.com"
            className="flex items-center hover:text-blue-600 my-3"
            target="blank"
          >
            <img src="mail.png" alt="" className="w-10 h-10 mr-3" />
            trisaptonoitsumo@gmail.com
          </a>
          <a
            href="https://wa.me/6281217114742/"
            className="flex items-center hover:text-blue-600 my-3"
            target="blank"
          >
            <img src="whatsapp.png" alt="" className="w-10 h-10 mr-3" />
            081217114742
          </a>
          <a
            href="https://junxwebdev.my.id/"
            className="flex items-center hover:text-blue-600 my-3"
            target="blank"
          >
            <img src="browser.png" alt="" className="w-10 h-10 mr-3" />
            https://junxwebdev.my.id/
          </a>
          <a
            href="https://github.com/Junx27"
            className="flex items-center hover:text-blue-600 my-3"
            target="blank"
          >
            <img src="github.png" alt="" className="w-10 h-10 mr-3" />
            https://github.com/Junx27
          </a>
        </div>
      </div>
    </div>
  );
}

export default DataContact;
