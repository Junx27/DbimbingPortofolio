import { useEffect, useState } from "react";
import Button from "../Components/Layouts/Button";

function DataHome() {
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
  const downloadCV = (url, filename, link) => {
    url = "http://localhost:5173/CV.pdf";
    filename = "CV Tri Saptono";
    link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const downloadPDF = (url, filename, link) => {
    url = "http://localhost:5173/Portfolio.pdf";
    filename = "Portfolio Tri Saptono";
    link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div
      className={`transition-all duration-500 bg-cover w-full h-screen bg-[url('https://dbimbing-portofolio.vercel.app/cover.png')] py-10 overflow-hidden ${
        loading ? "scale-[101%]" : "scale-100"
      }`}
    >
      <div className="flex flex-col md:flex-row justify-between pt-72 md:pr-32 md:pt-32 items-center">
        <div
          className={`transition-all duration-600 mt-3 md:mt-0 mr-5 md:mr-10 shadow-lg shadow-sky-600/20 bg-white/75 md:bg-transparent pt-10 md:pt-20 px-10 md:px-32 rounded-r-full ${
            loading ? "opacity-0 -translate-x-32" : "opacity-100 translate-x-0"
          }`}
        >
          <h3 className="font-bold text-xs md:text-sm">Hi, I am Tri Saptono</h3>
          <h1 className="font-bold text-xl md:text-3xl">
            Junior Web Developer
            <span className="text-blue-600 text-2xl md:text-4xl ml-2">.</span>
          </h1>
          <p className="text-[10px] md:text-xs mt-4 text-justify indent-8">
            I have a robust background in designing and developing a wide range
            of websites, from straightforward applications to intricate
            projects. Proficient in a variety of technologies and programming
            languages such as HTML, CSS, JavaScript, and frameworks like React
            and Laravel, I excel in crafting innovative solutions in the digital
            realm. My passion lies in pushing the boundaries of technology to
            create effective and efficient solutions that meet diverse needs.
          </p>
          <div
            className={`transition-all duration-700 flex gap-5 md:gap-10 text-[10px] md:text-xs mt-10 md:mt-20 ${
              loading ? "opacity-0 translate-y-0" : "opacity-100 -translate-y-5"
            }`}
          >
            <a
              href="#DownloadPortfolio"
              className="flex items-center hover:text-blue-600 my-3"
              onClick={downloadPDF}
            >
              <button className="transition-all duration-500 border border-blue-600 p-2 px-4 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white">
                Portfolio PDF
              </button>
            </a>
            <a
              href="#DownloadCV"
              className="flex items-center hover:text-blue-600 my-3"
              onClick={downloadCV}
            >
              <Button nameButton={"Download CV"} />
            </a>
          </div>
        </div>
        <div
          className={`transition-all duration-700 order-first md:order-last -translate-y-64 md:translate-y-0 ${
            loading
              ? "opacity-0 translate-x-0 md:translate-x-32"
              : "opacity-100 -translate-x-20 md:translate-x-5"
          }`}
        >
          <div className="w-[400px] h-[400px] absolute md:relative md:w-[500px] md:h-[500px] mx-auto">
            <img
              src="foto.png"
              alt=""
              className="rounded-full shadow-lg shadow-sky-600/20"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataHome;
