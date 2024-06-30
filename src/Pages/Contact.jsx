import DataContact from "../Components/DataContact";
import { useEffect, useState } from "react";

function Contact() {
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
          className={`transition-all duration-500 bg-top p-20 w-full h-screen bg-[url('https://junxwebdev.my.id/cover.png')] ${
            loading ? "scale-[101%]" : "scale-100"
          }`}
        ></div>
      ) : (
        <DataContact />
      )}
    </div>
  );
}

export default Contact;
