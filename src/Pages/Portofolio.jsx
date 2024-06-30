import DataPortofolio from "../Components/DataPortofolio";
import { useEffect, useState } from "react";

function Portofolio() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const startLoading = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 100);
    };
    startLoading();
  }, []);
  return (
    <div>
      {loading ? (
        <div
          className={`transition-all duration-500 bg-left-top w-full h-screen bg-[url('https://dbimbing-portofolio.vercel.app/cover.png')] ${
            loading ? "scale-[101%]" : "scale-100"
          }`}
        ></div>
      ) : (
        <DataPortofolio />
      )}
    </div>
  );
}

export default Portofolio;
