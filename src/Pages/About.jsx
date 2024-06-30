import DataAbout from "../Components/DataAbout";
import { useEffect, useState } from "react";

function About() {
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
          className={`transition-all duration-500 w-full bg-left h-screen bg-[url('https://junxwebdev.my.id/cover.png')] ${
            loading ? "scale-[101%]" : "scale-100"
          }`}
        ></div>
      ) : (
        <DataAbout />
      )}
    </div>
  );
}

export default About;
