import Button from "./Layouts/Button.jsx";
import { useEffect, useState } from "react";
import {
  portofolio,
  code,
  feature,
  endPoint,
  descEndPoint,
} from "../Data/Portofolio.js";

function DataPortofolio() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedId, setSelectedId] = useState(0);
  const [loading, setLoading] = useState(false);
  const [handleFeature, sethandlefeature] = useState("");
  const [openFeature, setOpenFeature] = useState(false);
  const buttonFeature = (id) => {
    sethandlefeature(id);
  };
  useEffect(() => {
    const startLoading = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 800);
    };
    startLoading();
  }, []);
  const groupEndpointsByPortofolio = (portofolio) => {
    return portofolio.map((portofolio) => {
      return {
        ...portofolio,
        technologies: code.filter(
          (item) => item.portofolio_id === portofolio.id
        ),
        features: feature.filter(
          (item) => item.portofolio_id === portofolio.id
        ),
        endpoints: endPoint
          .filter((item) => item.portofolio_id === portofolio.id)
          .map((ep) => ({
            ...ep,
            descriptions: descEndPoint.filter(
              (desc) => desc.endPoint_id === ep.id
            ),
          })),
      };
    });
  };
  const portofoliosWithData = groupEndpointsByPortofolio(portofolio);
  return (
    <div>
      <div
        className={`block md:hidden transition-all duration-500 bg-fixed w-full h-screen [background-image:url('cover.png')] pb-5 md:pb-0${
          loading ? "scale-[101%]" : "scale-100"
        }`}
      >
        {selectedIndex === portofoliosWithData.length - 1 ? (
          <div></div>
        ) : (
          <button
            className={`z-30 group transition-all duration-1000 fixed top-[40%] md:top-96 right-2 md:right-12 w-10 h-10 text-white bg-blue-600 hover:bg-blue-500 rounded-full overflow-hidden ${
              loading ? "opacity-0" : "opacity-100"
            }`}
            onClick={() => {
              setSelectedIndex(
                selectedIndex < portofoliosWithData.length - 1
                  ? selectedIndex + 1
                  : selectedIndex
              );
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
              }, 800);
            }}
          >
            <p className="transition-all duration-500 group-hover:-translate-x-6">
              &rarr;
            </p>
            <button className="transition-all duration-500 absolute inset-0 bg-yellow-500 -translate-x-10 group-hover:translate-x-0 group-hover:text-black rounded-full">
              &rarr;
            </button>
          </button>
        )}
        {selectedIndex > 0 && (
          <button
            className={`z-30 group transition-all duration-1000 fixed top-[40%] md:top-96 left-2 md:left-12 w-10 h-10 text-white bg-blue-600 hover:bg-blue-500 rounded-full overflow-hidden ${
              loading ? "opacity-0" : "opacity-100"
            }`}
            onClick={() => {
              setSelectedIndex(
                selectedIndex > 0 ? selectedIndex - 1 : selectedIndex
              );
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
              }, 800);
            }}
          >
            <p className="transition-all duration-500 group-hover:translate-x-6">
              &larr;
            </p>
            <button className="transition-all duration-500 absolute inset-0 bg-yellow-500 translate-x-10 group-hover:translate-x-0 group-hover:text-black rounded-full">
              &larr;
            </button>
          </button>
        )}
        {portofoliosWithData.map(
          (item, index) =>
            index === selectedIndex && (
              <div
                className="flex flex-col md:flex-row md:justify-between gap-10 pt-20 px-0 md:pt-32 md:px-32"
                key={item.id}
              >
                <div
                  className={`relative w-full overflow-hidden ${
                    loading ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <div
                    className={`z-20 fixed pt-5 pb-5 mx-3 md:pb-0 md:pt-20 bg-white/20 w-[403px] h-[250px] rounded-[30px] transition-all duration-700 shadow-lg shadow-blue-600/20 ${
                      openFeature ? "translate-x-[800px]" : "translate-x-0"
                    }`}
                  >
                    <img
                      src={item.desktop_image}
                      alt=""
                      className={`transition-all duration-1000 w-full h-full ${
                        loading
                          ? "opacity-0 translate-y-8"
                          : "opacity-100 translate-y-0"
                      }`}
                    />
                    <img
                      src={item.mobile_image}
                      alt=""
                      className={`transition-all duration-1000 w-32 md:w-[200px] absolute top-12 md:top-56 left-56 md:left-0 ${
                        loading
                          ? "left-0 opacity-0 [transform:rotateY(180deg)]"
                          : "opacity-100"
                      }`}
                    />
                  </div>
                  {item.features
                    .filter((row) => row.id === handleFeature)
                    .map((feature) => (
                      <div
                        key={feature.id}
                        className={`transition-all mx-3 duration-1000 fixed top-[10%] w-[403px] h-[250px] p-5 bg-white/30 rounded-[30px] shadow-lg shadow-blue-600/20 ${
                          openFeature ? "translate-x-0" : "translate-x-[800px]"
                        } top-0`}
                      >
                        <img
                          src={feature.image}
                          alt=""
                          className="rounded-xl w-full h-full"
                        />
                      </div>
                    ))}
                </div>
                <div
                  className={`mt-56 transition-all duration-1000 w-full h-[400px] overflow-scroll shadow-inner shadow-blue-600/20 p-5 rounded-[30px] ${
                    loading
                      ? "opacity-0 translate-y-2"
                      : "opacity-100 translate-y-0"
                  }`}
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
                    <h1 className="font-bold text-xl">{item.name}</h1>
                    <a
                      href={item.link}
                      target="blank"
                      className="text-xs flex items-center gap-2 hover:text-blue-600"
                    >
                      <img src="browser.png" alt="" className="w-5 h-5" />
                      {item.link}
                    </a>
                    <a
                      href={item.github}
                      target="blank"
                      className="ml-0 md:ml-4 text-xs flex items-center gap-2 hover:text-blue-600"
                    >
                      <img src="github.png" alt="" className="w-5 h-5" />
                      {item.github}
                    </a>
                  </div>
                  <div
                    className={`transition-all duration-1000 flex gap-2 mt-4 overflow-auto ${
                      loading
                        ? "opacity-0 -translate-y-3"
                        : "opacity-100 translate-y-0"
                    }`}
                  >
                    {item.technologies.map((tech) => (
                      <p
                        className="text-[10px] border border-black rounded-full p-1 px-3"
                        key={tech.id}
                      >
                        {tech.name}
                      </p>
                    ))}
                  </div>
                  <h2 className="font-bold text-blue-600 mt-6 text-xs md:text-sm">
                    Description
                  </h2>
                  <p className="mt-3 text-[10px] md:text-xs text-justify">
                    {item.desc}
                  </p>
                  <h2 className="font-bold text-blue-600 mt-3 md:mt-6 text-xs md:text-sm">
                    Features
                  </h2>
                  <div
                    className={`transition-all duration-1000 text-[10px] md:text-xs flex mt-3 overflow-auto ${
                      loading
                        ? "opacity-0 gap-3 translate-y-2"
                        : "opacity-100 gap-3 translate-x-0"
                    }`}
                  >
                    {item.features.map((feature) => (
                      <div
                        key={feature.id}
                        onClick={() => {
                          buttonFeature(feature.id),
                            setOpenFeature(false),
                            setTimeout(() => {
                              setOpenFeature(true);
                            }, 500);
                        }}
                        onMouseOver={() => sethandlefeature(feature.id)}
                        onMouseLeave={() => {
                          setOpenFeature(false), sethandlefeature(null);
                        }}
                      >
                        <Button
                          nameButton={
                            feature.id === handleFeature
                              ? "View" + " " + feature.name + " " + "\u2192"
                              : feature.name
                          }
                        />
                      </div>
                    ))}
                  </div>
                  <h2 className="font-bold text-blue-600 mt-3 md:mt-6 text-xs md:text-sm">
                    End Point APIs
                  </h2>
                  <div
                    className={`transition-all duration-1000 grid grid-cols-2 mt-5 ${
                      loading
                        ? "opacity-0 gap-10 translate-y-4"
                        : "opacity-100 gap-10 translate-y-0"
                    }`}
                  >
                    {item.endpoints.map((endpoint) => (
                      <div
                        className={`text-[10px] md:text-xs relative border border-black p-5 rounded-xl md:rounded-2xl overflow-x-clip ${
                          endpoint.id === selectedId && "border-white/20"
                        }`}
                        key={endpoint.id}
                      >
                        <div
                          className={`absolute -top-3 z-30 ${
                            endpoint.id === selectedId ? "peer" : ""
                          }`}
                          onMouseOver={() => setSelectedId(endpoint.id)}
                          onMouseLeave={() => setSelectedId(null)}
                        >
                          <Button nameButton={endpoint.name + "APIs"} />
                        </div>
                        <ul className="transition-all duration-700 relative list-disc p-2 z-20 peer-hover:text-white peer-hover:[transform:rotateX(360deg)]">
                          {endpoint.descriptions.map((desc) => (
                            <li key={desc.id}>{desc.desc}</li>
                          ))}
                        </ul>
                        <div className="absolute transition-all peer-hover:[transform:rotateX(180deg)] duration-500 w-0 peer-hover:w-full opacity-0 peer-hover:opacity-100 inset-0 h-full bg-blue-600 rounded-2xl z-0"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
        )}
      </div>
      <div
        className={`hidden md:block transition-all duration-500 bg-left-top w-full h-screen [background-image:url('cover.png')] pb-5 md:pb-0${
          loading ? "scale-[101%]" : "scale-100"
        }`}
      >
        {selectedIndex === portofoliosWithData.length - 1 ? (
          <div></div>
        ) : (
          <button
            className={`z-30 group transition-all duration-1000 absolute top-96 right-5 w-8 h-8 text-white bg-blue-600 hover:bg-blue-500 rounded-full overflow-hidden ${
              loading ? "opacity-0" : "opacity-100"
            }`}
            onClick={() => {
              setSelectedIndex(
                selectedIndex < portofoliosWithData.length - 1
                  ? selectedIndex + 1
                  : selectedIndex
              );
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
              }, 800);
            }}
          >
            <p className="transition-all duration-500 group-hover:-translate-x-6">
              &rarr;
            </p>
            <button className="transition-all duration-500 absolute inset-0 bg-yellow-500 -translate-x-10 group-hover:translate-x-0 group-hover:text-black rounded-full">
              &rarr;
            </button>
          </button>
        )}
        {selectedIndex > 0 && (
          <button
            className={`z-30 group transition-all duration-1000 absolute top-96 left-5 w-8 h-8 text-white bg-blue-600 hover:bg-blue-500 rounded-full overflow-hidden ${
              loading ? "opacity-0" : "opacity-100"
            }`}
            onClick={() => {
              setSelectedIndex(
                selectedIndex > 0 ? selectedIndex - 1 : selectedIndex
              );
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
              }, 800);
            }}
          >
            <p className="transition-all duration-500 group-hover:translate-x-6">
              &larr;
            </p>
            <button className="transition-all duration-500 absolute inset-0 bg-yellow-500 translate-x-10 group-hover:translate-x-0 group-hover:text-black rounded-full">
              &larr;
            </button>
          </button>
        )}
        {portofoliosWithData.map(
          (item, index) =>
            index === selectedIndex && (
              <div
                className="flex justify-between gap-10 pt-32 px-20"
                key={item.id}
              >
                <div
                  className={`relative w-full overflow-hidden ${
                    loading ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <div
                    className={`pt-20 bg-white/20 w-full h-full rounded-[30px] transition-all duration-700 ${
                      openFeature ? "translate-x-[800px]" : "translate-x-0"
                    }`}
                  >
                    <img
                      src={item.desktop_image}
                      alt=""
                      className={`transition-all duration-1000 w-full ${
                        loading
                          ? "opacity-0 translate-y-8"
                          : "opacity-100 translate-y-0"
                      }`}
                    />
                    <img
                      src={item.mobile_image}
                      alt=""
                      className={`transition-all duration-1000 w-[200px] absolute top-56 left-0 ${
                        loading
                          ? "left-0 opacity-0 [transform:rotateY(180deg)]"
                          : "opacity-100"
                      }`}
                    />
                  </div>
                  {item.features
                    .filter((row) => row.id === handleFeature)
                    .map((feature) => (
                      <div
                        key={feature.id}
                        className={`mt-20 transition-all duration-1000 absolute top-0 w-full h-[400px] p-5 bg-white/30 rounded-[30px] ${
                          openFeature ? "translate-x-0" : "translate-x-[800px]"
                        } top-0`}
                      >
                        <img
                          src={feature.image}
                          alt=""
                          className="rounded-[15px] w-full h-full object-coontain"
                        />
                      </div>
                    ))}
                </div>
                <div
                  className={`transition-all duration-1000 w-full ${
                    loading
                      ? "opacity-0 translate-y-2"
                      : "opacity-100 translate-y-0"
                  }`}
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
                    <h1 className="font-bold text-xl">{item.name}</h1>
                    <a
                      href={item.link}
                      target="blank"
                      className="text-xs flex items-center gap-2 hover:text-blue-600"
                    >
                      <img src="browser.png" alt="" className="w-5 h-5" />
                      {item.link}
                    </a>
                    <a
                      href={item.github}
                      target="blank"
                      className="ml-0 md:ml-4 text-xs flex items-center gap-2 hover:text-blue-600"
                    >
                      <img src="github.png" alt="" className="w-5 h-5" />
                      {item.github}
                    </a>
                  </div>
                  <div
                    className={`transition-all duration-1000 flex gap-2 mt-4 overflow-auto ${
                      loading
                        ? "opacity-0 -translate-y-3"
                        : "opacity-100 translate-y-0"
                    }`}
                  >
                    {item.technologies.map((tech) => (
                      <p
                        className="text-[10px] border border-black rounded-full p-1 px-3"
                        key={tech.id}
                      >
                        {tech.name}
                      </p>
                    ))}
                  </div>
                  <h2 className="font-bold text-blue-600 mt-6 text-xs md:text-sm">
                    Description
                  </h2>
                  <p className="mt-3 text-[10px] md:text-xs text-justify">
                    {item.desc}
                  </p>
                  <h2 className="font-bold text-blue-600 mt-3 md:mt-6 text-xs md:text-sm">
                    Features
                  </h2>
                  <div
                    className={`transition-all duration-1000 text-[10px] md:text-xs flex mt-3 overflow-auto ${
                      loading
                        ? "opacity-0 gap-3 translate-y-2"
                        : "opacity-100 gap-3 translate-x-0"
                    }`}
                  >
                    {item.features.map((feature) => (
                      <div
                        key={feature.id}
                        onClick={() => {
                          buttonFeature(feature.id),
                            setOpenFeature(false),
                            setTimeout(() => {
                              setOpenFeature(true);
                            }, 500);
                        }}
                        onMouseOver={() => sethandlefeature(feature.id)}
                        onMouseLeave={() => {
                          setOpenFeature(false), sethandlefeature(null);
                        }}
                      >
                        <Button
                          nameButton={
                            feature.id === handleFeature
                              ? "View" + " " + feature.name + " " + "\u2192"
                              : feature.name
                          }
                        />
                      </div>
                    ))}
                  </div>
                  <h2 className="font-bold text-blue-600 mt-3 md:mt-6 text-xs md:text-sm">
                    End Point APIs
                  </h2>
                  <div
                    className={`transition-all duration-1000 grid grid-cols-2 mt-5 ${
                      loading
                        ? "opacity-0 gap-10 translate-y-4"
                        : "opacity-100 gap-10 translate-y-0"
                    }`}
                  >
                    {item.endpoints.map((endpoint) => (
                      <div
                        className={`text-[10px] md:text-xs relative border border-black p-5 rounded-xl md:rounded-2xl overflow-x-clip ${
                          endpoint.id === selectedId && "border-white/20"
                        }`}
                        key={endpoint.id}
                      >
                        <div
                          className={`absolute -top-3 z-30 ${
                            endpoint.id === selectedId ? "peer" : ""
                          }`}
                          onMouseOver={() => setSelectedId(endpoint.id)}
                          onMouseLeave={() => setSelectedId(null)}
                        >
                          <Button nameButton={endpoint.name + "APIs"} />
                        </div>
                        <ul className="transition-all duration-700 relative list-disc p-2 z-20 peer-hover:text-white peer-hover:[transform:rotateX(360deg)]">
                          {endpoint.descriptions.map((desc) => (
                            <li key={desc.id}>{desc.desc}</li>
                          ))}
                        </ul>
                        <div className="absolute transition-all peer-hover:[transform:rotateX(180deg)] duration-500 w-0 peer-hover:w-full opacity-0 peer-hover:opacity-100 inset-0 h-full bg-blue-600 rounded-2xl z-0"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default DataPortofolio;
