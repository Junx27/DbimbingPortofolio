import DataHome from "../Components/DataHome";
import { useEffect, useState } from "react";

function Home() {
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
          className={`transition-all duration-500 bg-cover w-full h-screen bg-[url('https://junxwebdev.my.id/cover.png')] py-10 ${
            loading ? "scale-[101%]" : "scale-100"
          }`}
        ></div>
      ) : (
        <DataHome />
      )}
    </div>
  );
}

export default Home;
